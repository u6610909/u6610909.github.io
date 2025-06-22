const VAT_RATE = 0.07;

function calculateFromBase() {
    const base = parseFloat(document.getElementById('basePrice').value);
    if (isNaN(base)) {
        showError("Please enter a valid base price.");
        return;
    }
    const vat = base * VAT_RATE;
    const total = base + vat;

    document.getElementById('result').innerHTML =
        `Base Price: ${base.toFixed(2)}<br>` +
        `VAT (7%): ${vat.toFixed(2)}<br>` +
        `Total Price (incl. VAT): ${total.toFixed(2)}`;
}

function calculateFromTotal() {
    const total = parseFloat(document.getElementById('priceWithVat').value);
    if (isNaN(total)) {
        showError("Please enter a valid total price.");
        return;
    }
    const base = total / (1 + VAT_RATE);
    const vat = total - base;

    document.getElementById('reverseResult').innerHTML =
        `Base Price (before VAT): ${base.toFixed(2)}<br>` +
        `VAT (7%): ${vat.toFixed(2)}<br>` +
        `Total Price (input): ${total.toFixed(2)}`;
}

function showError(msg) {
    document.getElementById('result').innerHTML = `<span style="color:red;">${msg}</span>`;
}
