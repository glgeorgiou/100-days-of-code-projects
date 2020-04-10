   // EXERCISE: Use map to create a new Array of products
    // with a special holiday reduced price
let products = [
    { name: "iPhone", price: 700 },
    { name: "Samsung", price: 500 },
    { name: "Nokia", price: 400 }
];

function getHolidaysPrice( prod ){
    let finalObj = {
        name: prod.name,
        price: prod.price,
        holidayPrice: prod.price*0.33
    }
    return finalObj; 
}

let finalProducts = products.map(getHolidaysPrice);



// EXERCISE: Create a new Array with a list of products under
    // the total price of 600
    // Reference: function sales( prod ){ return prod.price < 600; }

    function getReducedPrice( prod ){
        var finalObj = {}
        if (prod.price < 600) {
            finalObj = {
                name: prod.name,
                price: prod.price,
            }
        }
        
        return finalObj; 
    }

    let minorProducts = products.map(getReducedPrice);