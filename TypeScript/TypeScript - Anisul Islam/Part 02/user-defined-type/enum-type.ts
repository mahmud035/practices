// NOTE: Enum Type: no duplicate data, helps to store constants

// enum types: numeric enum, string enum, Heterogeneous enum

//* numeric enum
enum RequestType {
  readData = 1,
  saveData,
  deleteData,
}

console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType['saveData']);
// console.log(RequestType.deleteData);

//* string enum
enum RequestType2 {
  readData = 'READ_DATA',
  saveData = 'SAVE_DATA',
  deleteData = 'DELETE_DATA',
}

console.log(RequestType2);
// console.log(RequestType2.readData);
// console.log(RequestType2['saveData']);
// console.log(RequestType2.deleteData);

//* Heterogeneous enum
enum RequestType3 {
  id = 1,
  readData = 'READ_DATA',
}

console.log(RequestType3);
// console.log(RequestType3.id);
// console.log(RequestType3['readData']);
