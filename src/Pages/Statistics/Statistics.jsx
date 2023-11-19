
import { useLoaderData } from 'react-router-dom';
import DataChart from './dataChart';


const Statistics = () => {

    const data = useLoaderData();
  

    
    return (
        <div>
           <DataChart data={data}></DataChart>
        </div>
            
        
        
    );
};

export default Statistics;