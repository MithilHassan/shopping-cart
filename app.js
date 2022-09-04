function increase(id) {
  updateNumber(true, id);
}
function decrease(id) {
  updateNumber(false, id);
}
function updateNumber(isIncrease, id) {
  const previousNumber = parseFloat(document.getElementById(id).value);
  const subtotal = parseFloat(document.getElementById("subtotal").innerText);
  let newNumber;
  let newSubtotal;
  if (isIncrease) {
    newNumber = previousNumber + 1;
    if (id === "phone-number") {
      newSubtotal = subtotal + 1219;
    } else {
      newSubtotal = subtotal + 59;
    }
  } else {
    newNumber = previousNumber - 1;
    if (id === "phone-number") {
      newSubtotal = subtotal - 1219;
    } else {
      newSubtotal = subtotal - 59;
    }
  }
  document.getElementById(id).value = newNumber;
  if (id === "phone-number") {
    document.getElementById("phone-price").innerText = newNumber * 1219;
  } else {
    document.getElementById("case-price").innerText = newNumber * 59;
  }
  document.getElementById("subtotal").innerText = newSubtotal;
  document.getElementById("tax").innerText = newSubtotal / 10;
  document.getElementById("total").innerText = newSubtotal + newSubtotal / 10;
}
