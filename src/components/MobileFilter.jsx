// MobileFilter.jsx
import React, { useState } from 'react';

const MobileFilter = ({ selectedCategories, categories, toggleCategory, search, setSearch }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={handleToggle}
                className="fixed z-50 p-3 text-white rounded-full shadow-lg bottom-5 right-5 bg-blue-950 md:hidden"
            >
                Filter
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 md:hidden">
                    <div className="w-3/4 p-6 overflow-y-auto bg-white rounded-lg max-h-3/4">
                        <div className="flex flex-row items-center justify-between">
                        <h2 className="mb-2 text-lg font-semibold text-start">Filters</h2>
                        <button onClick={handleToggle} className="mb-2 text-xl text-black ">X</button>
                        </div>
                        <input
                            type="text"
                            className="w-full p-2 mb-4 border border-gray-300 rounded-full"
                            placeholder="Search templates"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        {categories.map(category => (
                            <div key={category} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.has(category)}
                                    onChange={() => toggleCategory(category)}
                                    className="mr-2"
                                />
                                <label>{category}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileFilter;
