export const formatTime = (date)=>{
    const createdAtFromMongoDB = new Date(date);
    return moment(createdAtFromMongoDB).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss');
}
const convert = {
    convertCurrency,
  };
  export default convert;
  