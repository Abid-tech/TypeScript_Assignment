Title: What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.

Type narrowing is a process of reducing a variable's possible types by checking its actual value or properties. It allows TypeScript to understand which type is being used at a particular point in the code.

Three commonly used techniques of type narrowing are typeof, instanceof, and the in operator.
Examples:

1. using typeof


type valueType = string | number | boolean
type returnType = string | number

function processInput(value:valueType):returnType{

    if(typeof(value)=== 'string'){
        let newValue = (value.trim()).toLowerCase()
        return newValue
    }
    else if(typeof(value)=== 'number'){
        return value*10
    }
    else{
        if(value===true){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }

}


2. Using instanceof

The instanceof operator checks whether an object belongs to a particular class.

class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

3. Using the in Operator

The in operator checks whether a particular property exists in an object.

type Admin = { name: string; permissions: string[] };
type User = { name: string; email: string };

function showInfo(person: Admin | User): void {
    if ("permissions" in person) {
        console.log(person.permissions);
    } else {
        console.log(person.email);
    }
}


In conclusion, by using typeof, instanceof, and the in operator, developers can handle different types confidently while reducing unexpected errors.
