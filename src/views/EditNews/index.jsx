import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { BodyWrapper } from "../../components/BodyWrapper";
import Loader from "../../components/Loader";
import { getNewsById } from "../../services/news";
import Body from "../AddNews/Body";
import Navbar from "./Navbar";


const NewsEdit = () => {
    const form = useForm()
    const params = useParams()
    const { data, isLoading } = useQuery(['news', params?.newsId], async () => await getNewsById(params?.newsId))

    useEffect(() => {
        form.reset(data)
    }, [data])

    return (
        <BodyWrapper navbar={<Navbar useForm={form} />} body={
            isLoading ? <Loader /> : <Body useForm={form} />
        } />
    );
}

export default NewsEdit;
