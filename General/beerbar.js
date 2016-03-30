//You and your friends are at a bar
//A drink costs B dollars, you have N dollars total. For every M beers bought, you can get a free beer

// you have three inputs:
// dollars: their total amount of dollars
// price: the unit price of beer
// caps: the number of beer bottlecaps needed to redeem for one free beer

// how many beers can they drink, total?


const totalDrinks = (spendingAmount, priceBeer, numToRedeemFreeBeer) => {
  // you need to spend this amount to get a free beer
  let redeemable = priceBeer * numToRedeemFreeBeer; // if you spend redeemable dollars, you get +1 beer
  let totalBeers = 0;
  if (spendingAmount > redeemable) {
    let multiple = Math.floor(spendingAmount/redeemable)
    totalBeers = totalBeers + (multiple * numToRedeemFreeBeer + multiple);
    spendingAmount = spendingAmount - redeemable * multiple
  }

  // if there are spendingAmount left over
  if (spendingAmount > priceBeer) {
    totalBeers = totalBeers + Math.floor(spendingAmount / priceBeer)
  }
  return totalBeers
}

console.log(totalDrinks(10,1, 5)) //12

// next do it recursively
