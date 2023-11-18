import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const DonationCard = ({ data }) => {
  const {picture,title,category,color_card_bg,color_category_bg,color_text_button_bg,id,color_button_bg} = data || {};
  

 
  return (
   <Link to={`/details/${id}`}>
    <div
      className="card card-compact shadow-xl"
    >
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div style={{backgroundColor: color_card_bg}} className="card-body">
        <h2 style={{color: color_category_bg, backgroundColor: color_button_bg}} 
        className="card-title px-4 py-1 inline-flex w-32 rounded-lg justify-center
         items-center"><span>{category}</span></h2>
        <h2 style={{ color:color_text_button_bg }} className="font-semibold text-lg">
          {title}
        </h2>
      </div>
    </div>
   </Link>
  );
};

DonationCard.propTypes={
  data:PropTypes.object
}
export default DonationCard;
