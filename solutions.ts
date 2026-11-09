function multiplyValue(value:number, multiplier?:number):number{

    if(multiplier!=undefined){
        let multiplication = value*multiplier
        return multiplication
    }

    return value*2

}




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





function formatCoordinate(coordinate: readonly[latitude:number,longitude:number,locationName:string]):string{

    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
}





function concatenateArrays<T>(...arrays:T[][]):T[]{

    let result:T[] = []
    for (let array of arrays){
        for(let values of array){
            result.push(values)
        }
    }

    return result

}



interface Course {
    title :string
    students :number
    isPublished :boolean
}

function getPopularCourses (courses: Course[], minStudents :number):Course[]{
    let result : Course[] = []
    for (let x of courses){
        if (x.isPublished === true && x.students>=minStudents ){
            result.push(x)
        }
    }
    return result
}




function pluckValues<T,K extends keyof T>(items: T[], key:K):T[K][]{
    let result: T[K][] = [];
    for (let x of items ){
        result.push(x[key])
    }
    return result
}




class Employee{
    constructor(
        protected name:string,
        private baseSalary:number
    ){}

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department:string

    constructor(name:string, baseSalary:number,department: string){
        super(name, baseSalary)
        this.department = department
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}





const validateAgeAsync = async(age:number):Promise<string> =>{

    if (age >= 18){
       return await new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)
        })

    }
    else{
        throw new Error("Access Denied: Must be 18 or older")
    }


}

