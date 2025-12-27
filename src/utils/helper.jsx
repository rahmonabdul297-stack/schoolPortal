

export const currencyFormatter = (amount) => {
  const fmt = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
  });
  return fmt.format(amount);
};



