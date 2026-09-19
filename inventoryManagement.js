// Write your code here

//function for displaying first product of array
function logFirstProduct(){
  console.log(products[0])
}

//function for adding a new product name to array
function addProduct(name){
  products.push(name)
  console.log(products)
}

//function for updating a name to an existing product 
function updateProductName(position, newName){
  products[position] = newName
  console.log(products)
}

//removing the last product from array
function removeLastProduct(){
  products.pop()
  console.log(products)
}

//defining the product array with 4 strings
const products = ["Laptop", "Phone", "Headphone", "Monitor"]

//testing for logging first product
logFirstProduct(products)

//testing for adding a new product to array
addProduct("Mouse")

//testing update for renaming a previous prodcut and getting position
updateProductName(4, "Optical Mouse")

//testing removing last product from array
removeLastProduct()

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};


