var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User = /** @class */ (function () {
    function User(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var Data = /** @class */ (function () {
    function Data() {
        this.rows = new Map();
    }
    Data.prototype.add = function (user) {
        var _this = this;
        return sleep(100).then(function () {
            _this.rows.set(user.id, user);
        });
    };
    Data.prototype.update = function (id, partialUser) {
        var _this = this;
        return sleep(100).then(function () {
            var user = _this.rows.get(id);
            if (user) {
                var updatedUser = __assign(__assign({}, user), partialUser);
                _this.rows.set(id, updatedUser);
            }
            else {
                throw new Error("User not found.");
            }
        });
    };
    Data.prototype.delete = function (user) {
        var _this = this;
        return sleep(100).then(function () {
            var found = false;
            _this.rows.forEach(function (value, key) {
                if (value === user) {
                    _this.rows.delete(key);
                    found = true;
                }
            });
            if (!found) {
                throw new Error("User not found.");
            }
        });
    };
    Data.prototype.get = function (id) {
        var _this = this;
        return sleep(100).then(function () { return _this.rows.get(id); });
    };
    return Data;
}());
