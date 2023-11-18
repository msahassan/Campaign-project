import PropTypes from "prop-types";

const DonationCard = ({ details }) => {
  const {
    picture,
    title,
    price,
    category,
    color_category_bg,
    color_card_bg,
    color_button_bg,
    color_text_button_bg,
  } = details;

  return (
    <div>
        <div
      style={{ backgroundColor: color_card_bg }}
      className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md "
    >
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img src={picture} alt="image" className="w-full h-full" />
      </div>
      <div className="p-6">
        <h6
          style={{ color: color_category_bg, backgroundColor: color_button_bg }}
          className="mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase w-32 inline-flex justify-center rounded-xl"
        >
          {category}
        </h6>
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
          {title}
        </h4>

        <p
          style={{ color: color_text_button_bg }}
          className="block mb-8 font-sans antialiased font-medium leading-relaxed text-xl"
        >
          ${price}.00
        </p>
        <a className="inline-block" href="#">
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center bg-blue-600 text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
    </div>
  );
};

DonationCard.propTypes = {
  details: PropTypes.object,
};
export default DonationCard;
