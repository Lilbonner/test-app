import React, { useState, useEffect } from 'react';
import ProductItem from '../components/productItem.tsx';
import { Product } from '../types';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('/grocery.json')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map((product: any, index: number) => ({
                    id: index,
                    name: product['Product Name'],
                    image: product['Image'],
                    category: product['Category'],
                    price: product['Price'],
                }));
                setProducts(formattedData);
            });
    }, []);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(savedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        .filter(product => !category || product.category === category);

    const toggleFavorite = (id: number) => {
        setFavorites(fav => fav.includes(id) ? fav.filter(favId => favId !== id) : [...fav, id]);
    };

    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
            <select value={category} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Beverages">Beverages</option>
                <option value="Sweets">Sweets</option>
            </select>
            <ul>
                {filteredProducts.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isFavorite={favorites.includes(product.id)}
                        onToggleFavorite={() => toggleFavorite(product.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;