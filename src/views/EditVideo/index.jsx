import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { BodyWrapper } from "../../components/BodyWrapper";
import Loader from "../../components/Loader";
import { getVideoGalleryById } from "../../services/gallery";
import Body from "../AddVideo/Body";
import Navbar from "./Navbar";

const EditVideo = () => {
    const params = useParams()
    const form = useForm()
    const { data, isLoading } = useQuery(['videos', params?.id], async () => await getVideoGalleryById(params.id))

    useEffect(() => {
        form.reset(data)
    }, [data])

    return (
        <BodyWrapper
            navbar={<Navbar useForm={form} />}
            body={(
                isLoading ? <Loader /> : <Body useForm={form} />
            )}
        />
    );
}

export default EditVideo;
