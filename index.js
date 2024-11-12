class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
        this.subjects = [];
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teacher = null;
    }
    AddStudentToSubject(student) {
        this.students.push(student);
        student.subjects.push(this);
    }
}

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.subjects = [];
    }
}

class Teacher {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }
    AddSubject(subject) {
        this.subjects.push(subject);
        subject.teacher = this;
    }
}

function AddSubjectToTeacher(teacher, subject) {
    this.subjects.push(subject);
    subject.teacher = this;
}
