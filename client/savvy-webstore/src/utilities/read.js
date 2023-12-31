function priceFormatter(number) {
  
  let string = number.toString().split(".");
  string[0] = string[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + string.join(".");
}

function capitaliseLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
    priceFormatter,
    capitaliseLetter
}