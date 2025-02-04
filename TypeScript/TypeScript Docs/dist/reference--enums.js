"use strict";
// export {};
//* Enums (ChatGPT & DeepSeek) 👇
/**
 * Enums (enumerations) are a TypeScript feature to define a set of named constants, making code more:
 *
 * Readable: Use meaningful names instead of magic numbers/strings
 * Maintainable: Centralize value definitions
 * Type-safe: Restrict variables to predefined values
 */
// ----------------------------------------
// Basic Enum Syntax
// ----------------------------------------
//* Numeric Enum (Default)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction[2]); // "Left" (Reverse mapping)
//* String Enum
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "Error";
    LogLevel["Warn"] = "Warn";
    LogLevel["Info"] = "Info";
})(LogLevel || (LogLevel = {}));
console.log(LogLevel.Warn); // "Warn"
//* Heterogeneous Enum (Mixed types)
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["Success"] = 200] = "Success";
    ResponseCode[ResponseCode["NotFound"] = 404] = "NotFound";
    ResponseCode["Error"] = "500_INTERNAL_SERVER_ERROR";
})(ResponseCode || (ResponseCode = {}));
// ----------------------------------------
// Enum Features
// ----------------------------------------
// Custom Initialization
var FileSize;
(function (FileSize) {
    FileSize[FileSize["Small"] = 1] = "Small";
    FileSize[FileSize["Medium"] = 2] = "Medium";
    FileSize[FileSize["Large"] = 10] = "Large";
    FileSize[FileSize["XLarge"] = 11] = "XLarge";
})(FileSize || (FileSize = {}));
// Reverse Mapping
// Numeric enums automatically create value-to-key mappings:
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
})(Status || (Status = {}));
console.log(Status[1]); // "Active"
console.log(Status.Active); // 1
// Object Constants
const LogLevelConst = {
    Error: 'Error',
    Warn: 'Warn',
    Info: 'Info',
};
