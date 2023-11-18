import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [isShowData, setIsShowData] = useState(false);
  const [donations, setDonations] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    if (donationItem) {
      setDonations(donationItem);

      const total = donations.reduce(
        (preValue, currentItem) => preValue + currentItem.price,0);
        
      
      setTotalPrice(total);
    } else {
      setNoDataFound("No Data Found");
    }
  }, []);

  console.log(donations);

  const handleRemove = () => {
    localStorage.clear();
    setDonations([]);
    setNoDataFound("No Data Found");
  };

  return (
    <div>
      {noDataFound ? (
        <p className="h-[80vh] flex justify-center items-center text-3xl font-medium">
          {noDataFound}
        </p>
      ) : (
        <div>
          {donations.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="bg-blue-600 text-white px-5 py-2 block mx-auto rounded-lg"
              >
                Deleted all
              </button>
              <h1 className="text-blue-500 text-lg font-medium">Total Donation: ${totalPrice}.00</h1>
            </div>
          )}
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {isShowData
              ? donations.map((details) => (
                  <DonationCard
                    key={details.id}
                    details={details}
                  ></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((details) => (
                    <DonationCard
                      key={details.id}
                      details={details}
                    ></DonationCard>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShowData(!isShowData)}
              className="bg-blue-600 text-white px-5 py-2 block mx-auto rounded-lg mt-8"
            >
              {isShowData ? "See less" : "See All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
