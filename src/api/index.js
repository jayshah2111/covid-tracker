import axios from "axios";

export const getData = async () => {
    try{
        const res = await axios.get('https://covid19.mathdro.id/api');

        const requiredData = {
            confirmed: res.data.confirmed,
            recovered: res.data.recovered,
            deaths: res.data.deaths,
            lastUpdate: res.data.lastUpdate
        }
        return requiredData;
    }
    catch(error){
      console.log(error);
    }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    console.log(error);
  }
};

export const getCountryData = async () => {
  try{
    // const res = await
  } catch(error){
    console.log(error);
  }
}