// controllers/creditController.js
const assessCredit = async (req, res) => {
  try {
    const { businessData } = req.body;
    
    // Sample logic: Evaluate the credit score based on business data
    const creditScore = calculateCreditScore(businessData);
    
    res.status(200).json({
      success: true,
      creditScore,
      recommendation: getLoanRecommendation(creditScore)
    });
  } catch (err) {
    res.status(500).json({ error: 'Error in processing credit assessment' });
  }
};

// Simple logic to calculate a dummy credit score
function calculateCreditScore(data) {
  const { revenue, expenses } = data;
  return (revenue - expenses) > 100000 ? 750 : 600; // Dummy logic
}

// Provide loan recommendation based on the credit score
function getLoanRecommendation(score) {
  if (score > 700) return 'Eligible for Loan A';
  return 'Eligible for Loan B';
}

module.exports = { assessCredit };
