function holidaySale(
    product : string,
    sale : number,
    tax : number,
    discount : number,
):number{
    let price : number= 0

    if(product === "sunglasses") price = 29;
    if(product === "hats") price = 19;
    if(product === "shoes") price = 59;

    let totalSaleforIndividual : number = price * sale

    return totalSaleforIndividual - tax * totalSaleforIndividual - discount * totalSaleforIndividual

}

const sunglasses: number = holidaySale("sunglasses",20,0.15,0.25) 
const hats: number = holidaySale("hats",15,0.12,0.15)
const shoes: number = holidaySale("shoes",50,0.08,0.45)

console.log(`The total price from the sales of sunglasses is $${sunglasses}`);
console.log(`The total price from the sales of hats is $${hats}`);
console.log(`The total price from the sales of shoes is $${shoes}`);
