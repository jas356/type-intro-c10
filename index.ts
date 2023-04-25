let age: number = 23;
let firstName: string = "Jasmine"
let isTall: boolean = false
let childrensNames: string[] = ["Jazzy", "Jas"] 

console.log(`${firstName} is ${age} years old`)

if (isTall) {
    console.log("and so tall")
} else {
    console.log("and so pretty")
}

for (let i: number = 0; i < childrensNames.length; i++) {
    console.log(childrensNames[i])
}

enum taxForm {
    standardTaxForm = "1040",
    ChildTaxForm = "641",
    cryptTaxForm = "420S"
}

// imagine the taxform having 10,000 taxforms in a database (Real world analogy)
//console.log("the crypto one is:",taxForm.cryptTaxForm)
//console.log("the crypto one is:",taxForm.cryptTaxForm)
//console.log("the crypto one is:",taxForm.cryptTaxForm)
//console.log("the crypto one is:",taxForm.cryptTaxForm)

let zipCode: string | number = 12345 //good
zipCode = "ABC"  //good
//zipCode = null // not allowed in typeScript
//console.log(zipCode)

function sum(x: number , y: number) {
  return x+y
}

console.log(sum(4,5))

let total: number = sum(5,6)

//console.log(total)

function debug(message: string) : void {
    console.log(message)
}

debug("hello world")

let jasmine: any = {
    firstName: "Jasmine",
    age: 23,
    children: ["lily", "david"],
    hasCertificate: false,
}

let keshia: any = {
    firstName: "Jas",
    age: 22,
    children: ["lily", "david"],

}

interface person {
    firstName: string,
    age: number, 
    children: string[],
    hasCertificate?: boolean,
}

console.log(jasmine, keshia)
