import React from 'react';
import { BodyWrapper } from '../../components/BodyWrapper';
import { ProductItem } from '../../components/Items/ProductItem';
import { Navbar } from './components/Navbar';

const Products = () => {
    return (
        <BodyWrapper 
            navbar={<Navbar />}
            body={<div>
                <ProductItem />
            </div>}
        />
    );
}

export default Products;
