// creating variables

let age: number = 20;
let amount: number = 123_345_575;

// avoid these

let isDone = true;
isDone = false;
const react = "hii";

// function render(document:number) {
//     console.log(document);
// }

let numbers: number[] = [1, 2];
let any_number = []; // hover to see that the datatype set to any. Avoid it.

// numbers.forEach(n => {
//     console.log(n);
    
// });

let userSchema: [number, string] = [1, "Subhranshu Choudhury"];

userSchema.push(2); // bug in TS. it do not show any error.

// enum

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size{ // pascal case, Convention, default value is as index.
    Small = 1, Medium = 2, Large = 3
}

// const added for optimized code.

let myVar: Size = Size.Medium;
// console.log(myVar);

// function

function Colgate(params: number,params_2 = 1000): number {
    // let x = 10;
    if (params > 0)
        return params_2; // params_2 has default value is 1000.
    return 0;

}

// object

let employee: {
    id: number,
    // name?:string // // optional
    // readonly index:number,
    name: string,
    joining: (date:Date)=>void
} = {
    id: 1, name: "SSC", joining: (date: Date) => {
    console.log(date);
    
    }
};

// type

type Developer = {
    readonly id: number,
    name: String,
    retire: (date: Date) => void
}

let dev1: Developer = {
    id: 1,
    name: "Subhranshu Choudhury",
    retire(date) {
        console.log(date);
        
    },
}

// unions

function kgToGram(kg:number|string):number {
    if (typeof kg === 'number')
        return kg * 1000;
    else
        return parseInt(kg)*1000;
}

// console.log(kgToGram("2kg"));

// intersection type

type Draggable = {
    drag:()=>void
}
type Resizable = {
    resize:()=>void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: ()=>{ },
}

// Literal

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Null

function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
        
    
}

// greet(null);
// greet(undefined)

// Optional chaining

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday:new Date()}
}

let customer_1 = getCustomer(1);
// if(customer_1 !== null && customer_1 !== undefined)
// console.log(customer_1.birthday);
// optional property access operator
console.log(customer_1?.birthday);

let log: any = null;
// log('a'); // will crash the program
log?.('a');







