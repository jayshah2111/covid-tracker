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

    }

}