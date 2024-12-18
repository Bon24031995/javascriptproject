class Arjit{
    constructor(price,area){
        this.price=price;
        this.area=area;
    }
    SetMethod(){
        return `${this.price},${this.area}`;
    }
    GetMethod(price){
     this.price=price;
    }
}
var insta = new Arjit(2500,'Banner');
insta.SetMethod();
insta.GetMethod(4500);
console.log(insta);