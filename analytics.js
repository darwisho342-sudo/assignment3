// analytics.js

function calculateClassAverage(students, courseId) {
  const grades = students
    .map(s => s.courses.find(c => c.courseId === courseId))
    .filter(c => c !== undefined)
    .map(c => c.grade);

  const total = grades.reduce((sum, g) => sum + g, 0);
  return total / grades.length;
}

function findTopStudent(students) {
  return students.reduce((best, current) => {
    return current.getAverage() > best.getAverage() ? current : best;
  });
}

function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}

module.exports = {
  calculateClassAverage,
  findTopStudent,
  filterStudents
};
