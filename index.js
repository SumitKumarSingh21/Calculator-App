// JavaScript logic for the calculator app

// Function to append a value to the display
function append(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to delete the last character from the display
function deletechar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listeners for buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('equal')) {
            calculate();
        } else {
            append(button.textContent);
        }
    });
});