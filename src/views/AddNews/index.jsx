import { useForm } from "react-hook-form";
import { BodyWrapper } from "../../components/BodyWrapper";
import Body from "./Body";
import Navbar from "./Navbar";


const NewsAdd = () => {
    const form = useForm()
    
    return (
        <BodyWrapper navbar={<Navbar useForm={form} />} body={<Body useForm={form} />} />
    );
}

export default NewsAdd;
