import { BodyWrapper } from '../../components/BodyWrapper'
import GalleryItem from '../../components/Items/GalleryItem';
import Body from './Body';
import Navbar from './Navbar';

const FotoGallery = () => {
    return (
        <BodyWrapper
            navbar={<Navbar />} 
            body={<Body />} 
        />
    );
}

export default FotoGallery;
