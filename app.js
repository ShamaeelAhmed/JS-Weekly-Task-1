let myArr = [

];

console.log(myArr);

let myDetails = {
    name: "Muhammad Mesum",
    age: 16,
    school:"TLA",
    education: 9,
    profession: "Front End Web Developer",
    address: "Jutal, Gilgit"
    
    
}

let companyDetails= {
    company: "North Aims Tech",
    locatedAt: "STP, Konodas",
    ceo: "Muhammad Irfan",
    companyMembers: 20


}

// Add Object Data To Array 

myArr.unshift(myDetails);

console.log(myArr);

myArr.push(companyDetails);
console.log(myArr);


// My Bio 

let myBio = ` I am ${myArr[0].name}, ${myArr[0].age} years old. I am a student of Class ${myArr[0].education}. My school name is ${myArr[0].school + " " + "(The Learning Academy)"}  I am from ${myArr[0].address}. I am working as a ${myArr[0].profession} at ${myArr[1].company}. Our company CEO is ${myArr[1].ceo}. Our company is Located at ${myArr[1].locatedAt}. Our comapny have Total ${myArr[1].companyMembers} Members.`;

console.log(myBio);


// Return To myArr 


myArr.pop();
console.log(myArr);

myArr.shift();
console.log(myArr);