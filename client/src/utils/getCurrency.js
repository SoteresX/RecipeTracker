import localeCurrency from "locale-currency";

function getCurrency(value){
    const userLocale = navigator.language;
    const userCurrency = localeCurrency.getCurrency(userLocale);
    const price = formatCurrency(value, userLocale, userCurrency);
    return price;
}

function formatCurrency(value, userLocale, userCurrency){
    return new Intl.NumberFormat(userLocale, {
        style: 'currency',
        currency: userCurrency,
    }). format(value)
}

export default getCurrency;