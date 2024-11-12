date = new Date();
console.log(date);
// date get  methods
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate()); // afterget Start with capital letter Date()
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());  //coming to time starts with captial letter and ends with "s"
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

// set methods
console.log(date.setFullYear(2025));
console.log(date.setMonth(6));
console.log(date.setDate(15));
console.log(date.setHours(13));
console.log(date.setMinutes(45));
console.log(date.setSeconds(30));
console.log(date.setMilliseconds(800));

console.log(date.toDateString());// reads humanreadble language
console.log(date.toTimeString());

 let a={
    id:1,name:"shiva",
    age:23,details:function p(){
        console.log(this.age);
        
    }

 }
console.log(a.details)
let b={
    name:"shiva",
    age:23,
    branch:19,
   
    }
    let c=function (x,y){
        console.log(this.age+" "+x+y)
}
c.call(b,"shiva","chaitanya","ravi","ram","munna") // call,apply,bind are barowing function 
c.apply(b,["shiva","chaitanya","ravi","ram","munna"]) 
// call method we pass the value in the single values
// apply method we pass the values in the array[]
//both are used for browing the value they are differnt in passing the argument 

//bind  
// separate we want to store in a variable..

//recent object of a parent variables..
//two console takens as shows undefine 
//in the function value must be in the return value.. :)

let g={
    age:23,
    name:"shiva",
    branch:"19r",
    }// NEW VALUE ASSIGN
    let h= function p(x,y,z){
        console.log(this.age+" "+x,y+z) ;
    
} 
h.call(g,"shiva")
h.apply(g,["shiva","man","sham"])
let i=h.bind(g,["shiva","man","sham"])
i()
