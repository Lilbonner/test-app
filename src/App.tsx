import React, { useState } from 'react';
import './App.css';
import ProductList from "./components/productList.tsx";
import './App.css';
import Navbar from './components/navbar.tsx';

function App() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Navbar
                    search={search}
                    handleSearch={handleSearch}
                    category={category}
                    handleCategoryChange={handleCategoryChange}
                />
            </header>
            <main>
                <ProductList searchQuery={search} selectedCategory={category} />
            </main>
        </div>
    );
}

export default App;
