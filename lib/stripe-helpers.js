export function formatAmountForStripe(amount, currency) {
    let numberFormat = new Intl.NumberFormat(["en-BD"], {
        style: "currency",

        currency: currency,

        currencyDisplay: "narrowSymbol",
    });

    const parts = numberFormat.formatToParts(amount);

    let zeroDecimalCurrency = true;

    for (let part of parts) {
        if (part.type === "decimal") {
            zeroDecimalCurrency = false;
        }
    }

    return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
