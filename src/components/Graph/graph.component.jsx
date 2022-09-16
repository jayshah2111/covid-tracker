import React, {useState, useEffect} from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, BarElement, Legend } from 'chart.js'; 
import styles from './graph.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, BarElement, Legend );

const Graph = ({ data : {confirmed, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineGraph = (
        dailyData[0]
        ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }], 
                }}
            />
        )  : null
    );

    console.log(confirmed); 

    const barGraph = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );

    return(
        <div className={styles.container}>
            {country ? barGraph : lineGraph} 
            {/* {lineGraph} */}
        </div>
    );
}

export default Graph;