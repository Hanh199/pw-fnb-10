// 1. Hàm chuẩn hóa họ tên
function formatName(fullName) {
    fullName = fullName.trim();
    // Tách các từ bằng khoảng trắng (dùng regex để gộp nhiều khoảng trắng thành 1)
    let name = fullName.split(/\s+/);
                    // \s có nghĩa là khoảng trắng (space, tab, xuống dòng, …)
                    // + nghĩa là một hoặc nhiều lần lặp lại.
                    // /\s+/ = “một hoặc nhiều khoảng trắng liên tiếp”.==> là cú pháp Regex
                    // không dùng "...." vì không tách theo chuỗi kí tự
                    // ==> được ["nguyễn", "văn", "an"]
    // Viết hoa chữ cái đầu, còn lại viết thường
    for (let i = 0; i < name.length; i++) {
        let word = name[i];
        name[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                    // charAt(0): lấy ký tự ở vị trí đầu tiên (index 0)
                    //slice(1): cắt chuỗi từ vị trí thứ 1 (bỏ ký tự đầu)
    }
    // Ghép các từ lại thành chuỗi hoàn chỉnh
    return name.join(" ");
}
console.log(formatName("  nguyễn văn   an  ")); // "Nguyễn Văn An"

// 2. Hàm kiểm tra email chứa @ và .com k
function validateEmail(email) {
    if (email.includes("@") && email.includes(".com")) {
        return true;
    } 
     return false;
}
console.log(validateEmail("test@gmail.com")); // true

// 3. Hàm lấy domain từ email
function extractDomain(email) {
    // Tách email thành 2 phần bằng dấu "@"
    let domain = email.split("@");
    // Trả về phần sau dấu "@"
    return domain[1];
}
console.log(extractDomain("user@gmail.com")); // "gmail.com"

// 4. Hàm tạo username từ họ tên
function createUsername(fullName) {
    fullName = fullName.trim();
    fullName = fullName.toLowerCase();
    // Bỏ dấu tiếng Việt
    fullName = fullName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    let username = fullName.replaceAll(" ", "_");
    return username;
}
console.log(createUsername("Nguyễn Văn An")); // "nguyen_van_an"