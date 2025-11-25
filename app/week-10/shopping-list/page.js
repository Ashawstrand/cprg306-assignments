"use client";
export const dynamic = "force-dynamic";


import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import {getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (!user) return;
    const userItems = await getItems(user.uid);
    setItems(userItems);
  }
  
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
    else {
      loadItems();
    }
  }, [user, router]);

  if (!user) return null;

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    const itemWithId = { id, ...newItem };
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;

    const noEmojis = item.name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );

    const baseName = noEmojis.split(",")[0];

    const cleanedName = baseName.trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;


