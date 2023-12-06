document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const employeeName = params.get("employee-name");
    const employeeNumber = params.get("employee-number");
    const date = params.get("date");
    const payRate = parseFloat(params.get("pay-rate")); // Convert to number
    const hoursWorked = parseFloat(params.get("hours-worked")); // Convert to number
    const taxes = parseFloat(params.get("taxes")); // Convert to number
    const healthInsurance = parseFloat(params.get("health-insurance")); // Convert to number

    // Perform computations
    const grossPay = payRate * hoursWorked;
    const totalDeductions = taxes + healthInsurance;
    const netPay = grossPay - totalDeductions;

    // Display the summary on the page
    document.getElementById("summary-content").innerHTML = `
        <p><strong>Employee's Name:</strong> ${employeeName}</p>
        <p><strong>Employee's Number:</strong> ${employeeNumber}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Gross Pay:</strong> ₱${grossPay.toFixed(2)}</p>
        <p><strong>Total Deductions:</strong> ₱${totalDeductions.toFixed(2)}</p>
        <p><strong>Net Pay:</strong> ₱${netPay.toFixed(2)}</p>
    `;
});

function goBack() {
    window.history.back();
}
