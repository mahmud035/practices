//* 05. Object And Enums In Typescript

let player: {
  name: string;
  age?: number;
  country: string;
  married: boolean;
  clubs?: string[];
};

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

player.age = player.age! + 5;

player.clubs = player.clubs?.map((club, index) => club.toUpperCase());

// console.log(
//   player,
//   player.name,
//   player.age,
//   player.country,
//   player.married,
//   player['clubs']
// );

// Enums
enum Friends {
  Arif = 10,
  Kalam = 15,
  Salam = 20,
  Balam = 30,
}

// console.log(Friends);
// console.log(Friends.Balam);

enum Configs {
  API_Key = 'api_key',
  Domain_Name = 'domain_name',
}

// console.log(Configs);
// console.log(Configs.Domain_Name);
