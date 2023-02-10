import studentReviewsData from './reviewsWincAcademy.json';
import studentProfilesData from './studentProfilesData.json';
import { useSelector } from 'react-redux';

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

export default function CaculateAverage() {
    const reviews = studentReviewsData.reviews;
    const stateAssigment = useSelector((state) => state.assignments)
    const assignments = stateAssigment.assignments.map(assignment => assignment.name)
    const stateStudent = useSelector((state) => state.students)
    const students = stateStudent.students.map(student => student.firstName)
    console.log('students', students)
    console.log('assigments', assignments)

    // Define selected students and assignments
    var selectedStudents = students;
    var selectedAssignments = assignments;

    // Filter reviews by selected students and assignments
    var filteredReviews = reviews.filter(function (review) {
        return selectedStudents.indexOf(review.name) !== -1 && selectedAssignments.indexOf(review.assignment) !== -1;
    });

    // Calculate average difficulty for filtered reviews
    var totalDifficulty = filteredReviews.reduce(function (sum, review) {
        return sum + review.difficulty;
    }, 0);

    if (filteredReviews.length > 0) {
        var averageDifficulty = totalDifficulty / filteredReviews.length;
        console.log('The average difficulty for selected students and assignments is ' + averageDifficulty);
    } else {
        console.log('No reviews found for selected students and assignments');
    }

    // Calculate average fun for filtered reviews
    var totalFun = filteredReviews.reduce(function (sum, review) {
        return sum + review.fun;
    }, 0);

    if (filteredReviews.length > 0) {
        var averageFun = totalFun / filteredReviews.length;
        console.log('The average fun for selected students and assignments is ' + averageFun);
    } else {
        console.log('No reviews found for selected students and assignments');
    }
}