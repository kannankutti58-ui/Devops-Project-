document.getElementById("resultBtn").addEventListener("click", function () {

    // Student Details
    let name = document.getElementById("studentName").value.trim();
    let regNo = document.getElementById("regNo").value.trim();
    let dept = document.getElementById("department").value;

    // Marks
    let java = Number(document.getElementById("java").value);
    let dbms = Number(document.getElementById("dbms").value);
    let cn = Number(document.getElementById("cn").value);
    let os = Number(document.getElementById("os").value);
    let wt = Number(document.getElementById("wt").value);

    // Validation
    if (
        name === "" ||
        regNo === "" ||
        dept === "" ||
        isNaN(java) ||
        isNaN(dbms) ||
        isNaN(cn) ||
        isNaN(os) ||
        isNaN(wt)
    ) {
        alert("Please fill all fields.");
        return;
    }

    // Check marks range
    let marks = [java, dbms, cn, os, wt];

    for (let mark of marks) {
        if (mark < 0 || mark > 100) {
            alert("Marks should be between 0 and 100.");
            return;
        }
    }

    // Total
    let total = java + dbms + cn + os + wt;

    // Percentage
    let percentage = total / 5;

    // Grade
    let grade;

    if (percentage >= 90)
        grade = "O";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    // Pass / Fail
    let result = "PASS";

    for (let mark of marks) {
        if (mark < 40) {
            result = "FAIL";
            break;
        }
    }

    // Display Result
    document.getElementById("totalMarks").textContent = total + " / 500";
    document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;

    let resultElement = document.getElementById("result");
    resultElement.textContent = result;

    if (result === "PASS") {
        resultElement.style.color = "green";
    } else {
        resultElement.style.color = "red";
    }

});
