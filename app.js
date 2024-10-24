

let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// console.log(shoppingList[0])

shoppingList.push('carrot');
console.log(shoppingList)

shoppingList.pop();
console.log(shoppingList);

// Array.splice(index val, delete count)
 shoppingList[4].splice(1, 2, 'Cucumbers', 'Bell pepper');
 console.log(shoppingList);


//  Task 2

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};


console.log(student.name);

student.phone = 1234567890;
console.log(student);

delete student.grade;
console.log(student);

student.age = 21;
console.log(student);


// Conditional Assignment 1

let a = 1;

if(a >= 0){
    console.log('Positive');
}
else{
    console.log('Negative');
}

// Conditional Assignment 2

let students = [{name: 'Basit', score:91},
                {name: 'Pac', score:87},
                {name: 'Bash', score:66},
                {name: 'Bianca', score:74},
                {name: 'Tawres', score:52}
];

console.log(students);
// "A" if the score is between 90 and 100,
// "B" if it's between 80 and 89, 
// "C" if it's between 70 and 79, 
// "D" if it's between 60 and 69, and 
// "F" if it's below 60.


// Creating function to evaluate score to determine Grade
function Grade(score){
if(score >= 90 && score <= 100){
    // console.log('You scored an "A" grade');
    return "A";
}
else if(score >= 80 && score <= 89){
    return "B";
}
else if(score >= 70 && score <= 79){
    return "C";
}
else if(score >= 60 && score <= 69){
    return "D";
}
else if(score < 60){
    return "F";
}
}

students.forEach(students => {
    let grade = Grade(students.score);
    console.log(`${students.name} has scored ${students.score} and has secured ${grade}`)
})



// Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.

function checkString(str){
    if(str){
        return "Truthy"
    }

    else{
        return "Falsy"
    }
}

// usecase
console.log(checkString('Basit Ahmad'))
console.log(checkString(''))



//positive negative practice in mind

function checkPositive(num){
    if(num % 2 == 0){
        return "Positive"
    }
    else{
        return "Negative"
    }
}
console.log(checkPositive(100000000000000006));
console.log(checkPositive(13));