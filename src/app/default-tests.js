const defaultTests = `
# Write some unittests and convert it to functions!

import unittest
class TestArithmetic(unittest.TestCase):

    def test_add(self):
        self.assertEqual(Arithmetic.add(50, 51), "Limit exceeded")
        self.assertEqual(Arithmetic.add(-101, 0), "Limit exceeded")
        self.assertEqual(Arithmetic.add(1, 2), 3)

    def test_subtract(self):
        self.assertEqual(Arithmetic.subtract(2, 5), 3)
        self.assertEqual(Arithmetic.subtract(5, 2), 3)
        self.assertEqual(Arithmetic.subtract(0, 0), 0)

    def test_multiply(self):
        self.assertEqual(Arithmetic.multiply(2, 0), "Multiply by zero")
        self.assertEqual(Arithmetic.multiply(0, 10), "Multiply by zero")
        self.assertEqual(Arithmetic.multiply(2, 3), 6)

    def test_divide(self):
        self.assertEqual(Arithmetic.divide(10, 5), 2)
        with self.assertRaises(ValueError):
            Arithmetic.divide(1, 0)
        with self.assertRaises(EvenDivisorError):
            Arithmetic.divide(6, 2)
`;

module.exports = { defaultTests };
