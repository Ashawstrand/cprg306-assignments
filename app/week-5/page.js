import React from 'react';
import NewItem from "./new-item";

const Page = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-4xl mt-16 ">Add New Item</h1>
            <NewItem />
        </div>
    );
};

export default Page;