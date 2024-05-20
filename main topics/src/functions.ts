// function calculateTax(income:number): number{
//     return 0;
// }

function calculateSalary(income:number): void{
    return 
}


function calculateTax(income: number, taxYear: number): number{
    if(taxYear < 2023)
        return income * 1.2;
        return income * 1.3;
    
}

calculateTax(10_000, 2022);

//Optional and default parameters
function greet(name: string, age?:number): string{
    if(age){
        return `Hello, ${name}. You are ${age} years old.`
    }else{
        return `Hello, ${name}`;
    }
}

//default parameteers
function greet(name: string, age:number = 30): string{
    return `Hello , ${name}. Your are ${age} years old`;
}

//Rest Parameters
function sum(...numbers: number[]):number{
    return numbers.reduce((acc,curr) => acc + curr, 0);
}