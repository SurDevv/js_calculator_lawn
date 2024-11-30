document.addEventListener('DOMContentLoaded', () => {
    const purchasePriceDisplay = document.getElementById('purchase-price-display');
    const equityDisplay = document.getElementById('equity-display');
    const repaymentTimeDisplay = document.getElementById('repayment-time-display');
    const loanAmountDisplay = document.getElementById('loan-amount').querySelector('span');
    const estimatedMonthlyDisplay = document.getElementById('estimated-monthly').querySelector('span');
    const interestRateDisplay = document.querySelector('.interest-rate span');
  
    const purchasePriceSlider = document.getElementById('purchase-price');
    const equitySlider = document.getElementById('equity');
    const repaymentTimeSlider = document.getElementById('repayment-time');
    const getQuoteButton = document.getElementById('get-quote');
  
    // Function to format number as currency
    function formatCurrency(value) {
      return parseInt(value).toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });
    }
  
    // Update displayed values
    function updateDisplays() {
      purchasePriceDisplay.textContent = formatCurrency(purchasePriceSlider.value);
      equityDisplay.textContent = formatCurrency(equitySlider.value);
      repaymentTimeDisplay.textContent = repaymentTimeSlider.value;
      const loanAmount = purchasePriceSlider.value - equitySlider.value;
      loanAmountDisplay.textContent = formatCurrency(loanAmount);
  
      // Simple interest formula for monthly payment
      const monthlyInterestRate = parseFloat(interestRateDisplay.textContent) / 100 / 12;
      const numberOfPayments = repaymentTimeSlider.value * 12;
      const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - (1 + monthlyInterestRate) ** -numberOfPayments);
      estimatedMonthlyDisplay.textContent = isNaN(monthlyPayment) ? 'PLN 0' : formatCurrency(monthlyPayment);
    }
  
    // Event listeners for range sliders
    purchasePriceSlider.addEventListener('input', updateDisplays);
    equitySlider.addEventListener('input', updateDisplays);
    repaymentTimeSlider.addEventListener('input', updateDisplays);
  
    // Event listener for the quote button
    getQuoteButton.addEventListener('click', () => {
      alert('Wniosek o kredyt jest sprawdzany');
    });
  
    // Initial display update
    updateDisplays();
  });
  