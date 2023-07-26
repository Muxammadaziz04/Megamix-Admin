import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { BodyWrapper } from "../../components/BodyWrapper";
import Loader from "../../components/Loader";
import { getFotoGalleryById } from "../../services/gallery";
import Body from "../AddFoto/Body";
import Navbar from "./Navbar";

const EditFoto = () => {
    const form = useForm()
    const params = useParams()
    const { data, isLoading } = useQuery(['fotos', params?.id], async () => await getFotoGalleryById(params.id))

    useEffect(() => {
        if (data) form.reset(data)
    }, [data])

    return (
        <BodyWrapper body={
            isLoading ? <Loader /> : <Body useForm={form} />
        } navbar={<Navbar useForm={form} />} />
    );
}

export default EditFoto;
