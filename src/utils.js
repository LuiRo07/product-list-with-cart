function calculateTax(total) {
    const tax = 0.15; // 15% taxes
    const newTotal = Number((total * tax) + total).toFixed(2);
    return newTotal;
}

export { calculateTax };
