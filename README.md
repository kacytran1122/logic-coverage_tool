# Logic Coverage Tool

A small browser-based tool for exploring logical expressions and basic test coverage concepts.

The app lets you enter a Boolean expression such as `(A && B) || C`, generates all possible input combinations, evaluates the expression for each case, and reports:

- Predicate Coverage
- Clause Coverage
- Combinatorial Coverage

## Files

- `index.html` - Main page and UI structure
- `app.js` - Browser interaction and truth-table rendering
- `logicCoverage.js` - Expression parsing, evaluation, and coverage helpers
- `logicCoverage.test.js` - Lightweight test script for core logic
- `style.css` - Stylesheet for the UI

## How To Run

1. Open `index.html` in a web browser.
2. Enter an expression using uppercase variables, for example `A && B` or `(A && B) || C`.
3. Click `Run`.
4. Review the coverage summary and generated truth table.

## Notes

- Variables are extracted using uppercase letters such as `A`, `B`, and `C`.
- Expression evaluation currently uses JavaScript syntax, so operators should follow JavaScript Boolean rules like `&&`, `||`, and `!`.
- `index.html` currently links to `styles.css`, but the file in this folder is named `style.css`. If the page appears unstyled, rename the file or update the link.

## Testing

The included `logicCoverage.test.js` file contains simple checks for:

- Predicate coverage
- Clause coverage
- Combinatorial coverage
- Expression evaluation

You can run those tests in a browser console after loading `logicCoverage.js`, or wire them into a test runner if you want to expand the project.
