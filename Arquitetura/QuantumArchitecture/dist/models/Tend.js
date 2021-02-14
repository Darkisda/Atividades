"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tend = void 0;
var Tend = /** @class */ (function () {
    function Tend(name, local, owner) {
        this.name = name;
        this.local = local;
        this.owner = owner;
        this.products = [];
    }
    Tend.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Tend.prototype.show = function () {
        return JSON.stringify([this.name, this.local, this.owner, this.products]);
    };
    return Tend;
}());
exports.Tend = Tend;
