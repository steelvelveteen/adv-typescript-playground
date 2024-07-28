import { filter, from, map, Observable, of, reduce, switchMap, tap } from 'rxjs';

// Exercise 1 SAMPLE EXERCISE FOR REFERENCE
// ----------------------------------------------------------------
// interface User {
//     id: string;
//     name: string;
//     age: number;
// }
// const userIds$ = from(['1', '2', '3']);

// const fetchUserDetails = (id: string): Observable<User> => {
//     // Mock API call
//     return of({ id, name: `User ${id}`, age: 20 + parseInt(id) }).pipe(delay(500));
// };

// // Boilerplate for the solution
// userIds$
//     .pipe(
//         // Use mergeMap to fetch details for each user concurrently
//         mergeMap((id) => fetchUserDetails(id)),
//         // Use reduce to accumulate the total age and count of users
//         reduce(
//             (acc, user) => {
//                 acc.totalAge += user.age;
//                 acc.count += 1;
//                 return acc;
//             },
//             { totalAge: 0, count: 0 }
//         ),
//         // Map the result to calculate the average age
//         map((acc) => acc.totalAge / acc.count)
//     )
//     .subscribe((averageAge) => {
//         console.log(`Average Age: ${averageAge}`);
//     });

// Exercise 2
// ----------------------------------------------------------------
// TODO: Filter: Use the filter operator to select only products from the 'Electronics' category.
// TODO: Reduce: Use the reduce operator to accumulate the total price and count of the filtered products.
// TODO: Map: Use the map operator to calculate the average price from the accumulated total price and count.
// TODO: SwitchMap: Use switchMap if necessary to handle observable transformations.

// interface Product {
//     id: string;
//     category: string;
//     price: number;
// }

// const products$ = from<Product[]>([
//     { id: '1', category: 'Electronics', price: 100 },
//     { id: '2', category: 'Books', price: 20 },
//     { id: '3', category: 'Electronics', price: 150 },
//     { id: '4', category: 'Books', price: 30 },
//     { id: '5', category: 'Electronics', price: 200 }
// ]);

// // Your task: Implement the declarative approach here
// products$
//     .pipe(
//         filter((product) => product.category === 'Electronics'),
//         reduce(
//             (acc, product) => {
//                 acc.totalPrice += product.price;
//                 acc.count += 1;
//                 return acc;
//             },
//             { totalPrice: 0, count: 0 }
//         ),
//         map(({ totalPrice, count }) => totalPrice / count)
//     )
//     .subscribe((averagePrice) => {
//         console.log(`Average Price of Electronics: ${averagePrice}`);
//     });

// Exercise 3
// ----------------------------------------------------------------
// TODO: Filter: Include only items with a quantity greater than 10.
// TODO: Reduce: Calculate the total value and total quantity of the filtered items.
// TODO: SwitchMap: Use switchMap to simulate fetching a discount based on the total value.
// TODO: Map: Apply the discount to calculate the final value.
// TODO: Subscribe: Output the final discounted value.
// Define the Item and Discount interfaces

// interface Item {
//     category: string;
//     name: string;
//     price: number;
//     quantity: number;
// }

// interface Discount {
//     discountRate: number;
// }

// // Simulate a function to fetch a discount based on the total value
// const fetchDiscount = (totalValue: number): Observable<Discount> => {
//     // Placeholder for discount fetch logic
//     return of({ discountRate: totalValue > 1000 ? 0.1 : 0.05 }); // Example discount rates
// };

// const items$ = from<Item[]>([
//     { category: 'Electronics', name: 'Laptop', price: 1200, quantity: 15 },
//     { category: 'Electronics', name: 'Smartphone', price: 800, quantity: 5 },
//     { category: 'Furniture', name: 'Desk', price: 150, quantity: 20 },
//     { category: 'Furniture', name: 'Chair', price: 75, quantity: 12 },
//     { category: 'Office Supplies', name: 'Pen', price: 2, quantity: 50 }
// ]);

// items$
//     .pipe(
//         filter((item: Item) => item.quantity > 10),
//         reduce(
//             (acc, item) => {
//                 acc.totalValue += item.price * item.quantity;
//                 acc.totalQuantity += item.quantity;
//                 return acc;
//             },
//             { totalValue: 0, totalQuantity: 0 }
//         ),
//         switchMap(({ totalValue }) =>
//             fetchDiscount(totalValue).pipe(
//                 map(({ discountRate }) => ({ totalValue, discountRate }))
//             )
//         ),
//         map(({ totalValue, discountRate }) => totalValue * (1 - discountRate))
//     )
//     .subscribe((finalValue) => {
//         console.log(`Final Value After Discount: ${finalValue}`);
//     });

// Exercise 4
// ----------------------------------------------------------------
// TODO: Filter Orders: Only consider orders where the quantity is greater than 2.
// TODO: Reduce: Calculate the total value and average quantity of these filtered orders.
// TODO: Fetch Discount: Based on the total value, fetch the discount.
// TODO: Apply Discount: Calculate the final value after applying the discount.
// Define the Sale and Discount interfaces
// interface Sale {
//     product: string;
//     region: string;
//     amount: number;
// }

// interface Discount {
//     discountRate: number;
// }

// // Simulate a function to fetch a discount based on the total revenue
// const fetchDiscount = (totalRevenue: number): Observable<Discount> => {
//     // Placeholder for discount fetch logic
//     return of({ discountRate: totalRevenue > 2000 ? 0.15 : 0.05 }); // Example discount rates
// };

// const sales$ = from<Sale[]>([
//     { product: 'Laptop', region: 'North', amount: 1200 },
//     { product: 'Mouse', region: 'South', amount: 30 },
//     { product: 'Keyboard', region: 'North', amount: 80 },
//     { product: 'Monitor', region: 'North', amount: 300 },
//     { product: 'Headphones', region: 'South', amount: 150 }
// ]);

// // TODO: Filter sales data for region 'North'
// // TODO: Reduce to calculate total revenue and average price per sale
// // TODO: Use switchMap to fetch discount based on total revenue
// // TODO: Map to apply discount and calculate final revenue
// sales$
//     .pipe(
//         filter((sale) => sale.region === 'North'),
//         reduce(
//             (acc, sale) => {
//                 acc.totalRevenue += sale.amount;
//                 acc.numberOfSales += 1;
//                 return acc;
//             },
//             { totalRevenue: 0, numberOfSales: 0 }
//         ),
//         switchMap(({ totalRevenue, numberOfSales }) => {
//             const averagePricePerSale = totalRevenue / numberOfSales;

//             return fetchDiscount(totalRevenue).pipe(
//                 map((discount) => ({
//                     averagePricePerSale,
//                     finalRevenue: totalRevenue * (1 - discount.discountRate)
//                 }))
//             );
//         }),
//         map(({ averagePricePerSale, finalRevenue }) => ({ averagePricePerSale, finalRevenue }))
//     )
//     .subscribe(({ averagePricePerSale, finalRevenue }) => {
//         console.log(`Average Price Per Sale: ${averagePricePerSale}`);
//         console.log(`Final Revenue After Discount: ${finalRevenue}`);
//     });

// Exercise 5
// ----------------------------------------------------------------
// Define the Order and Discount interfaces
// interface Order {
//     product: string;
//     quantity: number;
//     price: number;
// }

// interface Discount {
//     discountRate: number;
// }

// // Simulate a function to fetch a discount based on the total revenue
// const fetchDiscount = (totalRevenue: number): Observable<Discount> => {
//     // Placeholder for discount fetch logic
//     return of({ discountRate: totalRevenue > 5000 ? 0.2 : 0.1 }); // Example discount rates
// };

// // const orders$ = from<Order[]>([
// //     { product: 'Laptop', quantity: 10, price: 1200 },
// //     { product: 'Mouse', quantity: 6, price: 25 },
// //     { product: 'Keyboard', quantity: 3, price: 75 },
// //     { product: 'Monitor', quantity: 8, price: 300 },
// //     { product: 'Headphones', quantity: 5, price: 150 }
// // ]);
// const orders$ = from<Order[]>([
//     { product: 'Laptop', quantity: 10, price: 1200 },
//     { product: 'Mouse', quantity: 8, price: 25 },
//     { product: 'Keyboard', quantity: 12, price: 75 },
//     { product: 'Monitor', quantity: 6, price: 300 },
//     { product: 'Chair', quantity: 3, price: 75 }
// ]);

// // TODO: Filter orders with quantity greater than 5
// // TODO: Reduce to calculate total revenue, total quantity, and number of orders
// // TODO: Use switchMap to fetch discount based on total revenue
// // TODO: Map to calculate average quantity and apply discount to compute final revenue
// orders$
//     .pipe(
//         filter((order) => order.quantity > 5),
//         reduce(
//             (acc, order) => {
//                 acc.totalRevenue += order.price * order.quantity;
//                 acc.totalQuantity += order.quantity;
//                 acc.numberOfOrders += 1;
//                 return acc;
//             },
//             { totalRevenue: 0, totalQuantity: 0, numberOfOrders: 0 }
//         ),
//         switchMap(({ totalRevenue, totalQuantity, numberOfOrders }) => {
//             console.log('Test total revenue: ', totalRevenue);
//             console.log('Test total quantity: ', totalQuantity);
//             const averageQuantity = totalQuantity / numberOfOrders;

//             return fetchDiscount(totalRevenue).pipe(
//                 map((discount) => ({
//                     averageQuantity,
//                     finalRevenue: totalRevenue * (1 - discount.discountRate)
//                 }))
//             );
//         }),
//         map(({ averageQuantity, finalRevenue }) => ({ averageQuantity, finalRevenue }))
//     )
//     .subscribe(({ averageQuantity, finalRevenue }) => {
//         console.log(`Average Quantity: ${averageQuantity}`); // 8
//         console.log(`Final Revenue After Discount: ${finalRevenue}`); // 11920 unverified
//     });

// Exercise 6
// ----------------------------------------------------------------
// Define the Sale and Discount interfaces
// interface Sale {
//     category: string;
//     product: string;
//     amount: number;
// }

// interface Discount {
//     discountRate: number;
// }

// // Simulate a function to fetch a discount based on the total sales amount
// const fetchDiscount = (totalSales: number): Observable<Discount> => {
//     // Placeholder for discount fetch logic
//     return of({ discountRate: totalSales > 5000 ? 0.15 : 0.05 }); // Example discount rates
// };

// // Sample sales data
// const sales$ = from<Sale[]>([
//     { category: 'Electronics', product: 'Laptop', amount: 1200 },
//     { category: 'Electronics', product: 'Smartphone', amount: 800 },
//     { category: 'Furniture', product: 'Desk', amount: 150 },
//     { category: 'Electronics', product: 'Headphones', amount: 150 },
//     { category: 'Office Supplies', product: 'Pen', amount: 2 },
//     { category: 'Electronics', product: 'Monitor', amount: 300 }
// ]);

// // TODO: Filter only 'Electronics' category
// // TODO: Reduce to calculate total sales amount
// // TODO: Use switchMap to fetch discount based on total sales amount
// // TODO: Map to apply discount and calculate final amount
// sales$
//     .pipe(
//         filter((sale) => sale.category === 'Electronics'),
//         reduce(
//             (acc, sale) => {
//                 acc.totalSalesAmount += sale.amount;
//                 return acc;
//             },
//             { totalSalesAmount: 0 }
//         ),
//         switchMap(({ totalSalesAmount }) => {
//             return fetchDiscount(totalSalesAmount).pipe(
//                 map((discount) => ({ finalAmount: totalSalesAmount * (1 - discount.discountRate) }))
//             );
//         }),
//         map(({ finalAmount }) => finalAmount)
//     )
//     .subscribe((finalAmount) => {
//         // My result was 2327.5 but chat gpt says 2137.50 -> cannot trust chat gpt's math skills
//         console.log(`Final Amount After Discount: ${finalAmount}`);
//     });

// Exercise 7
// ----------------------------------------------------------------
