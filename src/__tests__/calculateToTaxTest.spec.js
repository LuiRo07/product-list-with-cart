function calculateTax(total) {
    const tax = 0.15; // 15% taxes
    const newTotal = ((total * tax) + total).toFixed(2);
    return Number(newTotal)
}

describe("Calculate Tax function", () => {
    test("It should calculate the tax of the total", () => {
        const input = 31.50;

        const output = 36.23;

        expect(calculateTax(input)).toEqual(output);
    })
});
