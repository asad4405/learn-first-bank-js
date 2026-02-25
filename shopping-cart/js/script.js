// ============ iphone start =========== //
const iphonePlusQty = document.getElementById("iphonePlusQty");
const iphonePrice = parseInt(document.getElementById("iphonePrice").innerText);

// iphone quantity plus click
iphonePlusQty.addEventListener("click", function () {
  const iphoneQtyValue = document.getElementById("iphoneQty").value;
  const iphoneQty = parseInt(iphoneQtyValue);

  const totalIphoneQty = iphoneQty + 1;

  document.getElementById("iphoneQty").value = totalIphoneQty;

  const totalIphonePrice = iphonePrice * totalIphoneQty;

  document.getElementById("iphonePrice").innerText = totalIphonePrice;

  // subtotal + tax + total
  updateTotals();
});

// iphone quantity minus click
const iphoneMinusQty = document.getElementById("iphoneMinusQty");
iphoneMinusQty.addEventListener("click", function () {
  const iphoneQtyValue = document.getElementById("iphoneQty").value;
  const iphoneQty = parseInt(iphoneQtyValue);

  const totalIphoneQty = iphoneQty - 1;

  document.getElementById("iphoneQty").value = totalIphoneQty;

  const totalIphonePrice = iphonePrice * totalIphoneQty;

  document.getElementById("iphonePrice").innerText = totalIphonePrice;

  // subtotal + tax + total
  updateTotals();
});

// ============ iphone end =========== //




// ============ iphone cover start =========== //
const iphonCoverPlusQty = document.getElementById("iphonCoverPlusQty");
const iphoneCoverPrice = parseInt(
  document.getElementById("iphoneCoverPrice").innerText,
);

// iphone cover minus click
iphonCoverPlusQty.addEventListener("click", function () {
  const iphoneCoverQty = parseInt(
    document.getElementById("iphoneCoverQty").value,
  );

  const totalIphoneCoverQty = iphoneCoverQty + 1;
  document.getElementById("iphoneCoverQty").value = totalIphoneCoverQty;

  const totalIphoneCoverPrice = iphoneCoverPrice * totalIphoneCoverQty;
  document.getElementById("iphoneCoverPrice").innerText = totalIphoneCoverPrice;


  // subtotal + tax + total
  updateTotals();
});

// iphone cover minus click
const iphonCoverMinusQty = document.getElementById("iphonCoverMinusQty");
iphonCoverMinusQty.addEventListener("click", function () {
  const iphoneCoverQty = parseInt(
    document.getElementById("iphoneCoverQty").value,
  );

  const totalIphoneCoverQty = iphoneCoverQty - 1;
  document.getElementById("iphoneCoverQty").value = totalIphoneCoverQty;

  const totalIphoneCoverPrice = iphoneCoverPrice * totalIphoneCoverQty;
  document.getElementById("iphoneCoverPrice").innerText = totalIphoneCoverPrice;

  // subtotal + tax + total
  updateTotals();
});
// ============ iphone cover end =========== //

// ============== update total price ============== //
function updateTotals() {
  // all item prices
  const iphonePriceTotal = parseInt(document.getElementById("iphonePrice").innerText);
  const iphoneCoverPriceTotal = parseInt(document.getElementById("iphoneCoverPrice").innerText);

  //  subtotal
  const subtotalAmount = iphonePriceTotal + iphoneCoverPriceTotal;
  document.getElementById("subtotalAmount").innerText = subtotalAmount;

  // tax 
  const taxAmount = parseInt(document.getElementById("tax").innerText);

  // total
  const totalAmount = subtotalAmount + taxAmount;
  document.getElementById("totalAmount").innerText = totalAmount;
}