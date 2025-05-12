const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const result = document.getElementById('result');

billInput.addEventListener('input', calculate);
tipInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);

function setTip(percent) {
  tipInput.value = percent;
  calculate();
}

function calculate() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value) || 1;

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.innerHTML = '<span style="color: red;">Enter valid bill and tip values.</span>';
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;

  animateResult(tipAmount, total, perPerson);
}

function animateResult(tip, total, perPerson) {
  let current = 0;
  const steps = 30;
  const interval = setInterval(() => {
    current++;
    const t = current / steps;
    result.innerHTML = `
      Tip: $${(tip * t).toFixed(2)}<br />
      Total: $${(total * t).toFixed(2)}<br />
      Per Person: $${(perPerson * t).toFixed(2)}
    `;
    if (current >= steps) clearInterval(interval);
  }, 20);
}

function resetCalculator() {
  billInput.value = '';
  tipInput.value = '';
  peopleInput.value = '';
  result.innerHTML = 'Tip: $0.00<br />Total: $0.00<br />Per Person: $0.00';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}