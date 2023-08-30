const enum RollNumbers {
    John = 1,
    Kelly,
    Sandra,
    Joseph,
    Samantha,
}

let studentList : RollNumbers = RollNumbers.Sandra
console.log(studentList)


// const enum StudentName {
//     Name = "John",
//     Major = "Art",
// }

// let StudentDetail : StudentName = StudentName.Name
// let StudentMajor : StudentName = StudentName.Major

//Heterogeneous Enums
const enum StudentName {
    ID = 1,
    Name = "John",
    Major = "Art",
}

let StudentID : StudentName = StudentName.ID
let StudentDetail : StudentName = StudentName.Name
let StudentMajor : StudentName = StudentName.Major

console.log(`${StudentID}- ${StudentDetail} - ${StudentMajor}`);
