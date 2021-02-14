"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitMeansurement = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, meansurement) {
        this.name = name;
        this.price = price;
        this.meansurement = meansurement;
    }
    return Product;
}());
exports.Product = Product;
var UnitMeansurement;
(function (UnitMeansurement) {
    UnitMeansurement["UNI"] = "Unit";
    UnitMeansurement["KG"] = "Kilo";
})(UnitMeansurement = exports.UnitMeansurement || (exports.UnitMeansurement = {}));
