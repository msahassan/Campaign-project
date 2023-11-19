import PropTypes from "prop-types";
import swal from "sweetalert";

const CardDetail = ({ details }) => {
  const { picture, title, description, price } = details;

  const handleAddToDonation = () => {
    const addedDonationArray = [];
    const donationItem = JSON.parse(localStorage.getItem("donation"));

    if (!donationItem) {
      addedDonationArray.push(details);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Thank You!", "Donation added succesfully!", "success");
    } else {
      addedDonationArray.push(...donationItem, details);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));
      swal("Good job!", "Donation added succesfully!", "success");
    }
  };

  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${picture})` }}
          className="bg-no-repeat mt-10 h-[70vh] w-full bg-cover rounded-xl shadow-lg -z-10"
        ></div>
        <button
          onClick={handleAddToDonation}
          className="bg-[#FF444A] px-5 py-2 rounded-lg ml-6 bottom-[8%] font-medium absolute z-20 "
        >
          Donate ${price}
        </button>
        <div className="h-36 w-full bg-black rounded-b-xl absolute  bottom-0 flex items-center opacity-50"></div>
      </div>
      <h1 className="mt-8 text-3xl font-extrabold">{title}</h1>
      <p className="mt-5 text-lg">{description}</p>
    </div>
  );
};
CardDetail.propTypes = {
  details: PropTypes.object,
};
export default CardDetail;
