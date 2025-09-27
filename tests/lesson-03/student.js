class Student {
    constructor(name, age, studentId) {
        // Khởi tạo thông tin học sinh
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.scores = [];
        this.subjects = [];
    }

    addScore(subject, score) {
        // Thêm điểm cho môn học
        // Lưu cả môn học và điểm
        this.subjects.push(subject);
        this.scores.push(score);
    }

    getAverageScore() {
        // Tính điểm trung bình tất cả môn
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum = sum + this.scores[i];
        }
        let average = sum / this.scores.length;
        return average; 
    }

    getGrade() {
        // Xếp loại: >= 8.5: "Giỏi", >= 7: "Khá", >= 5: "Trung bình", < 5: "Yếu"
        let avg = this.getAverageScore();
        if (avg >= 8.5) {
            return "Giỏi";
        } else if (avg >= 7) {
            return "Khá";
        } else if (avg >= 5) {
            return "Trung bình";
        } else {
            return "Yếu";
        }   
    }

    getSubjectCount() {
        // Đếm số môn học đã có điểm
        return this.subjects.length;
    }

    displayInfo() {
        // Hiển thị thông tin đầy đủ của học sinh
        // Bao gồm: tên, tuổi, mã SV, điểm TB, xếp loại
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Mã SV: ${this.studentId}, Điểm TB: ${this.getAverageScore().toFixed(2)}, Xếp loại: ${this.getGrade()}`);
    }

    isEligibleForScholarship(minAverage = 8.0) {
        // Kiểm tra đủ điều kiện học bổng không
        return this.getAverageScore() >= minAverage;
    }
}

 
const student1 = new Student("Nguyễn Văn An", 20, "SV001");
student1.addScore("Toán", 8.5);
student1.addScore("Lý", 7.5);
student1.addScore("Hóa", 9.0);

console.log(student1.getAverageScore()); // 8.33
console.log(student1.getGrade()); // "Khá"
console.log(student1.isEligibleForScholarship()); // true
student1.displayInfo();
