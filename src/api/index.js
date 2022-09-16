import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {

    let modifiedUrl = url;

    if(country){
      modifiedUrl = `${url}/countries/${country}`;
    }

    try{
        const res = await axios.get(modifiedUrl); 

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
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    console.log(error);
  }
};

export const getCountryData = async () => {
  try{
    const res = await axios.get(`${url}/countries`);
    return res.data.countries.map((country) => country.name);
  } catch(error){
    console.log(error);
  }
}