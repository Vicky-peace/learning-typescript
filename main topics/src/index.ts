let sales : number = 123456789;
let course: string = 'Typescript';
let is_published : boolean = true;

//the any type
let level;

function render(document: any){
    console.log(document);
}

//arrays in ts
let numbers: number[] =  [1,2,3,4]
numbers.forEach(n => n.toExponential)


//tuples-fixed length arrays where each element has its type
let user: [number, string] = [1, "Victor"]
user[0].toLocaleString

//Enums-A listof related constants
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
enum Size {Small = 1,Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize);
