function addVAT(price) {
    return price + (0.2 * price);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};

function getFullName(first, last) {
    return first + ' ' + last;
};

function makeHalfPrice(price) {
    return price / 2;
};

function countBooks(arr) {
    return arr.length;
};

function isInStock(book) {
    if (book.quantity >= 1){
        return true;
    } else {
        return false;
    }
};

function getTotalOrderPrice (price, quantity) {
    return (price * quantity) * 1.2;
};