class house{
    name='dkt'
    color='red'
    #price=100000 // <-- this is private property

    constructor(name,color,price){
        this.name=name
        this.color=color;
        this.#price=price;
    }
    walking(){
        console.log("hello world",this.#price);
    }
    get price(){
        return this.#price;
    }
    set price(value){
        if(value<100000){
            console.log("price is too low");
        }else{
            this.#price=value;
        }
    }
}

let newPerson=new house('dharmender','blue',100000);
newPerson.walking();
console.log(newPerson.name);
console.log(newPerson.price);