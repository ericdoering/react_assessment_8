

// Allows user to use specific methods for getting the correct commas included in a number
function addCommas(method, num) {
    if(method === "localString"){
        let localStringCommas = num.toLocaleString("en-US");
        return localStringCommas;
    }
    if(method === "regularExpression"){
        let regularExpressionString = num.toString().split(".");
        regularExpressionString[0] = regularExpressionString[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return regularExpressionString.join(".");
    }
    if(method === "intlFormat"){
        let intlString = new Intl.NumberFormat().format(num)
        return intlString;
    }
};

module.exports = addCommas;