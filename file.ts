interface vehicle {
    make:string
    model:string
    year:number
    start():void;
}

class Car implements vehicle {
    make:string
    model:string
    year:number
    constructor(make:string,model:string,year:number) {
        this.make=make
        this.model=model
        this.year=year
        
    }

    start():void{
        console.log(`${this.make} engine started`)
    }
}

const Porsche:Car= new Car("911","Carrera" ,1964)
Porsche.start()
