console.log('Hi');
class Person{
    constructor(){
        console.log('Constuctor is called');
        this.name='name';
    }
    show(){
        console.log('show is called')
        console.log(`My name is ${this.name}`);
    }
}
const p1 = new Person();
p1.show();

const p2 = new Person();
p2.show();

console.log(p1);

const s1 = p1.show;
const myObj = {name: 'Ash'};

s1.call(myObj);

let name = 'Unique'
const s3 =p1.show;
s3.call(myObj);

