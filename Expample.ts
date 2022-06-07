type Animals = "Cat" | "Dog" | "Bird"
interface Animal_Constructor {
    Type: Animals,
    Name: string,
    Years: number
}
interface Animal_Extended extends Animal_Constructor {
    Wild?: boolean
}
enum Family { //code legible
    First = 1,
    Second,
    Tree,
}

const Animal = (Type, Name, Years): Animal_Extended => {
    const Promise_1 = Promise.resolve<boolean>(true)
    const Promise_2 = Promise.resolve<boolean>(true)

    return Promise.all([Promise_1, Promise_2]).then(() => "puta")
}

console.log(Animal('Cat', 'Jasinto', 5))

class Person {
    _age
    _height
    _name
    constructor(Age:number, Height:number ,Name:string) {
        this._age = Age
        this._height = Height
        this._name = Name
    }
    
    public get value() : string {
        return this._name
    }
    
}

const Andres = new Person(23, 175 , 'Andres')
console.log(Andres.value,'color: #8E44AD')