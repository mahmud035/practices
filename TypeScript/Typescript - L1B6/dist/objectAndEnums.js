"use strict";
//* 05. Object And Enums In Typescript
var _a;
var player;
player = {
    name: 'Messi',
    age: 35,
    country: 'Argentina',
    married: true,
    clubs: ['Barcelona', 'psg'],
};
player = {
    name: 'Neymar',
    // age: 28,
    country: 'Brazil',
    married: true,
    clubs: ['Barcelona', 'psg'],
};
player.married = false;
player.age = player.age + 5;
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club, index) { return club.toUpperCase(); });
// console.log(
//   player,
//   player.name,
//   player.age,
//   player.country,
//   player.married,
//   player['clubs']
// );
// Enums
var Friends;
(function (Friends) {
    Friends[Friends["Arif"] = 10] = "Arif";
    Friends[Friends["Kalam"] = 15] = "Kalam";
    Friends[Friends["Salam"] = 20] = "Salam";
    Friends[Friends["Balam"] = 30] = "Balam";
})(Friends || (Friends = {}));
// console.log(Friends);
// console.log(Friends.Balam);
var Configs;
(function (Configs) {
    Configs["API_Key"] = "api_key";
    Configs["Domain_Name"] = "domain_name";
})(Configs || (Configs = {}));
// console.log(Configs);
// console.log(Configs.Domain_Name);
