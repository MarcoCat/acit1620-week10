let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};

let students = [student1, student2, student3];

let counter = 0
for (let student of students){
    if (student.GPA > 3 && student.program === 'CIT'){
        counter++
        for(attribute in student){
            console.log(`${student[attribute]}`)
        }
    }
}

console.log(`counter: ${counter}`)