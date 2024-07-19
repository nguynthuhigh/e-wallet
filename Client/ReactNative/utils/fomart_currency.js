export const formatCurrency = (balance,currency)=>{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
    return formatter.format(balance)
  }

const format ={
    formatCurrency
}
export default format