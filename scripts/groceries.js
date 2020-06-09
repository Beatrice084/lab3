// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99,
        category: "Fruits & Vegetables"
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 2.35,
        category: "Grains"
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 10.00,
        category: "Meat"
    },
    {
        name: "rice",
        vegetarian: true,
        glutenFree: true,
        organic: true,
		price: 5.00,
        category: "Grains"
    },
    {
        name: "oranges",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 6.00,
        category: "Fruits & Vegetables"
    },
    {
		name: "steak",
		vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 15.51,
        category: "Meat"
	},
	{
		name: "speghetti pasta",
		vegetarian: true,
        glutenFree: false,
        organic: false,
        price: 1.89,
        category: "Grains"
	},
	{
		name: "cheese",
		vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 5.99,
        category: "Dairy"
    },
    {
        name: "apples",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 6.51,
        category: "Fruits & Vegetables"
    },
    {
        name: "milk",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 4.99,
        category: "Dairy"
    },
    {
        name: "Beyond Meat Burgers",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 10.99,
        category: "Meat"
    }
];
	
// source https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
function remove(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
    let product_names = [];
    let product_price = [];
    let product_category = [];
    console.log(restriction)
    for (let i=0; i<prods.length; i+=1) {
        product_names.push(prods[i])
    }
    for (let i=0; i<prods.length; i+=1) {
        if ((restriction.includes("Vegetarian")) && (prods[i].vegetarian == false)){
            remove(product_names, prods[i])
		}
		else if ((restriction.includes("GlutenFree")) && (prods[i].glutenFree == false)){
			remove(product_names, prods[i])
		}
        else if ((restriction.includes("OrganicOnly"))  && (prods[i].organic == false)){
			remove(product_names, prods[i])
		}
    }
    product_names.sort(function(a, b){return a.price - b.price});
    for (let i=0; i<product_names.length; i+=1) {
        product_price.push(product_names[i].price)
        product_category.push(product_names[i].category)
        product_names[i] = product_names[i].name
    }
    console.log(product_names)
	return [product_names, product_price, product_category];
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}