// EXERCISE: Use the reduce method with a more complex
        // Array structure: Get the total sales of our eshop


        let products = [
            { name: "iPhone", price: 700, sales: 10 },
            { name: "Samsung", price: 500, sales: 5 },
            { name: "Nokia", price: 400, sales: 23 }
        ];

        //My solution
        products.reduce(function(acc, prop){
            return acc + prop.sales;
        },0);