// Basic test runner
function assert(name, condition) {
  if (condition) {
    console.log("✅ PASS:", name);
  } else {
    console.error("❌ FAIL:", name);
  }
}

// TESTS

// Test 1: Predicate Coverage
(function () {
  let results = [true, false];
  assert("Predicate Coverage works", checkPC(results) === true);
})();

// Test 2: Clause Coverage
(function () {
  let clauses = ["A", "B"];
  let testCases = [
    { A: true, B: false },
    { A: false, B: true }
  ];
  assert("Clause Coverage works", checkCC(testCases, clauses) === true);
})();

// Test 3: Combinatorial Coverage
(function () {
  let clauses = ["A", "B"];
  let testCases = generateAllCases(clauses);
  assert("Combinatorial Coverage works", checkCoC(testCases, clauses) === true);
})();

// Test 4: Expression Evaluation
(function () {
  let expr = "A && B";
  let result = evaluateExpression(expr, { A: true, B: false });
  assert("Expression evaluates correctly", result === false);
})();