import React from 'react';
import { BodyWrapper } from '../../components/BodyWrapper';
import Body from './components/Body';
import { Navbar } from './components/Navbar';

const Products = () => {
    return (
        <BodyWrapper navbar={<Navbar />} body={<Body />} />
    );
}

export default Products;
