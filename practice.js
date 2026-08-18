/*
let student ={
    name: "Mahmud",
    age: 20,
    track: "Backend",
    skills: ["JavaScript", "Git", "Github"]
}

console.log(student);
student.age = 21;
student.course = "Javascript"
delete student.track
student.skills.push("Node.js")
if(student.skills.includes("JavaScript")){
    console.log("Mahmud knows JavaScript");
    
}
const skillsKnown = student.skills.map((skill) => "skill: " + skill)
console.log(skillsKnown);

// String practice

let message = "Welcome to Tech Crush";

console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.length);
console.log(message.slice(11, 15));
console.log(message.includes("Tech"));

// number
let price = 1500.756;

console.log(price.toFixed());
let priceString = price.toString();

console.log(priceString);
console.log(typeof priceString);

let number = 25.8;
let rounded = Math.floor(number)
console.log(rounded);

// project
let {name, age} = student
console.log(name.toUpperCase());
let newAge = age + 5;

let updatedStudent = {
    ...student,
    age: newAge
}
console.log(updatedStudent);

// fuction
const greetStudent = (name) => {
    return `welcome ${name}`
}
let output = greetStudent("Mahmud")
console.log(output);

const showStudent = (student) => {
    return `Welcome to ${student.track} web development class ${student.name}`
}
student.track = "Backend";
console.log(showStudent(student));

// try and catch
try {
    student.email.toUpperCase()
} catch (error) {
    console.log("Unable to get student email." + error.message);
    
}
*/
// student reporet

let studentReport = {
    name: "Mahmud",
    age: 20,
    track: "Backend",
    skills: ["JavaScript", "Git", "GitHub"],
    scores: [45, 78, 32, 90, 67]
};

let {name, age, scores} = studentReport

const highScore =scores.filter((high) => high >= 50 )

const preWord = studentReport.skills.map((pre) => "Skill: " + pre )

let updatedStudentReport = {
    ...studentReport,
    status: "Active"
}

 const getStudentRepor = (studentReport) => {
    return `${name} has ${highScore.length} high scores`
 }

 console.log(getStudentRepor(studentReport));

//  diff
let username = "  Mahmud Toheeb  ";
let score = 85.5;

let trimName = username.trim()
let upperName = trimName.toUpperCase();
let newScore = score.toString()
console.log(typeof newScore);

let finalScore = score + 10
console.log(upperName);

console.log(finalScore);





 
 