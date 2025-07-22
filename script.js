function append(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deletechar(){
    let input = document.getElementById('display');
    input.value = input.value.slice(0, -1);
}
function calculate() {
    try{
    let result = eval(document.getElementById('display').value);
   document.getElementById('display').value = result;
   }
   catch(e) {
        document.getElementById('display').value = 'Error';
    }   
} 
