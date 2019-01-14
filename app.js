
const alert = document.querySelector('.alert');
alert.style.display = 'none';

const loaderImg = document.getElementById('loader');
loaderImg.style.display = 'none';

const results = document.getElementById('results');
results.style.display = 'none';

const form = document.getElementById('loan-form');

form.addEventListener('submit', calculateLoan);

function calculateLoan(e) {
  const loanAmountInput = document.getElementById('loan-amount');
  const interestInput = document.getElementById('interest');
  const yearsInput = document.getElementById('years');

  const loanAmount = loanAmountInput.value;
  const interest = interestInput.value / 12 / 100;
  const paymentNumber = yearsInput.value * 12;

  const numerator = interest * Math.pow(1 + interest, paymentNumber);
  const denominator = Math.pow(1 + interest, paymentNumber) - 1;
  const monthlyPayment = (loanAmount * numerator) / denominator;

  //Get result inputs and insert the result
  const monthlyPaymentResult = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  monthlyPaymentResult.value = monthlyPayment;
  totalPayment.value = monthlyPayment * paymentNumber;

  if (loanAmountInput.value == '' || interestInput.value == '' || yearsInput.value == '') {
    alert.style.display = 'block';

    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000)
  } else {
    totalInterest.value = totalPayment.value - loanAmount;

  }

  loaderImg.style.display = 'block';
  results.style.display = 'none'


  setTimeout(() => {
    loaderImg.style.display = 'none';
  }, 2000);

  setTimeout(() => {
    results.style.display = 'block'
  }, 2000)

  e.preventDefault();
}