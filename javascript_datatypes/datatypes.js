// Data Types in Javascript
// 1 - Strint => ""
// 2 - Number
// 3 - Bigint
// 4 - Boolean => True, False
// 5 - Null 
// 6 - Undifinted
// 7 - Symbol

// memory types in javascript
// 1 -Stack - All privmitive datatypes are resirive Stack memory. Stack memory is provide a copy of data for change but real data is never change;
    
//    2- Heap Memory - All non primitive datatypes (object) are resirive heap memory. Heap memory is provide a refrence (Hard copy) for change 


let name = "pranshu chauhan";

let newname = name;
newname = "Shivam Chauhan"

console.log(name)
console.log(newname)

let mydetails = {
    name:"Pranshu chauhan",
    age: 23,
    school: "narayan Vidya Ashram"

}
console.log(mydetails.name)
let newDetails = mydetails;
newDetails.name = "Surya Pratap singh"
console.log(mydetails.name)
console.log(newDetails.name)


