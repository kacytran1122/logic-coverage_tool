// Extract variables (clauses)
function extractClauses(expr) {
  return [...new Set(expr.match(/[A-Z]/g))];
}

// Evaluate expression
function evaluateExpression(expr, assignment) {
  let evalExpr = expr;

  for (let key in assignment) {
    evalExpr = evalExpr.replaceAll(key, assignment[key]);
  }

  return eval(evalExpr);
}

// Generate all combinations
function generateAllCases(clauses) {
  let results = [];
  let n = clauses.length;

  for (let i = 0; i < (1 << n); i++) {
    let obj = {};
    clauses.forEach((c, idx) => {
      obj[c] = Boolean(i & (1 << idx));
    });
    results.push(obj);
  }

  return results;
}

// Predicate Coverage
function checkPC(results) {
  return results.includes(true) && results.includes(false);
}

// Clause Coverage
function checkCC(testCases, clauses) {
  return clauses.every(clause => {
    let values = testCases.map(tc => tc[clause]);
    return values.includes(true) && values.includes(false);
  });
}

// Combinatorial Coverage
function checkCoC(testCases, clauses) {
  return testCases.length === Math.pow(2, clauses.length);
}