"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesRepository = exports.Continent = void 0;
var fs_1 = __importDefault(require("fs"));
var Continent;
(function (Continent) {
    Continent["Africa"] = "Africa";
    Continent["Asia"] = "Asia";
    Continent["Europe"] = "Europe";
    Continent["NorthAmerica"] = "NorthAmerica";
    Continent["SouthAmerica"] = "SouthAmerica";
    Continent["Oceania"] = "Oceania";
})(Continent = exports.Continent || (exports.Continent = {}));
var CountriesRepository = /** @class */ (function () {
    function CountriesRepository() {
    }
    CountriesRepository.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.all([
                        Continent.Africa,
                        Continent.Asia,
                        Continent.Europe,
                        Continent.NorthAmerica,
                        Continent.SouthAmerica,
                    ].map(function (continent) { return _this.allByContinent(continent); })).then(function (results) {
                        var consolidated = [];
                        results.forEach(function (result) {
                            consolidated.push.apply(consolidated, result);
                        });
                        return consolidated;
                    })];
            });
        });
    };
    CountriesRepository.prototype.allByContinent = function (continent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        fs_1.default.readFile(__dirname + '/' + _this.continentToFileName(continent), 'utf8', function (err, data) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                var countries = JSON.parse(data);
                                resolve(countries);
                            }
                        });
                    })];
            });
        });
    };
    CountriesRepository.prototype.allByCurrency = function (currency) {
        return __awaiter(this, void 0, void 0, function () {
            var all;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.all()];
                    case 1:
                        all = _a.sent();
                        return [2 /*return*/, all.filter(function (country) { return country.currency == currency; })];
                }
            });
        });
    };
    CountriesRepository.prototype.continentToFileName = function (continent) {
        var prefix = 'countries/';
        var fileNames = {};
        fileNames[Continent.Africa] = 'africa.json';
        fileNames[Continent.Asia] = 'asia.json';
        fileNames[Continent.Europe] = 'europe.json';
        fileNames[Continent.NorthAmerica] = 'northAmerica.json';
        fileNames[Continent.SouthAmerica] = 'southAmerica.json';
        return prefix + fileNames[Continent[continent]];
    };
    return CountriesRepository;
}());
exports.CountriesRepository = CountriesRepository;
