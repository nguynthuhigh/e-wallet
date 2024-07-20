import moment from 'moment';
export const formatCurrency = (balance,currency)=>{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
    return formatter.format(balance)
  }
export const formatTime = (date)=>{
    const createdAtFromMongoDB = new Date(date);
    return moment(createdAtFromMongoDB).utcOffset('+07:00').format('YYYY-MM-DD HH:mm:ss');
}
const format ={
    formatCurrency,
    formatTime
}
export default format