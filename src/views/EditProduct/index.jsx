import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { BodyWrapper } from "../../components/BodyWrapper";
import Loader from "../../components/Loader";
import { getProductById } from "../../services/product";
import Body from "../AddProduct/Body";
import Navbar from "./Navbar";

const EditProduct = () => {
    const form = useForm()
    const params = useParams()
    const { data: product, isLoading } = useQuery(['product', params?.productId], () => getProductById(params?.productId))

    useEffect(() => {
        form.reset(product)
    }, [product])

    return (
        <BodyWrapper navbar={<Navbar useForm={form} />} body={
            isLoading ? <Loader /> : <Body useForm={form} />
        } />
    );
}

export default EditProduct;
