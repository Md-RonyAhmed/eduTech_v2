export const formatPrice = (price) => {
  return Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    currencyDisplay: "narrowSymbol", // Ensures ৳ instead of BDT
    minimumFractionDigits: 0, // Optional: remove .00 if not needed
  }).format(price);
};
