import React from 'react';
import { BodyWrapper } from '../../components/BodyWrapper';
import { Item } from '../../components/Item';
import { Navbar } from './components/Navbar';

const Products = () => {
    return (
        <BodyWrapper 
            navbar={<Navbar />}
            body={<div>
                <Item />
            </div>}
        />
    );
}

export default Products;
