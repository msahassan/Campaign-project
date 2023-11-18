import DonationCard from "../DonationCard/DonationCard";
import PropTypes from 'prop-types'; 


const DonationData = ({DonationDatas}) => {
    return (
        <div>
            <h1>All Donation Items</h1>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    DonationDatas?.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                }
            </div>
        </div>
    );
};

DonationData.propTypes={
    DonationDatas: PropTypes.array
}
export default DonationData;