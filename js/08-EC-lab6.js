// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('How much do you want to invest?'))
rate = parseFloat(prompt('Enter interest rate as xx.x'))
years = parseInt(prompt('How many years do you want to invest for?'))

// PERFORM CALCULATIONS
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY RESULTS
document.write(`Original investment amount: ${investment}<br>`)
document.write(`Interst rate: ${rate}<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Investment future value: ${futureValue.toFixed(2)}`)