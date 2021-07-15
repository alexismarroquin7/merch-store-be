const formatProducts = (rows) => {
  if(rows){
    return rows.map(row => {
      let product;
      
      const fullPrice = Boolean(
        row.discount_active === 0 ||
        row.discount_percent === "0.00"
      );
      
      if(fullPrice){
        product = {
          ...row,
          discount_percent: undefined,
          discount_active: false 
        };

      } else {

        const amountOffPrice = (row.product_price * Number(row.discount_percent)).toFixed(2);
        const discount_price = `${row.product_price - amountOffPrice}`;

        product = {
          ...row,
          discount_price,
          discount_active: true
        };
      }
      
      return product;
    });
  
  } else {
    return rows;
  }
};

module.exports = { 
  formatProducts 
};