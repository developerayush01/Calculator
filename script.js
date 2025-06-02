let enter=document.querySelector(".input");

document.querySelector(".ac").addEventListener("click",()=>{
    enter.value="";
})

const inputField = document.querySelector(".input");

const delBtn = document.querySelector(".del");

delBtn.addEventListener("click", () => {
    inputField.value = inputField.value.slice(0, -1);
});

["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].forEach((numClass, index) => {
    document.querySelector(`.${numClass}`).addEventListener("click", () => {
        inputField.value += (index + 1).toString();
    });
});

document.querySelector(".double-zero").addEventListener("click",()=>{
    inputField.value=inputField.value+"00"
})
document.querySelector(".zero").addEventListener("click",()=>{
    inputField.value=inputField.value+"0"
})

const operators = [
    { className: "plus", symbol: "+" },
    { className: "minus", symbol: "-" },
    { className: "operator", symbol: "/" },
    { className: "multiply", symbol: "*" },
    {className:"dot",symbol:"."},
];

operators.forEach(op => {
    document.querySelector(`.${op.className}`).addEventListener("click", () => {
        inputField.value += op.symbol;
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    try {
        const result = math.evaluate(inputField.value);
        inputField.value = result;
    } catch (err) {
        inputField.value = "Error";
    }
});

document.querySelector(".per").addEventListener("click",()=>{
    inputField.value=inputField.value/100;
});