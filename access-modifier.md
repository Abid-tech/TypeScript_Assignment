Title : Explation of how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

One important feature of OOP is access modifiers, which control how class properties and methods can be accessed or modified. TypeScript provides four commonly used modifiers: public, private, protected, and readonly.

Examples:

1. Public

The public modifier allows a property or method to be accessed from anywhere, including outside the class. It is the default access modifier in TypeScript.


``` TypeScript
class Student {
    public name: string = "Abid";
}

const student = new Student();
console.log(student.name);
```

2. Private

The private modifier restricts access to a property or method within the class where it is declared. It cannot be accessed directly from outside the class or its subclasses.

``` TypeScript
class BankAccount {
    private balance: number = 5000;

    showBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount();
console.log(account.showBalance());
console.log(account.balance) // can't do this.
```

3. Protected

The protected modifier allows access within the declaring class and its subclasses, but not from outside those classes.

``` TypeScript
class Employee {
    protected salary: number = 30000;
}

class Manager extends Employee {
    showSalary(): number {
        return this.salary;
    }
}

```

Here, Manager can access the protected salary property because it inherits from Employee.


4. Readonly

The readonly modifier allows a property to be assigned a value during declaration or inside the constructor. After initialization, its value cannot be changed, we can only read its value.

``` TypeScript
class Product {
    readonly productId: number;

    constructor(id: number) {
        this.productId = id;
    }
}
```

The productId cannot be reassigned after the object is created.

In conclusion , access modifiers help control data access, protect important properties, and improve code organization. Using public, private, protected, and readonly appropriately makes TypeScript applications more secure, maintainable, and easier to manage.
