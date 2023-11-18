import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";
import PropTypes from 'prop-types'; 

const CardDetails = () => {

  const [details, setDetails] = useState({});
  const {id} = useParams();
 console.log(id)
  const donationDetails = useLoaderData();
  console.log(donationDetails)

  useEffect(() => {
    const findDetails = donationDetails?.find((details) => details.id === id);
    setDetails(findDetails);
  }, [donationDetails, id]);
  
console.log(details);
  return (
   <div>
        
        <CardDetail details={details}></CardDetail>
   </div>
  )

};
CardDetails.propTypes={
    data:PropTypes.object
}

export default CardDetails;
