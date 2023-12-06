function submitForm(event) {
    event.preventDefault();

    const employeeName = document.getElementById("employee-name").value;
    const employeeNumber = document.getElementById("employee-number").value;
    const date = document.getElementById("date").value;
    const payRate = document.getElementById("pay-rate").value;
    const hoursWorked = document.getElementById("hours-worked").value;
    const taxes = document.getElementById("taxes").value;
    const healthInsurance = document.getElementById("health-insurance").value;

    const queryParams = `?employee-name=${encodeURIComponent(employeeName)}&employee-number=${encodeURIComponent(employeeNumber)}&date=${encodeURIComponent(date)}&pay-rate=${encodeURIComponent(payRate)}&hours-worked=${encodeURIComponent(hoursWorked)}&taxes=${encodeURIComponent(taxes)}&health-insurance=${encodeURIComponent(healthInsurance)}`;

    // Redirect to the summary page with query parameters
    window.location.href = `payroll_summary.html${queryParams}`;
}