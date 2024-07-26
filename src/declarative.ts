import { from } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

const temperatures$ = from([32, 45, 50, 55, 60, 65, 70]);

temperatures$
    .pipe(
        filter((temperature: number) => temperature >= 50),
        reduce(
            (acc, temperature) => {
                acc.sum += temperature;
                acc.count += 1;
                return acc;
            },
            { sum: 0, count: 0 }
        )
    )
    .subscribe(({ sum, count }) => {
        const average = sum > 0 ? sum / count : 0;
        // console.log(`Sum of even numbers: ${average}`);
    });

const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numbers$
    .pipe(
        filter((number) => number % 2 === 0),
        reduce(
            (acc, current) => {
                if (current % 2 === 0) {
                    acc.sum += current;
                    acc.count += 1;
                }
                return acc;
            },
            { sum: 0, count: 0 }
        )
    )
    .subscribe(({ sum, count }) => {
        // console.log(sum);
        // console.log(count);
        const average = sum / count;
        // console.log(`Average of even number: ${average}`);
    });

const students$ = from([
    { name: 'John', score: 85 },
    { name: 'Jane', score: 92 },
    { name: 'Joe', score: 77 },
    { name: 'Jack', score: 88 },
    { name: 'Jill', score: 95 }
]);

students$
    .pipe(
        filter((student) => student.score > 80),
        reduce(
            (acc, student) => {
                acc.totalScore += student.score;
                acc.count += 1;
                return acc;
            },
            { totalScore: 0, count: 0 }
        )
    )
    .subscribe(({ totalScore, count }) => {
        // console.log(totalScore);
        // console.log(count);
        const averageScore = count > 0 ? totalScore / count : 0;
        // console.log(`Average score of students scoring abover 80: ${averageScore}`);
    });

// const purchases$ = from([
//     { item: 'Laptop', quantity: 1, price: 1200 },
//     { item: 'Mouse', quantity: 2, price: 25 },
//     { item: 'Keyboard', quantity: 1, price: 75 },
//     { item: 'Monitor', quantity: 2, price: 300 },
//     { item: 'Mouse Pad', quantity: 1, price: 10 }
// ]);

// purchases$
//     .pipe(
//         reduce(
//             (acc, purchase) => {
//                 acc.totalQuantity += purchase.quantity;
//                 acc.totalCost += purchase.quantity * purchase.price;
//                 return acc;
//             },
//             { totalQuantity: 0, totalCost: 0 }
//         )
//     )
//     .subscribe(({ totalQuantity, totalCost }) => {
//         console.log(`Total quantity: ${totalQuantity}`);
//         console.log(`Total cost: $${totalCost}`);
//     });

// const items$ = from([
//     { item: 'Laptop', quantity: 1, price: 1200 },
//     { item: 'Mouse', quantity: 2, price: 25 },
//     { item: 'Keyboard', quantity: 1, price: 75 },
//     { item: 'Monitor', quantity: 2, price: 300 },
//     { item: 'Mouse Pad', quantity: 1, price: 10 }
// ]);

// items$
//     .pipe(
//         reduce(
//             (acc, item) => {
//                 if (!acc.maxPrice) {
//                     acc.maxPrice = 0;
//                 }
//                 acc.minQuantity = item.quantity;
//                 acc.maxPrice = item.price > acc.maxPrice ? item.price : acc.maxPrice;
//                 acc.minQuantity = item.quantity < acc.minQuantity ? item.quantity : acc.minQuantity;
//                 return acc;
//             },
//             { maxPrice: 0, minQuantity: Infinity }
//         )
//     )
//     .subscribe(({ maxPrice, minQuantity }) => {
//         console.log(maxPrice);
//         console.log(minQuantity);
//     });

interface Employee {
    name: string;
    department: string;
    salary: number;
}
interface DepartmentSalaries {
    [department: string]: number;
}
const employees$ = from<Employee[]>([
    { name: 'Alice', department: 'Engineering', salary: 70000 },
    { name: 'Bob', department: 'HR', salary: 50000 },
    { name: 'Charlie', department: 'Engineering', salary: 75000 },
    { name: 'David', department: 'Sales', salary: 60000 },
    { name: 'Eve', department: 'HR', salary: 55000 }
]);

employees$
    .pipe(
        reduce<Employee, DepartmentSalaries>((acc, employee) => {
            if (!acc[employee.department]) {
                acc[employee.department] = 0;
            }
            acc[employee.department] += employee.salary;
            return acc;
        }, {} as DepartmentSalaries)
    )
    .subscribe((result) => {
        // console.log('Result: ', result);
    });

const products$ = from<Product[]>([
    { category: 'Electronics', name: 'Laptop', price: 1200 },
    { category: 'Electronics', name: 'Smartphone', price: 800 },
    { category: 'Furniture', name: 'Desk', price: 150 },
    { category: 'Furniture', name: 'Chair', price: 75 },
    { category: 'Electronics', name: 'Headphones', price: 150 }
]);
interface Product {
    category: string;
    name: string;
    price: number;
}
interface CategoryPriceRecord {
    [category: string]: number;
}
products$
    .pipe(
        reduce<Product, CategoryPriceRecord>((acc, product) => {
            if (!acc[product.category]) {
                acc[product.category] = 0;
            }
            acc[product.category] += product.price;
            return acc;
        }, {} as CategoryPriceRecord)
    )
    .subscribe((result) => {
        // console.log('Result: ', result);
    });

// interface Order {
//     item: string;
//     quantity: number;
//     price: number;
// }
// interface RevenueItems {
//     totalRevenue: number;
//     totalItems: number;
// }
// const orders$ = from<Order[]>([
//     { item: 'Laptop', quantity: 1, price: 1200 },
//     { item: 'Mouse', quantity: 2, price: 25 },
//     { item: 'Keyboard', quantity: 1, price: 75 },
//     { item: 'Monitor', quantity: 2, price: 300 },
//     { item: 'Mouse Pad', quantity: 1, price: 10 }
// ]);

// orders$
//     .pipe(
//         reduce<Order, RevenueItems>(
//             (acc, order) => {
//                 acc.totalRevenue += order.price * order.quantity;
//                 acc.totalItems += order.quantity;
//                 return acc;
//             },
//             { totalRevenue: 0, totalItems: 0 }
//         )
//     )
//     .subscribe(({ totalRevenue, totalItems }) => {
//         console.log(`Total revenue: $${totalRevenue}`);
//         console.log(`Total items sold: ${totalItems}`);
//     });

interface Order {
    status: string;
    price: number;
}
interface OrderRecord {
    [status: string]: number;
}

const orders$ = from<Order[]>([
    { status: 'shipped', price: 50 },
    { status: 'pending', price: 30 },
    { status: 'shipped', price: 20 },
    { status: 'delivered', price: 100 },
    { status: 'pending', price: 70 },
    { status: 'delivered', price: 50 },
    { status: 'shipped', price: 80 }
]);

orders$
    .pipe(
        reduce<Order, OrderRecord>((acc, order) => {
            if (!acc[order.status]) acc[order.status] = 0;
            acc[order.status] += order.price;
            return acc;
        }, {})
    )
    .subscribe((result) => {
        // console.log(result);
    });
interface Transaction {
    type: string;
    amount: number;
}
interface TransactionAmountRecord {
    [transaction: string]: number;
}

const transactions$ = from<Transaction[]>([
    { type: 'credit', amount: 500 },
    { type: 'debit', amount: 200 },
    { type: 'credit', amount: 300 },
    { type: 'debit', amount: 150 },
    { type: 'credit', amount: 700 },
    { type: 'debit', amount: 100 }
]);

transactions$
    .pipe(
        reduce<Transaction, TransactionAmountRecord>((acc, transaction) => {
            if (!acc[transaction.type]) acc[transaction.type] = 0;
            acc[transaction.type] += transaction.amount;
            return acc;
        }, {})
    )
    .subscribe((result) => {
        // console.log(result);
    });

interface Sale {
    product: string;
    quantity: number;
    pricePerUnit: number;
}
interface SaleRecord {
    [product: string]: { totalRevenue: number; totalQuantity: number };
}
const sales$ = from<Sale[]>([
    { product: 'Laptop', quantity: 2, pricePerUnit: 1200 },
    { product: 'Mouse', quantity: 5, pricePerUnit: 25 },
    { product: 'Keyboard', quantity: 3, pricePerUnit: 75 },
    { product: 'Monitor', quantity: 1, pricePerUnit: 300 },
    { product: 'Mouse', quantity: 3, pricePerUnit: 25 }
]);

sales$
    .pipe(
        reduce<Sale, SaleRecord>((acc, sale) => {
            if (!acc[sale.product]) acc[sale.product] = { totalRevenue: 0, totalQuantity: 0 };
            acc[sale.product].totalRevenue += sale.pricePerUnit * sale.quantity;
            acc[sale.product].totalQuantity += sale.quantity;
            return acc;
        }, {})
    )
    .subscribe((result) => {
        // console.log(result);
    });

interface Item {
    category: string;
    name: string;
    price: number;
}

interface CategorySummary {
    [category: string]: { totalPrice: number; count: number };
}

const items$ = from<Item[]>([
    { category: 'Electronics', name: 'Laptop', price: 1200 },
    { category: 'Electronics', name: 'Smartphone', price: 800 },
    { category: 'Furniture', name: 'Desk', price: 150 },
    { category: 'Furniture', name: 'Chair', price: 75 },
    { category: 'Electronics', name: 'Headphones', price: 150 }
]);

items$
    .pipe(
        reduce<Item, CategorySummary>((acc, item) => {
            if (!acc[item.category]) acc[item.category] = { totalPrice: 0, count: 0 };
            acc[item.category].totalPrice += item.price;
            acc[item.category].count += 1;
            return acc;
        }, {})
    )
    .subscribe((result) => {
        // console.log(result);
    });

interface Purchase {
    store: string;
    amount: number;
    date: string; // ISO date string
}

interface StoreSummary {
    [store: string]: { totalRevenue: number; purchaseCount: number };
}

const purchases$ = from<Purchase[]>([
    { store: 'Store A', amount: 200, date: '2024-01-01' },
    { store: 'Store B', amount: 150, date: '2024-01-02' },
    { store: 'Store A', amount: 300, date: '2024-01-03' },
    { store: 'Store B', amount: 100, date: '2024-01-04' },
    { store: 'Store A', amount: 400, date: '2024-01-05' }
]);

purchases$
    .pipe(
        reduce<Purchase, StoreSummary>((acc, purchase) => {
            if (!acc[purchase.store]) {
                acc[purchase.store] = { totalRevenue: 0, purchaseCount: 0 };
            }
            acc[purchase.store].totalRevenue += purchase.amount;
            acc[purchase.store].purchaseCount += 1;
            return acc;
        }, {} as StoreSummary)
    )
    .subscribe((result) => {
        // console.log(result);
    });
interface Activity {
    userId: string;
    activityType: string;
    duration: number;
}

interface UserActivitySummary {
    [userId: string]: {
        [activityType: string]: {
            totalDuration: number;
            activityCount: number;
        };
    };
}
const activities$ = from<Activity[]>([
    { userId: 'user1', activityType: 'exercise', duration: 30 },
    { userId: 'user2', activityType: 'reading', duration: 45 },
    { userId: 'user1', activityType: 'exercise', duration: 60 },
    { userId: 'user1', activityType: 'reading', duration: 40 },
    { userId: 'user2', activityType: 'exercise', duration: 20 },
    { userId: 'user2', activityType: 'reading', duration: 50 }
]);

activities$
    .pipe(
        reduce<Activity, UserActivitySummary>((acc, activity) => {
            if (!acc[activity.userId]) {
                acc[activity.userId] = {};
            }
            if (!acc[activity.userId][activity.activityType]) {
                acc[activity.userId][activity.activityType] = {
                    totalDuration: 0,
                    activityCount: 0
                };
            }
            acc[activity.userId][activity.activityType].totalDuration += activity.duration;
            acc[activity.userId][activity.activityType].activityCount += 1;

            return acc;
        }, {} as UserActivitySummary)
    )
    .subscribe((result) => {
        // console.log(result);
    });

interface ComputerSale {
    product: string;
    region: string;
    amount: number;
}

interface ComputerSaleSummary {
    [product: string]: {
        totalSales: number;
        averageSales: number;
        count: number;
    };
}

const computerSales$ = from<ComputerSale[]>([
    { product: 'Laptop', region: 'North', amount: 1200 },
    { product: 'Laptop', region: 'South', amount: 1300 },
    { product: 'Mouse', region: 'North', amount: 25 },
    { product: 'Mouse', region: 'South', amount: 30 },
    { product: 'Keyboard', region: 'East', amount: 75 },
    { product: 'Monitor', region: 'West', amount: 300 },
    { product: 'Keyboard', region: 'North', amount: 80 },
    { product: 'Monitor', region: 'South', amount: 350 }
]);

computerSales$
    .pipe(
        reduce<ComputerSale, ComputerSaleSummary>((acc, sale) => {
            if (!acc[sale.product])
                acc[sale.product] = { totalSales: 0, averageSales: 0, count: 0 };
            acc[sale.product].totalSales += sale.amount;
            acc[sale.product].count += 1;
            acc[sale.product].averageSales = acc[sale.product].totalSales / acc[sale.product].count;
            return acc;
        }, {} as ComputerSaleSummary)
    )
    .subscribe((result) => {
        // console.log(result);
    });

// BEST SOLUTION
// computerSales$
//     .pipe(
//         reduce<ComputerSale, { [product: string]: { totalSales: number; count: number } }>(
//             (acc, sale) => {
//                 if (!acc[sale.product]) {
//                     acc[sale.product] = { totalSales: 0, count: 0 };
//                 }
//                 acc[sale.product].totalSales += sale.amount;
//                 acc[sale.product].count += 1;
//                 return acc;
//             },
//             {}
//         ),
//         map((summary) => {
//             const result: ComputerSaleSummary = {};
//             for (const product in summary) {
//                 result[product] = {
//                     totalSales: summary[product].totalSales,
//                     averageSales: summary[product].totalSales / summary[product].count
//                 };
//             }
//             return result;
//         })
//     )
//     .subscribe((result) => console.log(result));
