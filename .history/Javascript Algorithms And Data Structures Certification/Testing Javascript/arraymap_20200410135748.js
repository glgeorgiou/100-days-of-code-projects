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