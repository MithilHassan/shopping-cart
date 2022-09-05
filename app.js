function updateCart(isIncrease, product) {
  const productQuantity = getInputValue(product + "-quantity");
  let newQuantity;

  if (isIncrease == true) {
    newQuantity = productQuantity + 1;
  } else {
    newQuantity = productQuantity - 1;
  }

  document.getElementById(product + "-quantity").value = newQuantity;

  if (product === "phone") {
    document.getElementById("phone-price").innerText = newQuantity * 1219;
  } else {
    document.getElementById("case-price").innerText = newQuantity * 59;
  }

  calculateTotal();
}

function calculateTotal() {
  const phoneQuantity = getInputValue("phone-quantity");
  const caseQuantity = getInputValue("case-quantity");
  const subTotal = phoneQuantity * 1219 + caseQuantity * 59;
  const tax = subTotal / 10;
  const grandTotal = subTotal + tax;

  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("grandTotal").innerText = grandTotal;
}

function getInputValue(id) {
  const input = document.getElementById(id);
  const value = parseFloat(input.value);
  return value;
}
