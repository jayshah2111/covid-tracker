import React from "react";
import { NativeSelect, FormControl } from '@mui/material';
import styles from './locationPicker.module.css';

const LocationPicker = () => {
    return(
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default LocationPicker;