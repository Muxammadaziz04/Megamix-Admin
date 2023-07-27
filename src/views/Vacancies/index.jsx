import { BodyWrapper } from "../../components/BodyWrapper";
import Body from "./Body";
import Navbar from "./Navbar";

const Vacancies = () => {
    return (
        <BodyWrapper navbar={<Navbar />} body={<Body />} />
    );
}  

export default Vacancies;