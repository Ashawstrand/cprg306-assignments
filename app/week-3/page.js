import React from 'react';
import ItemList from "./item-list";

const Page = () => {
    return (
      <div className="min-h-screen bg-black p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
            Shopping List
        </h1>
        <ItemList />
      </div>
    );
};

export default Page;
