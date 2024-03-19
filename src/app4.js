function Person(name){
    this.name=name;
    this.show = function(){
        console.log(this.name);
    }
}

const p1= new Person('Anant');
p1.show();
console.log(p1.name);

function doThis(){
    console.log('Do This');
}

doThis();

(function(name){
    console.log(`Name is ${name}`);
})('Ashwin');

((name)=>{
    console.log(`Name is ${name}`);
})('Ashwin');

const person = (()=>{
    let myName='';
    return{
        getName:() => {return myName;},
        setName:(name)=>{
            myName=name;
        },
    };
})();

console.log(person);
person.setName('Ashwin');
console.log(person.getName());

const myFunc = ()=>{
    let myName='';
    return {
        getName:()=>{return myName},
        setName:(name)=>{
            myName=name;
        },
    };
};

const person2 = myFunc();
console.log(person2);
person2.setName('Siddharth');
console.log(person2.getName());