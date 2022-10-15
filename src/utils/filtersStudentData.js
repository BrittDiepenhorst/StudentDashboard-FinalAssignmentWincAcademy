import studentReviewsData from './reviewsWincAcademy.json';
import studentProfilesData from './studentProfilesData.json';

// STUDENTS
// Array studentProfilesData
export function getAllStudents() {
    return studentProfilesData;
}

// Student name for navigation link to student page
export function getStudentByName(studentName) {
    let student = studentProfilesData.studentProfiles.filter(
        (student) => student.firstName === studentName
    )[0];
    return student;
}

// REVIEWS
// Array studentReviewsData
export function getAllReviews() {
    return studentReviewsData;
}

export function getAllReviewsAssignments() {
    let allAssignments = studentReviewsData.reviews.map(review => review.assignment);
    let uniqueAssignments = [...new Set(allAssignments)];
    console.log(uniqueAssignments)
    const newArray2 = [];
    uniqueAssignments.forEach(assignment => {
        newArray2.push({ name: assignment })
    })
    console.log(newArray2);
    return newArray2;
}

// Review name for navigation link to student page
export function getReviewsByName(studentName) {
    let reviewsByName = studentReviewsData.reviews.filter(
        (review) => review.name === studentName
    );
    return reviewsByName;
}

// export function getReviewsByAssignment(assignmentName) {
//     let reviewsByAssignment = studentReviewsData.reviews.filter(
//         (review) => review.assignment === assignmentName
//     );
//     return reviewsByAssignment;
// }