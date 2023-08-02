import { BodyWrapper } from '../../components/BodyWrapper'
import Body from './Body';
import Navbar from './Navbar';

const Club = () => {
    return (
        <BodyWrapper 
            navbar={<Navbar />}
            body={<Body />}
        />
    );
}

export default Club;
