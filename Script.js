const tipcalcy = () =>{
    let amount=document.getElementById("bill_amount").value
    
    let tipPercentage=document.getElementById("tip_perc").value

    let totalAmount= amount *(tipPercentage / 100);
 
    let total= totalAmount+ Number (amount);

    document.getElementById("tip_total").value=totalAmount;

    document.getElementById("total_billed").value=total;

}
