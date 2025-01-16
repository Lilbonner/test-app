import React, { useState, useEffect } from 'react';
import ProductItem from '../components/productItem.tsx';
import { Product } from '../types';
import s from './ProductList.module.css';


interface ProductListProps {
    searchQuery: string;
    selectedCategory: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchQuery, selectedCategory }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

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

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(product => !selectedCategory || product.category === selectedCategory);

    const toggleFavorite = (id: number) => {
        setFavorites(fav => fav.includes(id) ? fav.filter(favId => favId !== id) : [...fav, id]);
    };

    return (
        <ul className={s.productList}>
            {filteredProducts.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={() => toggleFavorite(product.id)}
                />
            ))}
        </ul>
    );
};

export default ProductList;
