//Kết hợp tất cả các thông tin các bài trên (examp1,... examp4),
//  hãy tạo hệ thống quản lý lớp học hoàn chỉnh

class ClassRoom {
    constructor(className, teacher) {
        this.className = className;
        this.teacher = teacher;
        this.students = [];
        this.subjects = ["Toán", "Lý", "Hóa", "Văn", "Anh"];
    }

    // 1. Quản lý học sinh
    addStudent(student) {
        // Duyệt qua danh sách học sinh hiện có
        for (let i = 0; i < this.students.length; i++) {
            // Nếu mã học sinh đã tồn tại thì không thêm nữa
            if (this.students[i].studentId === student.studentId) {
            console.log("Học sinh có mã " + student.studentId + " đã tồn tại!");
            return; // thoát hàm
            }
        }// Nếu không trùng thì thêm vào danh sách
        this.students.push(student);
        console.log("Đã thêm học sinh:", student.name);
    }

    removeStudent(studentId) {
        // Xóa học sinh khỏi lớp
        this.students = this.students.filter(s => s.studentId !== studentId);
        return true;
    }

    findStudent(keyword) {
        // Tìm học sinh theo tên hoặc mã (không phân biệt hoa thường)
        // Sử dụng string utils: toLowerCase(), includes()
        

    }

    // 2. Thống kê và báo cáo
    getClassAverage() {
        // Tính điểm trung bình của cả lớp
        let sum = 0;
        for (let i = 0; i < this.students.length; i++) {
            sum = sum + this.students[i].getAverageScore();
        }   
        let average = sum / this.students.length;
        return average;
    }

    getTopStudents(count = 3) {
        // Lấy top học sinh giỏi nhất
        // Sắp xếp theo điểm TB giảm dần
        return this.students
            .sort((a, b) => b.getAverageScore() - a.getAverageScore())
            .slice(0, count);

    }

    getSubjectStatistics(subject) {
        // Thống kê điểm môn học:
        // - Điểm cao nhất, thấp nhất, trung bình
        // - Số học sinh đạt từng loại (Giỏi, Khá, TB, Yếu)
        let scores = this.students
            .map(s => {
                let index = s.subjects.indexOf(subject);
                return index !== -1 ? s.scores[index] : null;
            })
            .filter(score => score !== null);   
    }

    generateReport() {
        // Tạo báo cáo tổng hợp lớp học
        // Bao gồm: thông tin lớp, danh sách học sinh, thống kê
        console.log(`Lớp: ${this.className}, Giáo viên: ${this.teacher}`);
        console.log("Danh sách học sinh:");
        this.students.forEach(s => s.displayInfo());
        console.log(`Điểm trung bình lớp: ${this.getClassAverage().toFixed(2)}`);
        console.log("Top 3 học sinh giỏi nhất:");
        this.getTopStudents(3).forEach(s => s.displayInfo());      
    }

    // 3. Xử lý dữ liệu nâng cao
    exportStudentList(format = "simple") {
        // Export danh sách học sinh
        // format: "simple" | "detailed" | "grades"
        if (format === "simple") {
            return this.students.map(s => `${s.studentId} - ${s.name}`);
        } else if (format === "detailed") {
            return this.students.map(s => {
                return `Mã SV: ${s.studentId}, Tên: ${s.name}, Tuổi: ${s.age}, Điểm TB: ${s.getAverageScore().toFixed(2)}, Xếp loại: ${s.getGrade()}`;
            });
        } else if (format === "grades") {
            return this.students.map(s => {
                let grades = s.subjects.map((subj, i) => `${subj}: ${s.scores[i]}`).join(", ");
                return `Mã SV: ${s.studentId}, Tên: ${s.name}, Điểm: [${grades}]`;
            }); 
    }
    }

    importScoresFromString(dataString) {
        // Import điểm từ chuỗi CSV
        // Format: "StudentID,Subject,Score"
        // Ví dụ: "SV001,Toán,8.5\nSV002,Lý,7.0"
        let lines = dataString.split("\n"); 
        lines.forEach(line => {
            let [studentId, subject, score] = line.split(",");
            let student = this.students.find(s => s.studentId === studentId);
            if (student && this.subjects.includes(subject)) {
                student.addScore(subject, parseFloat(score));
            } 
        });      
    }

    validateAllData() {                         
        // Kiểm tra tính hợp lệ của dữ liệu
        // - Điểm trong khoảng 0-10
        // - Thông tin học sinh đầy đủ
        // - Không có dữ liệu trùng lặp
        for (let student of this.students) {
            if (!student.name || !student.studentId || student.age <= 0) {
                return false;
            }       for (let score of student.scores) {         
                if (score < 0 || score > 10) {
                    return false;
                }
            }
        }
        let ids = this.students.map(s => s.studentId);
        let uniqueIds = new Set(ids);
        if (ids.length !== uniqueIds.size) {
            return false;
        }       return true;        
    }  
}
// Utility functions hỗ trợ
class DataProcessor {
    static formatStudentData(students) {
        // Format dữ liệu học sinh để hiển thị
        return students.map(s => `${s.studentId} - ${s.name} (${s.age} tuổi)`);
    }

    static calculateGradeDistribution(students) {
        // Tính phân bố điểm: bao nhiêu % Giỏi, Khá, TB, Yếu
        let distribution = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
        students.forEach(s => {
            let grade = s.getGrade();
            distribution[grade]++;
        }); 
    }

    static generateStudentId(name, existingIds) {
        // Tự động tạo mã học sinh từ tên
        // Đảm bảo không trùng với mã đã có
        let baseId = name.toLowerCase().replace(/\s+/g, '').slice(0, 5);
        let id = baseId;
        let counter = 1;    
    }

    static parseCSVData(csvString) {
        // Parse dữ liệu CSV thành array objects
        let lines = csvString.split("\n");
        let headers = lines[0].split(",");
        let result = [];        
    }
}
