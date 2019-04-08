/**
 * Checks if it's day or night based on the provided sunrise/sunset timestamps
 * @param sunrise - timestamp
 * @param sunset - timestamp
 * @returns {string}
 */

export const getTimeOfDay = (sunrise, sunset) => {
    const timeNow = Math.trunc(Date.now()/ 1000);
    if(timeNow > sunrise && timeNow < sunset){
        return "day";
    }else {
        return "night";
    }
};


/**
 * Converts Kelvins to Celsius
 * @param kelvin - number
 * @returns {number}
 */
export const kelvinToCelsius = (kelvin) => {
    return (Math.trunc(kelvin - 273.15));
};