// https://www.omnicalculator.com/finance/ebit

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const EBITRadio = document.getElementById('EBITRadio');
const operatingRevenueRadio = document.getElementById('operatingRevenueRadio');
const operatingExpensesRadio = document.getElementById('operatingExpensesRadio');

let EBIT;
let operatingRevenue = v1;
let operatingExpenses = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Revenue';
  variable2.textContent = 'Operating Expenses';
  operatingRevenue = v1;
  operatingExpenses = v2;
});

operatingRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Operating Expenses';
  EBIT = v1;
  operatingExpenses = v2;
});

operatingExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Operating Revenue';
  EBIT = v1;
  operatingRevenue = v2;
});

btn.addEventListener('click', function() {
  
  if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEDIT().toFixed(2)} $`;

  else if(operatingRevenueRadio.checked)
    result.textContent = `Operating Revenue = ${computeOperatingRevenue().toFixed(2)} $`;

  else if(operatingExpensesRadio.checked)
    result.textContent = `Operating Expenses = ${computeOperatingExpenses().toFixed(2)} $`;
})

// calculation

function computeEDIT() {
  return Number(operatingRevenue.value) - Number(operatingExpenses.value)
}

function computeOperatingRevenue() {
  return Number(EBIT.value) + Number(operatingExpenses.value)
}

function computeOperatingExpenses() {
  return Number(operatingRevenue.value) - Number(EBIT.value)
}