// models.js

class Student {
  constructor(id, name, courses) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.name = name;
    this.courses = courses;
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }
}

module.exports = Student;