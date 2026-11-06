const assert = require("node:assert/strict")
const primeNumberChecker = require("./index")

assert.strictEqual(
    primeNumberChecker.isPrime(17),
    true
)

assert.strictEqual(
    primeNumberChecker.isPrime(12),
    false
)