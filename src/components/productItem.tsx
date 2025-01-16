import React from 'react';
import { Product } from '../types';
import s from "./productItem.module.css"

interface ProductItemProps {
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, isFavorite, onToggleFavorite }) => {
    return (
        <div className={s.card}>
                <img src={product.image} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: {product.price}</p>
                <button onClick={onToggleFavorite} className="btn btn-primary">
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
