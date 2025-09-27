// tính điểm trung bình,  Input: [8, 7, 9, 6, 10]
function calculateAverage(scores) {
    let sum = 0; //Cộng tất cả điểm trong mảng
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    let count = scores.length;// Đếm số lượng điểm
    let average = sum / count;//Tính trung bình = tổng / số lượng
    return average;// Trả về kết quả
}
let result = calculateAverage([8, 7, 9, 6, 10]);
console.log(result);

// Tìm điểm cao nhất, Input: [8, 7, 9, 6, 10]
function findHighestScore(scores) {
    let max = scores[0]; // giả sử điểm đầu tiên là lớn nhất
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i]; // cập nhật max nếu tìm được điểm cao hơn
        }
    }
    return max;
}
console.log(findHighestScore([8, 7, 9, 6, 10]));

// Đếm số điểm >= điểm đậu, Input: [8, 4, 9, 3, 10], 5
function countPassingGrades(scores, passingScore = 5) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= passingScore) {
            count++;
        }
    }
    return count;
}
console.log(countPassingGrades([8, 4, 9, 3, 10], 5));

// Lọc ra học sinh có điểm < 5, Input: ["An", "Bình", "Chi"], [8, 4, 6]
function filterFailingStudents(students, scores) {
    let result = []; // mảng để lưu học sinh bị rớt

    for (let i = 0; i < students.length; i++) {
        if (scores[i] < 5) {       // nếu điểm < 5
            result.push(students[i]); // thêm học sinh đó vào mảng kết quả
        }
    }
    return result; // trả về mảng kết quả
}
console.log(filterFailingStudents(["An", "Bình", "Chi"], [8, 4, 6]));

//Sắp xếp học sinh theo điểm giảm dần, Input: ["An", "Bình", "Chi"], [6, 9, 7]
function sortStudentsByScore(students, scores) {
    let result = [];
    // Ghép học sinh với điểm
    return students
        .map((student, i) => [student, scores[i]])
        .sort((a, b) => b[1] - a[1]);
}
console.log(sortStudentsByScore(["An", "Bình", "Chi"], [6, 9, 7]));

