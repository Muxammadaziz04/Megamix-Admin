import { BodyWrapper } from "../../components/BodyWrapper";
import Body from "./Body";
import Navbar from "./Navbar";

const AddProduct = () => {
    return (
        <BodyWrapper navbar={<Navbar />} body={<Body />} />
    );
}

export default AddProduct;
