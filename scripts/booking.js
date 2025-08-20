/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?


let selectedDays = 0;
const costPerDay = 35;
const costHalfDay = 20;
const daysBtn = document.querySelectorAll('.day-selector li');
// const clearBtn = 0
// Yes, it should be back to initial value when creating variable.
// When web page does not load or have something wrong or users want to implement again.






/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let canClickBtn = document.querySelectorAll('.blue-hover');
function clickBtns () {
    canClickBtn.forEach(function (button) {
        button.addEventListener('click', function () {
        button.classList.toggle('clicked');
        updateCost();
        });
    });
}
clickBtns();

function dayCounter () {
    let count = 0;
    daysBtn.forEach(function (button) {
        if (button.classList.contains('clicked')) {
            count += 1;
        }  
    });
    return count;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays () {
    const clearDayBtn = document.getElementById('clear-button');
    clearDayBtn.addEventListener('click', function () {
        canClickBtn.forEach(function (button) {
            button.classList.remove('clicked');
            calculatedCost.innerText = 0;
        });
    });
}
clearDays();

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let calculatedCost = document.getElementById('calculated-cost');
const fullBtn = document.getElementById('full');
const halfBtn = document.getElementById('half');
let isHalfDay = true;

halfBtn.addEventListener('click', function () {
    isHalfDay = true;
    halfBtn.classList.add('clicked');
    fullBtn.classList.remove('clicked');
    updateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullBtn.addEventListener('click', function () {
    isHalfDay = false;
    fullBtn.classList.add('clicked');
    halfBtn.classList.remove('clicked');
    updateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateCost () {
    selectedDays = dayCounter();
    const cost = selectedDays * (isHalfDay ? costHalfDay : costPerDay);
    calculatedCost.innerText = cost;
}





