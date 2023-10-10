// Product Database Exploration
const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics', ratings: [5, 5, 4, 4, 5] },
    { name: 'Shirt', price: 20, category: 'Apparel', ratings: [4, 3, 5, 4, 4] },
    { name: 'Microwave', price: 150, category: 'Electronics', ratings: [4, 5, 4, 5] },
    { name: 'Shoes', price: 50, category: 'Apparel', ratings: [5, 5, 4, 4] },
    { name: 'Bag', price: 70, category: 'Apparel', ratings: [3, 4, 3, 4, 4] },
    { name: 'Headphones', price: 100, category: 'Electronics', ratings: [5, 5, 5, 4, 4] }
  ];
  
  // Task 1: Print each product's name to the console.
  console.log("Task 1: Product Names");
  products.forEach(product => console.log(product.name));
  
  // Task 2: List all products that are under $100.
  const under100Products = products.filter(product => product.price < 100);
  console.log("\nTask 2: Products Under $100");
  console.log(under100Products);
  
  // Task 3: Create a new array containing the names of all products.
  const productNames = products.map(product => product.name);
  console.log("\nTask 3: Product Names Array");
  console.log(productNames);
  
  // Task 4: Are there any products with a rating below 3?
  const hasLowRating = products.some(product => Math.min(...product.ratings) < 3);
  console.log("\nTask 4: Products with Rating Below 3");
  console.log(hasLowRating ? "Yes" : "No");
  
  // Task 5: Are all the products below $1500?
  const allBelow1500 = products.every(product => product.price < 1500);
  console.log("\nTask 5: Are All Products Below $1500?");
  console.log(allBelow1500 ? "Yes" : "No");
  
  // Task 6: Retrieve the first product that belongs to the 'Electronics' category.
  const electronicsProduct = products.find(product => product.category === 'Electronics');
  console.log("\nTask 6: First Electronics Product");
  console.log(electronicsProduct);
  
  // Task 7: Calculate the total cost of all products combined.
  const totalCost = products.reduce((sum, product) => sum + product.price, 0);
  console.log("\nTask 7: Total Cost of All Products");
  console.log("$" + totalCost);
  
  // Task 8: Create a new array containing the average rating of each product.
  const averageRatings = products.map(product => ({
    name: product.name,
    averageRating: product.ratings.reduce((sum, rating) => sum + rating, 0) / product.ratings.length
  }));
  console.log("\nTask 8: Average Ratings of Each Product");
  console.log(averageRatings);
  