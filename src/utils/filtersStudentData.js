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

const createId = () => {
    return Math.floor(Math.random() * Date.now());
}

export function getAllReviewsAssignments() {
    let allAssignments = studentReviewsData.reviews.map(review => review.assignment);
    let uniqueAssignments = [...new Set(allAssignments)];
    const newArray2 = [];
    uniqueAssignments.forEach(assignment => {
        newArray2.push({ name: assignment, id: createId() })
    })
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

// Group reviews by assignment
const reviews = studentReviewsData.reviews;
var groupedReviews = reviews.reduce(function (grouped, review) {
    if (!grouped[review.assignment]) {
        grouped[review.assignment] = [];
    }
    grouped[review.assignment].push(review);
    return grouped;
}, {});

// Calculate average difficulty per assignment
for (var assignment in groupedReviews) {
    var totalDifficulty = groupedReviews[assignment].reduce(function (sum, review) {
        return sum + review.difficulty;
    }, 0);
    var averageDifficulty = totalDifficulty / groupedReviews[assignment].length;
    console.log('The average difficulty for ' + assignment + ' is ' + averageDifficulty);
}

// Calculate average fun per assignment
for (var assignment in groupedReviews) {
    var totalFun = groupedReviews[assignment].reduce(function (sum, review) {
        return sum + review.fun;
    }, 0);
    var averageFun = totalFun / groupedReviews[assignment].length;
    console.log('The average fun for ' + assignment + ' is ' + averageFun);
}