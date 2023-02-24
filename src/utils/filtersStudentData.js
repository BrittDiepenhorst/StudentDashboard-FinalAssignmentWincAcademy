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

// AVERAGE
export default function calculateAverage(reviews, selectedStudents, selectedAssignments) {
    // Filter the reviews array to only include reviews for the selected student and selected assignment
    const filteredReviews = reviews.filter((review) => {
        const matchStudent =
            selectedStudents.length === 0 ||
            selectedStudents.some(
                (student) => student.firstName === review.name
            );
        const matchAssignment =
            selectedAssignments.length === 0 ||
            selectedAssignments.some(
                (assignment) => assignment.name === review.assignment
            );
        return matchStudent && matchAssignment;
    });

    // Group the filtered reviews by assignment
    const reviewGroups = filteredReviews.reduce((acc, review) => {
        const { assignment, difficulty, fun } = review;
        const assignmentObj = { name: assignment }; // create an object with a name property
        if (!acc[assignmentObj.name]) {
            acc[assignmentObj.name] = {
                totalDifficulty: 0,
                totalFun: 0,
                numReviews: 0,
            };
        }
        acc[assignmentObj.name].totalDifficulty += parseInt(difficulty);
        acc[assignmentObj.name].totalFun += parseInt(fun);
        acc[assignmentObj.name].numReviews++;
        return acc;
    }, {});

    // Calculate the average difficulty and fun for each assignment
    const averages = {};
    Object.entries(reviewGroups).forEach(([assignment, group]) => {
        const { totalDifficulty, totalFun, numReviews } = group;
        const averageDifficulty = numReviews > 0 ? totalDifficulty / numReviews : 0;
        const averageFun = numReviews > 0 ? totalFun / numReviews : 0;
        averages[assignment] = {
            averageDifficulty,
            averageFun,
        };
    });

    return averages;
}