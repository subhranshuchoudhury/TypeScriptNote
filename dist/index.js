"use strict";
let age = 20;
let amount = 123345575;
let isDone = true;
isDone = false;
const react = "hii";
let numbers = [1, 2];
let any_number = [];
let userSchema = [1, "Subhranshu Choudhury"];
userSchema.push(2);
let myVar = 2;
function Colgate(params, params_2 = 1000) {
    if (params > 0)
        return params_2;
    return 0;
}
let employee = {
    id: 1, name: "SSC", joining: (date) => {
        console.log(date);
    }
};
let dev1 = {
    id: 1,
    name: "Subhranshu Choudhury",
    retire(date) {
        console.log(date);
    },
};
function kgToGram(kg) {
    if (typeof kg === 'number')
        return kg * 1000;
    else
        return parseInt(kg) * 1000;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer_1 = getCustomer(1);
console.log(customer_1 === null || customer_1 === void 0 ? void 0 : customer_1.birthday);
//# sourceMappingURL=index.js.map