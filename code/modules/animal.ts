
export namespace A{
    interface Animal {
        name:string;
        eat(str:string):void
    }


    export class Dog implements Animal {
        name:string

        constructor(name:string){
            this.name = name
        }

        eat(){
            console.log('A狗再吃');
            
        }
    }
}


export namespace B{
    interface Animal {
        name:string;
        eat(str:string):void
    }


    export class Dog implements Animal {
    name:string

    constructor(name:string){
        this.name = name
    }

    eat(){
        console.log('B狗在吃');
        
    }
}
}