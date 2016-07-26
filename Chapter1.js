/**
 * Created by bld_aalarcon on 14/07/16.
 */

// ----- Prompt ----- //
var age = prompt( "Please tell me your age:" ); //Type 23 and undefined
console.log(age); //23
// ----- Prompt ----- //


// ----- String and Number ----- //
var a = "99.99"; //undefined
var b = Number(a); //undefined
console.log(a+b); //99.9999.99

var c = String(b);
console.log(c);

var d = 215.9784; // undefined
console.log(d.toFixed(2)); // 215.98
// ----- String and Number ----- //


// ----- Constant ----- //
const TAX_RATE = 0.08; // undefined
// TAX_RATE = 1;  // Uncaught TypeError: Assignment to constant variable.
// ----- Constant ----- //


// ----- Loops ------ //
// Learning the while
var numOfCustomers = 99;
while (numOfCustomers > 0) {
    console.log( "How may I help you?" );
// help the customer...
    numOfCustomers = numOfCustomers - 1;
}
// versus:
var numOfCustomers = 99;
do {
    console.log( "How may I help you?" );
// help the customer...
    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

var i = 0;
// a `while..true` loop would run forever, right?
while (true) {
// keep the loop going?
    if (i <= 9) {
        console.log( i );
        i = i + 1;
    }
// time to stop the loop!
    else {
        break;
    }
} // 0 1 2 3 4 5 6 7 8 9 // the break statement stops the while!

// Learning the for
for (var i = 0; i <= 9; i = i + 1) {
    console.log( i );
} // 0 1 2 3 4 5 6 7 8 9
// ----- Loops ------ //





// ----- Practice ----- //
/*Write a program to calculate the total price of your phone purchase. OK
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. OK
You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold. OK
After you’ve calculated your purchase amount, add in the tax, OK
then print out the calculated purchase amount, properly formatted. OK
Finally, check the amount against your bank account balance to see if you can afford it or not.
*/
const SPENDING_THRESHOLD = 200;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SHOPPING_TAX = 0.08;

const MY_MONEY = 303.91;

function calculateTotalPricePhonePurchase() {
    var purchaseAmount = 0;
    //Do I still have enough money to buy a phone?
    while (purchaseAmount < MY_MONEY) {
        //Buy a phone
        purchaseAmount += PHONE_PRICE;

        //Have I spent more than I thought?
        if (purchaseAmount < SPENDING_THRESHOLD) {
            //Buy a Accessory for my phone
            purchaseAmount += ACCESSORY_PRICE;
        }
    }

    return purchaseAmount;
}

function addTax(purchaseValue) {
    return purchaseAmount + (purchaseValue * SHOPPING_TAX);
}

function formatPurchaseAmount(purchaseAmount) {
    return 'R$ ' + purchaseAmount.toFixed(2);
}

function mayAffordTheValue(moneySpent) {
    if (moneySpent > MY_MONEY) {
        return false;
    }
    return true;
}

//Shop all the phones
var purchaseAmount = calculateTotalPricePhonePurchase();
console.log(purchaseAmount);
//Add the taxes
purchaseAmount = addTax(purchaseAmount);

var formattedValue = formatPurchaseAmount(purchaseAmount);

console.log(formattedValue);

if (mayAffordTheValue(purchaseAmount)) {
    console.log('Yes! I can buy it!');
} else {
    console.log('Ops! :( I can\'t buy it!');
}
// ----- Practice ----- //