import HeaderAdmin from '../components/HeaderAdmin'
import BodyAdmin from '../components/BodyAdmin';

export default function Admin() {
    return (
        <div id="adminPage" className="page">
        <HeaderAdmin></HeaderAdmin>
        <BodyAdmin></BodyAdmin>
        </div>
    );
}
