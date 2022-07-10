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
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayIntroductionMessage = exports.displayUnsupportedBrowserMessage = exports.browserHasImmersiveArCompatibility = void 0;
/*
 * Returns true if navigator has xr with 'immersive-ar' capabilities
 * Returns false otherwise.
 */
function browserHasImmersiveArCompatibility() {
    return __awaiter(this, void 0, Promise, function () {
        var isSupported;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.navigator.xr) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.xr.isSessionSupported("immersive-ar")];
                case 1:
                    isSupported = _a.sent();
                    console.info("[DEBUG] ".concat(isSupported
                        ? "Browser supports immersive-ar"
                        : "Browser does not support immersive-ar"));
                    return [2 /*return*/, isSupported];
                case 2: return [2 /*return*/, false];
            }
        });
    });
}
exports.browserHasImmersiveArCompatibility = browserHasImmersiveArCompatibility;
/*
 * Create and display message when no XR capabilities are found.
 */
function displayUnsupportedBrowserMessage() {
    var appRoot = document.getElementById("app-root");
    var bigMessage = document.createElement("p");
    bigMessage.innerText = "😢 Oh no!";
    if (appRoot) {
        appRoot.appendChild(bigMessage);
    }
    var middleMessage = document.createElement("p");
    middleMessage.innerText =
        "Your browser does not seem to support augmented reality with WebXR.";
    if (appRoot) {
        appRoot.appendChild(middleMessage);
    }
    var helpMessage = document.createElement("p");
    helpMessage.innerText =
        "Try opening the page using a recent version of Chrome on Android.";
    if (appRoot) {
        appRoot.appendChild(helpMessage);
    }
}
exports.displayUnsupportedBrowserMessage = displayUnsupportedBrowserMessage;
/**
 * Create and show a simple introduction message if the device supports
 * WebXR with immersive-ar mode.
 */
function displayIntroductionMessage() {
    var appRoot = document.getElementById("app-root");
    var bigMessage = document.createElement("h1");
    bigMessage.innerText = "Welcome! 👋";
    var middleMessage = document.createElement("p");
    middleMessage.innerText = "Press the button below to enter the AR experience.";
    var helpMessage = document.createElement("p");
    helpMessage.innerText =
        "Note: The app works best in a well lit environment, with enough space to move around.";
    helpMessage.style.fontSize = "16px";
    helpMessage.style.fontWeight = "bold";
    helpMessage.style.padding = "64px 64px 0px 64px";
    helpMessage.style.opacity = "0.8";
    if (appRoot) {
        appRoot.appendChild(bigMessage);
        appRoot.appendChild(middleMessage);
        appRoot.appendChild(helpMessage);
    }
    return function () {
        if (appRoot) {
            if (appRoot.contains(middleMessage)) {
                appRoot.removeChild(middleMessage);
            }
            if (appRoot.contains(bigMessage)) {
                appRoot.removeChild(bigMessage);
            }
            if (appRoot.contains(helpMessage)) {
                appRoot.removeChild(helpMessage);
            }
        }
    };
}
exports.displayIntroductionMessage = displayIntroductionMessage;
exports.default = {
    browserHasImmersiveArCompatibility: browserHasImmersiveArCompatibility,
    displayIntroductionMessage: displayIntroductionMessage,
    displayUnsupportedBrowserMessage: displayUnsupportedBrowserMessage,
};
