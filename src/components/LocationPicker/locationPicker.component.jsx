import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from '@mui/material';
import { getCountryData } from "../../api";

import styles from './locationPicker.module.css';

const LocationPicker = ({ handleLocationChange }) => {

    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountryData(await getCountryData());
        }

        getCountries();
    }, [setCountryData ]);

    return(
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event) => handleLocationChange(event.target.value)}>
                    <option value="global">Global</option>
                    {countryData.map((country, count) => 
                        <option key={count} value={country}>{country}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default LocationPicker;