import { BodyWrapper } from "../../components/BodyWrapper";
import Body from "./Body";
import Navbar from "./Navbar";

const News = () => {
    return (
        <BodyWrapper navbar={<Navbar />} body={<Body />} />
    );
}

export default News;
