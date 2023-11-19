import PropTypes from "prop-types";
import {  PieChart, Pie,Tooltip} from 'recharts';
const DataChart = ({data}) => {
   
    return (
        <div className="flex justify-center items-center">
           <PieChart width={400} height={400}>
          <Pie
            dataKey="price"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
       
        </div>
    );
};
DataChart.propTypes={
    data:PropTypes.array
}
export default DataChart;