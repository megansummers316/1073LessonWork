// STEP 1: Declare and initialize variables
let productList = document.querySelector('tbody');
console.log(productList); //displays the element tag

	// STEP 1a: Grab the parts of the DOM that we need to build the invoice
	let totalData = document.querySelector('tfoot td:first-of-type');
	console.log(totalData); //displays the element tag

	// STEP 1b: Build the products array in the format 'Product Name:0.00'
	let products = [
		'Frozen Pizza:8.99', 
		'Orange Juice:4.95',
		'Milk:6.99',
		'Eggs (12):4.99',
		'Bacon:9.99'
	]
	console.log(products); //displays as list of strings

	// STEP 1c: Set up invoiceTotal variable - start at zero
	let invoiceTotal = 0;

	// STEP 1d: Declare the itemRow and the itemDetail array;


// STEP 2: Build a loop to iterate through the products array
for (i = 0; i < products.length; i++) {
	// STEP 3: Break apart the product name from the price for each item with split()
	products[i] = products[i].split(':');
	// STEP 4: Now we have an array as an element of an array - set the second array element to the product price (as type number)
	products[i][1] = Number(products[i][1]);
	console.log(products[i]);
	// STEP 5: Add the price of this product to the invoice total
	invoiceTotal += products[i][1];
	console.log(invoiceTotal);
	// STEP 6: Capture each product name and price as variables 
	let itemDesc = products[i][0];
	let itemPrice = products[i][1];
	// STEP 7: Create a TR element for this product and price in the invoice table
	let itemRow = document.createElement('tr');
	// STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
	let itemDetails = '<td>' + itemDesc + '</td><td>' + itemPrice + '</td>';
	console.log(itemDetails);
	// STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)
	itemRow.innerHTML = itemDetails;
	console.log(itemRow);
	productList.appendChild(itemRow);
}
// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
totalData.textContent = invoiceTotal.toFixed(2);
