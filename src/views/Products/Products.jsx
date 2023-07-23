import React from 'react';
import { BodyWrapper } from '../../components/BodyWrapper';
import Body from './Body';
import { Navbar } from './Navbar';

const Products = () => {
    return (
        <BodyWrapper navbar={<Navbar />} body={<Body />} />
    );
}

export default Products;
