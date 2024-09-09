//Task 1: Create a Function to Calculate Average Sales
//Function Declaration - Calculate average sales
let sales = [50,200,30];
function calculateAverageSales (sales, quantity){
    sum += sales;
return sum / sales.length };
console.log(`Average Sales:$${calculateAverageSales}`);

//Task 2: Create a Function to Determine Performance Rating
function determinePerformanceRating (sales, calculateAverageSales){
    return calculateAverageSales;
}
if (calculateAverageSales > 10000){
console.log(`Excellent`);}
else if (calculateAverageSales 7000 <= x <= 10000){
    console.log(`Good`);}
    else if (calculateAverageSales 4000 <= x <= 7000){
        console.log(`Satisfactory`);}
        else (calculateAverageSales < 4000 ){
            console.log(`Needs Improvement`);}

// Task 3: Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers;
let topPerformer = salespeople [0];
let bottomPerformer = salespeople[0];

for (let i = 1; i < salespeople.length; i++) 
    { const current = salespeople[i]};
    if (current.totalSales > topPerformer.totalSales) 
        {topPerformer = current};
    if (current.totalSales < bottomPerformer.totalSales) 
        {bottomPerformer = current};

    const salespeople = [
        {Name: Katie, totalSales:1000 },
        {Name: Jonah, totalSales:3000 },
        {Name: Ray, totalSales:1500 },
        {Name: Sam, totalSales:2400 },
    ];
console.log(`Top Performer:`, topPerformer);
console.log(`Bottom Performer:`, bottomPerformer);

// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salespeople);
    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salespeople);
        const averageSales = calculateAverageSales(sales, quantity); 
        const performanceRating = determinePerformanceRating(averageSales);

        return `Name:` ${salesPeople}
`Average Sales:` $${averageSales}
`Performance Rating:` ${performanceRating}

`Top Performer:` ${topPerformer}
`Bottom Performer:` ${bottomPerformer} 

console.log(generatePerformanceReport(salespeople));

//Task 4: Test your functions with sample data

const salesData = [

  { name: 'Alice', sales: [12000, 15000, 13000] },
    
  { name: 'Bob', sales: [7000, 6000, 7500] },
    
  { name: 'Charlie', sales: [3000, 4000, 3500] },
    
  { name: 'Diana', sales: [9000, 8500, 9200] },
    
    ];