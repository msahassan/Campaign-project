import { useLoaderData } from "react-router-dom";
import DonationData from "../../components/DonationData/DonationData";
import Banner from "../../components/Header/Banner/Banner";


const Home = () => {
    const DonationDatas = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <DonationData DonationDatas={DonationDatas}></DonationData>
        </div>
    );
};

export default Home;