// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...

// 1. Display all student names in uppercase
const uppercasedNames = students.map(student => student.name.toUpperCase());
console.log("Uppercased Names:", uppercasedNames);

// 2. Filter and display students with grade ≥ 85 (use default grade 0 if missing)
const topStudents = students.filter(({ grade = 0 }) => grade >= 85);
console.log("Top Students (grade ≥ 85):", topStudents);

// 3. Calculate the average grade using reduce()
const totalGrades = students.reduce((sum, { grade = 0 }) => sum + grade, 0);
const averageGrade = totalGrades / students.length;
console.log("Average Grade:", averageGrade.toFixed(2));

// 4. Function using destructuring + default parameter
function displayStudent({ name, grade = 0 }) {
  return `Name: ${name}, Grade: ${grade}`;
}

// 5. Display all students using displayStudent()
const formattedStudents = students.map(displayStudent);
console.log("Formatted Student Info:");
formattedStudents.forEach(info => console.log(info));