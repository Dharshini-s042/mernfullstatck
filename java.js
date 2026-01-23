let array1=[1,2,3,4,5,6];
let sum=array1.reduce((product,current)=>{
    return product*current;
},1)
console.log(sum);

const tripple=array1.map((n)=>n*3);
console.log(tripple);
let even=tripple.filter((n)=>n%2==0);
console.log(even);
let add=even.reduce((a,b)=>a+b,0);
console.log(add);


let b=[1,2,3,4,5];
const [one,...two] = b;
console.log(two);

let num=[0,...b,6,7];
console.log(num);

const obj1={x:3,y:5};
const obj2={y:6,z:7};
const obj3={...obj1,...obj2};
console.log(obj3);


const mul =(a,b)=>
{
    return a*b;
}
const square=(n)=>
{
    return mul(n,n);    
}
const print=(n)=>
{
    let s=square(n);
    console.log(s);
}
print(4);

console.log('first');
Promise.resolve().then(console.log('From promise')
setTimeout()=>
{
    console.log('Inside Timeout');
},2000)