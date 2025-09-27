// Thực hiện phép tính cơ bản
function basicCalculator(operation, a, b) {
    if( operation === "add" ) {
        return a + b;
    } else( operation === "multiply" ) 
        return a * b;
}
console.log(basicCalculator("add", 5, 3));        // 8
console.log(basicCalculator("multiply", 4, 6));

// Tính thuế (mặc định 10%), Input: 1000, 0.15 → Output: 150
function calculateTax(amount, taxRate = 0.1) {
    let VAT = amount * taxRate;
    return VAT;
}
console.log(calculateTax(1000, 0.15));

 // Tính giá sau khi giảm giá, Input: 100, 20 → Output: 80
function calculateDiscount(originalPrice, discountPercent) {
    let discount = (originalPrice * discountPercent) / 100;
    let finalPrice = originalPrice - discount;
    return finalPrice;
}
console.log(calculateDiscount(100, 20)); // 80

// Tính lãi kép: A = P(1 + r/n)^(nt),Input: 1000, 0.05, 2, 12 → Output: ~1104.89
function calculateCompoundInterest(principal, rate, time, compound = 1) {
    // principal = số tiền gốc
    // rate = lãi suất (vd: 0.05 = 5%)
    // time = số năm
    // compound = số lần ghép lãi trong 1 năm (vd: 12 = hàng tháng)
    let amount = principal * Math.pow(1 + rate / compound, compound * time);
    return amount;
}
console.log(calculateCompoundInterest(1000, 0.05, 2, 12)); // ~1104.89

// Format tiền tệ, Input: 1234567, "VND" → Output: "1,234,567 VND"
function formatCurrency(amount, currency = "VND") {
    // toLocaleString để thêm dấu phẩy phân cách hàng nghìn
    return amount.toLocaleString() + " " + currency;
}
console.log(formatCurrency(1234567, "VND")); // "1,234,567 VND"


