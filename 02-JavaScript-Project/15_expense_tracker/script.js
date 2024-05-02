const AddBtn = document.getElementById("AddBtn");

// Handle Add New Expense
AddBtn.addEventListener("click", function () {
    let Expense = localStorage.getItem("expense");
    let expenseObj;
    const expenseDescription = document.getElementById("expensedescription");
    const selectCategory = document.getElementById("selectcategory");
    const expenseAmount = document.getElementById("expenseamount");
    let newExpensiveObj = {
        "Description": expenseDescription.value,
        "Category": selectCategory.value,
        "Amount": expenseAmount.value,
    }
    if (Expense == null) {
        expenseObj = [];
    } else {
        expenseObj = JSON.parse(Expense);
    }
    expenseObj.push(newExpensiveObj);
    localStorage.setItem("expense", JSON.stringify(expenseObj));
    expenseDescription.value = "";
    selectCategory.value = "";
    expenseAmount.value = "";
    ShowExpense();
});

// Function For Show All Expense
function ShowExpense() {
    let ExpenseData = localStorage.getItem("expense")
    let TableData = document.getElementById("TableData");
    let ShowExpenseObj;
    if (ExpenseData == null) {
        ShowExpenseObj = [];
    } else {
        ShowExpenseObj = JSON.parse(ExpenseData);
    }
    if (ShowExpenseObj.length == 0) {
        TableData.innerHTML = `<td><td colspan="4" class="text-center fw-bold fs-4">Expense Is Empty 🗑️</td></td>`
    }
    let DataBody = ``;
    ShowExpenseObj.forEach((expense, index) => {
        DataBody += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${expense.Description}</td>
                    <td>${expense.Category}</td>
                    <td>${expense.Amount}</td>
                    <td><button onclick="DeleteExpense(${index})" class="btn btn-danger">Delete</button></td>
                </tr>
            `
    });
    if (ShowExpenseObj.length != 0) {
        TableData.innerHTML = DataBody;
    }
}

// Function For Delete Expense
function DeleteExpense(index) {
    let expenseObj;
    let Expense = localStorage.getItem("expense");
    if (Expense == null) {
        expenseObj = [];
    } else {
        expenseObj = JSON.parse(Expense);
    }
    expenseObj.splice(index, 1);
    localStorage.setItem("expense", JSON.stringify(expenseObj));
    ShowExpense();
}

document.addEventListener("DOMContentLoaded", ShowExpense());