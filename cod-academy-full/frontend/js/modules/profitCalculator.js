// ============================================================
// PROFIT CALCULATOR — Interactive spreadsheet-like tool
// ============================================================

const ProfitCalculator = {
  
  render() {
    return `
      <div class="calculator-widget" id="profitCalc">
        <div class="calc-header">
          <h3>📊 Calculator Rapid Profitabilitate</h3>
          <p class="calc-desc">Introdu valorile pentru a vedea instant dacă un produs e profitabil pe COD</p>
        </div>
        <div class="calc-grid">
          <div class="calc-input-group">
            <label>Preț vânzare (RON)</label>
            <input type="number" id="calcPrice" value="149" oninput="ProfitCalculator.calculate()">
          </div>
          <div class="calc-input-group">
            <label>Cost produs (RON)</label>
            <input type="number" id="calcCOGS" value="35" oninput="ProfitCalculator.calculate()">
          </div>
          <div class="calc-input-group">
            <label>Cost ads per comandă / CPA (RON)</label>
            <input type="number" id="calcCPA" value="40" oninput="ProfitCalculator.calculate()">
          </div>
          <div class="calc-input-group">
            <label>Cost fulfillment (RON)</label>
            <input type="number" id="calcFulfill" value="18" oninput="ProfitCalculator.calculate()">
          </div>
          <div class="calc-input-group">
            <label>Cost curierat (RON)</label>
            <input type="number" id="calcShipping" value="20" oninput="ProfitCalculator.calculate()">
          </div>
          <div class="calc-input-group">
            <label>Rata neridicate (%)</label>
            <input type="number" id="calcReturn" value="20" oninput="ProfitCalculator.calculate()">
            <small>Cost retur/neridicată (RON): ~15</small>
          </div>
        </div>
        <div class="calc-results" id="calcResults"></div>
      </div>
    `;
  },

  calculate() {
    const price = parseFloat(document.getElementById('calcPrice')?.value) || 0;
    const cogs = parseFloat(document.getElementById('calcCOGS')?.value) || 0;
    const cpa = parseFloat(document.getElementById('calcCPA')?.value) || 0;
    const fulfill = parseFloat(document.getElementById('calcFulfill')?.value) || 0;
    const shipping = parseFloat(document.getElementById('calcShipping')?.value) || 0;
    const returnRate = parseFloat(document.getElementById('calcReturn')?.value) || 0;
    const returnCost = 15;

    // Per order delivered
    const totalCostPerOrder = cogs + cpa + fulfill + shipping;
    const grossProfit = price - totalCostPerOrder;
    
    // Adjusted for return rate
    const returnLossPerOrder = (returnRate / 100) * (shipping + returnCost + fulfill);
    const adjustedProfit = grossProfit - returnLossPerOrder;
    const margin = price > 0 ? (adjustedProfit / price * 100) : 0;
    const roas = cpa > 0 ? (price / cpa) : 0;

    // Monthly projection (assuming 10 orders/day)
    const dailyOrders = 10;
    const monthlyProfit = adjustedProfit * dailyOrders * 30;

    const isGood = adjustedProfit > 0;
    const resultsEl = document.getElementById('calcResults');
    if (!resultsEl) return;

    resultsEl.innerHTML = `
      <div class="result-row">
        <span>Cost total per comandă livrată</span>
        <span class="result-value">${totalCostPerOrder.toFixed(0)} RON</span>
      </div>
      <div class="result-row">
        <span>Profit brut per comandă</span>
        <span class="result-value ${grossProfit >= 0 ? 'positive' : 'negative'}">${grossProfit.toFixed(0)} RON</span>
      </div>
      <div class="result-row">
        <span>Pierdere din neridicate (per comandă livrată)</span>
        <span class="result-value negative">-${returnLossPerOrder.toFixed(0)} RON</span>
      </div>
      <div class="result-row highlight">
        <span>PROFIT NET REAL per comandă</span>
        <span class="result-value ${isGood ? 'positive' : 'negative'}">${adjustedProfit.toFixed(0)} RON</span>
      </div>
      <div class="result-row">
        <span>Marjă netă</span>
        <span class="result-value ${margin > 15 ? 'positive' : margin > 0 ? '' : 'negative'}">${margin.toFixed(1)}%</span>
      </div>
      <div class="result-row">
        <span>ROAS real</span>
        <span class="result-value ${roas > 2 ? 'positive' : 'negative'}">${roas.toFixed(2)}x</span>
      </div>
      <div class="result-row projection">
        <span>Proiecție lunară (${dailyOrders} comenzi/zi)</span>
        <span class="result-value ${monthlyProfit > 0 ? 'positive' : 'negative'}">${monthlyProfit.toFixed(0)} RON</span>
      </div>
      <div class="result-verdict ${isGood ? 'good' : 'bad'}">
        ${isGood 
          ? (margin > 20 ? '✅ Produs EXCELENT — marjă foarte bună!' : margin > 10 ? '✅ Produs VIABIL — marjă acceptabilă' : '⚠️ Produs MARGINAL — marjă mică, risc ridicat')
          : '❌ Produs NEVIABIL — pierzi bani pe fiecare comandă'}
      </div>
    `;
  }
};
