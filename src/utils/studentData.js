import reviewData from './mockdata_Winc.json';

const studentData = () => {
    const studentData = JSON.stringify(reviewData);
    const studentDataReview = studentData.reviews;
    console.log(studentDataReview);
    return studentDataReview;
};

export default studentData;