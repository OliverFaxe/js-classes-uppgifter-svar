class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teachers = [];
    this.subjects = [];
  }
  addTeacher(...teachers) {
    for (let teacher of teachers) {
      this.teachers.push(teacher);
    }
    return "Action completed";
  }
  addSubject(...subjects) {
    for (let subject of subjects) {
      this.subjects.push(subject);
    }
    return "Action completed";
  }
  addStudent(...students) {
    for (let student of students) {
      this.students.push(student);
    }
    return "Action completed";
  }
  fireTeacher(teacher) {
    let x = this.teachers.indexOf(teacher);
    this.teachers.splice(x, 1);

    for (let subject of teacher.subjects) {
      subject.teacher = null;
    }
    teacher.subjects = [];
  }
}

const mediahögskolan = new School("Mediahögskolan");
const naturhögskolan = new School("Naturhögskolan");

class Subject {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teacher = null;
  }
  addStudentToSubject(...students) {
    for (let student of students) {
      this.students.push(student);
      student.subjects.push(this);
    }
    return "Action completed";
  }
  relegateStudent(...students) {
    for (let student of students) {
      console.log(student1);
      let x = this.students.indexOf(student);
      console.log(student1);
      if (x > -1) {
        this.students.splice(x, 1);
        console.log(student1);
      }
      for (let subject of student.subjects) {
        console.log(student1);
        let y = student.subjects.indexOf(this);
        console.log(student1);
        if (y > -1) {
          student.subjects.splice(y, 1);
          console.log(student1);
        }
      }
    }
  }
}

const subject1 = new Subject("Film");
const subject2 = new Subject("Musik");
const subject3 = new Subject("Design");
const subject4 = new Subject("Biologi");
const subject5 = new Subject("Kemi");

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.subjects = [];
  }
  enlistToSubject(...subjects) {
    for (let subject of subjects) {
      this.subjects.push(subject);
      subject.students.push(this);
    }
    return "Action completed";
  }
  quitSubject(...subjects) {
    for (let subject of subjects) {
      let indexPosition = this.subjects.indexOf(subject);
      if (indexPosition !== -1) {
        this.subjects.splice(indexPosition, 1);

        for (let student of subject.students) {
          let studentIndex = student.subjects.indexOf(subject);
          if (studentIndex !== -1) {
            student.subjects.splice(studentIndex, 1);
          }
        }
      }
    }
  }
  flyttaStudent(subject, newSubject) {
    let x = this.subjects.indexOf(subject);
    this.subjects.splice(x, 1, newSubject);
  }
}

const student1 = new Student("Alice", 22);
const student2 = new Student("Bob", 23);
const student3 = new Student("Kim", 21);
const student4 = new Student("Anton", 26);
const student5 = new Student("Sofia", 29);

class Teacher {
  constructor(name) {
    this.name = name;
    this.subjects = [];
  }
  addSubjectToTeacher(...subjects) {
    for (let subject of subjects) {
      this.subjects.push(subject);
      subject.teacher = this;
    }
    return "Action completed";
  }
}

const teacher1 = new Teacher("Lars", 56);
const teacher2 = new Teacher("Anna", 47);
const teacher3 = new Teacher("Mats", 65);

class Grades {
  constructor() {
    this.grades = []; // Holds all the grades
  }
  assignGrade(student, subject, grade) {
    const gradeObject = {
      student: student,
      subject: subject,
      grade: grade
    };

    this.grades.push(gradeObject); // Adds the gradeObject to the grades array
  }

  // Method to display all grades
  displayGrades() {
    return this.grades;
  }
}

// Creating an instance of Grades
const grades = new Grades();




function displayAllStudents(School) {
  let result = "";
  for (let student of School.students) {
    result += `${student.name}, `;
  }
  return result;
}

function displayAllSubjectsOfStudent(Student) {
  let list = "";
  for (let subject of Student.subjects) {
    list += `${subject.name}, `;
  }
  return list;
}

function displayAllStudentsEnlistedToSubject(subject) {
  let list = "";
  for (Student of subject.students) {
    list += `${Student.name}, `;
  }
  return list;
}

// Adderar logik för systemet ska kunnas leka runt

/* Tack vare (...någontings) i parametrar och for...of-loop kan jag 
loopa igenom alla saker jag sätter i parametrarna 
och därmed skriva en kodrad för att lägga till fler 
vilket leder till mer effektiv kodande. */

mediahögskolan.addTeacher(teacher1, teacher2);
naturhögskolan.addTeacher(teacher3);

mediahögskolan.addSubject(subject1, subject2, subject3);
naturhögskolan.addSubject(subject4, subject5);

mediahögskolan.addStudent(student1, student2, student3);
naturhögskolan.addStudent(student4, student5);

subject1.addStudentToSubject(student1, student2, student3);
subject2.addStudentToSubject(student1, student2, student3);
subject3.addStudentToSubject(student1, student2, student3);
subject4.addStudentToSubject(student4, student5);
subject5.addStudentToSubject(student4, student5);

teacher1.addSubjectToTeacher(subject1, subject2);
teacher2.addSubjectToTeacher(subject3, subject2);
teacher3.addSubjectToTeacher(subject4, subject5);

// Just nu på uppgift: 11
