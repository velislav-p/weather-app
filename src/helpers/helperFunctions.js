export const getTimeOfDay = (sunrise, sunset) => {
    const timeNow = Math.trunc(Date.now()/ 1000);
    console.log(timeNow);
    console.log(sunset);
    if(timeNow > sunrise && timeNow < sunset){
        return "day";
    }else {
        return "night";
    }
};