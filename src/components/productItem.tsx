import React from 'react';
import { Product } from '../types';

interface ProductItemProps {
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, isFavorite, onToggleFavorite }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <button onClick={onToggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </li>
    );
};

export default ProductItem;
