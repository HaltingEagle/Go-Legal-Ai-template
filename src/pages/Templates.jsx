import React, { useEffect, useState } from 'react';
import TemplateItem from '../components/TemplateItem';
import templates from '../assets/index.jsx';
const Templates = () => {
    const [search, setSearch] = useState('');
    const [selectedCategories, setSelectedCategories] = useState(new Set(["All"]));

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev => {
            const newCategories = new Set(prev);

            if (category === "All") {
                // Toggle "All" only: clear all other selections
                return newCategories.has("All") ? new Set() : new Set(["All"]);
            } else {
                // Toggle specific category
                if (newCategories.has(category)) {
                    newCategories.delete(category); // Deselect category
                } else {
                    newCategories.add(category); // Select category
                }
                // Deselect "All" if any specific category is selected
                newCategories.delete("All");
                if (newCategories.size === 0) {
                    // Re-select "All" if no specific category is selected
                    newCategories.add("All");
                }
            }
            return newCategories;
        });
    };

    const filteredTemplates = templates.filter(template => {
        return selectedCategories.size === 0 || selectedCategories.has("All") || selectedCategories.has(template.category);
    });

    return (
        <div className='pt-40'>
            <div className="flex flex-col">
                <div className="items-center justify-center gap-4 p-3 mx-auto text-center">
                    <h1 className='text-lg text-white bg-green-500 rounded-full w-[30%] mx-auto'>
                        Smart Templates Library
                    </h1>
                    <h1 className='text-5xl max-md:text-3xl md:my-3'>Choose Your Template</h1>
                    <p className='my-3'>5000+ Legal Templates, 150 Jurisdictions!</p>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            className='py-3 pl-2 w-[100%] border border-gray-300 rounded-full'
                            placeholder='Find contracts, notices, and more'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name='search'
                        />
                        <button className='py-3 ml-2 text-white border rounded-full px-9 bg-blue-950' onClick={onSubmitHandler}>
                            Search
                        </button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 my-7">
                        {['All', 'Contracts', 'Notices', 'Legal Agreements'].map(category => (
                            <button
                                key={category}
                                onClick={() => toggleCategory(category)}
                                className={`mx-2 p-2 border rounded-full ${selectedCategories.has(category) ? "bg-blue-950 text-white" : "bg-purple-100"}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row border-t border-gray-400">
                    <div className="hidden md:block">
                        <div className="sticky flex flex-col mx-3 my-3 border border-gray-400 rounded-sm top-40">
                            <h1 className='text-center text-md'>Filters</h1>
                            <div className="flex flex-row p-2 border-t">
                                <input
                                    type="text"
                                    className='py-3 pl-2 w-[100%] border border-gray-300 rounded-full'
                                    placeholder='Find contracts, notices, and more'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    name='search'
                                />
                                <button className='px-2 py-2 ml-2 text-white border rounded-full bg-blue-950' onClick={onSubmitHandler}>
                                    Search
                                </button>
                            </div>
                            <div className="flex flex-col items-start gap-2 p-2 border-t">
                                {['Contracts', 'Notices', 'Legal Agreements'].map(category => (
                                    <div key={category} className="flex flex-row items-center justify-center gap-2 text-center">
                                        <input
                                            type="checkbox"
                                            className='w-4 h-5'
                                            checked={selectedCategories.has(category)}
                                            onChange={() => toggleCategory(category)}
                                        />
                                        <p>{category}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full border-gray-400 md:border-l max-md:border-t">
                        {filteredTemplates.map((item, index) => (
                            <TemplateItem key={index} id={item.id} category={item.category} title={item.title} pages={item.pages} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Templates;
