let products = [];

$(document).ready(function () {
  // date
  $("#currentDate").text(new Date().toDateString());

  // Load product list from data.json
  fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
      products = data;

      // dropdown
      products.forEach(p => {
        $('#productSelect').append(`<option value="${p.description}">${p.description}</option>`);
      });

      // Default select first item
      if (products.length > 0) {
        $('#productSelect').val(products[0].description);
        $('#unitPriceInput').val(products[0].unitPrice);
        updateAmount();
      }
    })
    .catch(err => {
      console.error("Failed to load products from data.json", err);
    });

  $('#productSelect').on('change', function () {
    const selected = products.find(p => p.description === this.value);
    $('#unitPriceInput').val(selected.unitPrice);
    updateAmount();
  });

  $('#quantityInput').on('input', updateAmount);

  function updateAmount() {
    const qty = parseFloat($('#quantityInput').val()) || 0;
    const price = parseFloat($('#unitPriceInput').val()) || 0;
    $('#amountOutput').val((qty * price).toFixed(2));
  }

  $('#saveButton').on('click', function () {
    const qty = parseFloat($('#quantityInput').val());
    const desc = $('#productSelect').val();
    const price = parseFloat($('#unitPriceInput').val());
    const amt = parseFloat($('#amountOutput').val());

    if (!desc || isNaN(qty) || isNaN(price)) return;

    const row = `
      <tr>
        <td>${qty}</td>
        <td>${desc}</td>
        <td>${price.toFixed(2)}</td>
        <td>${amt.toFixed(2)}</td>
        <td><button class="btn btn-danger btn-sm delete-btn">X</button></td>
      </tr>
    `;
    $('#dataTable').append(row);
    recalculateTotal();
    $('#exampleModal').modal('hide');
  });

  $('#dataTable').on('click', '.delete-btn', function () {
    $(this).closest('tr').remove();
    recalculateTotal();
  });

  function recalculateTotal() {
    let subtotal = 0;
    $('#dataTable tr').each(function () {
      const amt = parseFloat($(this).find('td').eq(3).text()) || 0;
      subtotal += amt;
    });

    const vat = subtotal * 0.07;
    const total = subtotal + vat;
    $('#subTotal').text(subtotal.toFixed(2));
    $('#vatAmount').text(vat.toFixed(2));
    $('#totalDue').text(total.toFixed(2));
  }
});
