import studentReviewsData from './reviewsWincAcademy.json';
import studentProfilesData from './studentProfilesData.json';

// STUDENTS

export function getAllStudents() {
    return studentProfilesData;
}

export function getStudentByName(studentName) {
    let student = studentProfilesData.studentProfiles.filter(
        (student) => student.firstName === studentName
    )[0];
    return student;
}

export function getStudentByNameArray() {
    const allStudents = studentProfilesData.studentProfiles.map(studentProfile => studentProfile.firstName);
    console.log(allStudents);
    const students = [];
    allStudents.forEach(student => {
        if (!students.includes(student)) {
            students.push(student)
        }
        return students;
    })
}

// REVIEWS

export function getAllReviews() {
    return studentReviewsData
}

export function getReviewsByName(studentName) {
    let reviewsByName = studentReviewsData.reviews.filter(
        (review) => review.name === studentName
    );
    return reviewsByName;
}

export function getReviewsByAssignment(assignmentName) {
    let reviewsByAssignment = studentReviewsData.reviews.filter(
        (review) => review.assignment === assignmentName
    );
    return reviewsByAssignment;
}

