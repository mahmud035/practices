// NOTE: Enum Type: no duplicate data, helps to store constants
// enum types: numeric enum, string enum, Heterogeneous enum
//* numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType['saveData']);
// console.log(RequestType.deleteData);
//* string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["saveData"] = "SAVE_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
// console.log(RequestType2.readData);
// console.log(RequestType2['saveData']);
// console.log(RequestType2.deleteData);
//* Heterogeneous enum
var RequestType3;
(function (RequestType3) {
    RequestType3[RequestType3["id"] = 1] = "id";
    RequestType3["readData"] = "READ_DATA";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
// console.log(RequestType3.id);
// console.log(RequestType3['readData']);
