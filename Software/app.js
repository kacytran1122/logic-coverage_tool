function run() {
  const expr = document.getElementById("expr").value;

  if (!expr) {
    alert("Enter an expression");
    return;
  }

  const clauses = extractClauses(expr);
  const testCases = generateAllCases(clauses);

  const results = testCases.map(tc => ({
    ...tc,
    result: evaluateExpression(expr, tc)
  }));

  // Coverage checks
  const pc = checkPC(results.map(r => r.result));
  const cc = checkCC(testCases, clauses);
  const coc = checkCoC(testCases, clauses);

  // Output coverage
  document.getElementById("output").innerText =
    JSON.stringify({ PredicateCoverage: pc, ClauseCoverage: cc, CombinatorialCoverage: coc }, null, 2);

  renderTable(clauses, results);
}

// Render truth table
function renderTable(clauses, data) {
  const table = document.getElementById("table");
  table.innerHTML = "";

  let header = "<tr>";
  clauses.forEach(c => header += `<th>${c}</th>`);
  header += "<th>Result</th></tr>";

  table.innerHTML += header;

  data.forEach(row => {
    let tr = "<tr>";
    clauses.forEach(c => tr += `<td>${row[c]}</td>`);
    tr += `<td>${row.result}</td></tr>`;
    table.innerHTML += tr;
  });
}