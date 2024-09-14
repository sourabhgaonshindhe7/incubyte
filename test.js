// test.js
const index = require('./index'); // Import the add function

function testAdd() {
    let result;

    // Test: should return 0 when an empty string is provided
    result = index("");
    console.assert(result === 0, `Expected 0 but got ${result}`);

    // Test: should return the sum of comma-separated numbers
    result = index("1,2,3");
    console.assert(result === 6, `Expected 6 but got ${result}`);

    // Test: should handle new lines as delimiters
    result = index("1\n2,3");
    console.assert(result === 6, `Expected 6 but got ${result}`);

    // Test: should return the number when only one number is provided
    result = index("4");
    console.assert(result === 4, `Expected 4 but got ${result}`);

    // Test: should return NaN for non-number inputs
    result = index("a,b,c");
    console.assert(isNaN(result), `Expected NaN but got ${result}`);

    // Test: should handle custom delimiter specified at the beginning
    result = index("//;\n1;2");
    console.assert(result === 3, `Expected 3 but got ${result}`);

    // Test: should support another custom delimiter with newlines
    result = index("//|\n1|2|3\n4");
    console.assert(result === 10, `Expected 10 but got ${result}`);
}

// Run tests
testAdd();
