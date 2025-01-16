import React, { useState } from 'react';
import ProductList from "./components/productList.tsx";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/navbar.tsx";

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
                <CustomNavbar
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
