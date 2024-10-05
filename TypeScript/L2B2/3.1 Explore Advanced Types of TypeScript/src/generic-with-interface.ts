{
  /**
   * IMPORTANT:
   *
   * NOTE: একটা "interface" define করবো যার মধ্যে কিছু property এর type থাকবে 'fixed type' এবং কিছু property এর type থাকবে 'Dynamic type'
   */

  //* Generic with interface

  interface IDeveloper<T, U = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: U;
  }

  type ISmartWatch = {
    brand: string;
    model: string;
    display?: string;
    heartTrack?: boolean;
    sleepTrack?: boolean;
  };

  type IBike = {
    model: string;
    engineCapacity: string;
  };

  const poorDeveloper: IDeveloper<ISmartWatch> = {
    name: 'Persian',
    computer: {
      brand: 'Asus',
      model: 'X556UQ',
      releaseYear: 2016,
    },
    smartWatch: {
      brand: 'Emilab',
      model: 'kw66',
      display: 'Amoled',
    },
  };

  const richDeveloper: IDeveloper<ISmartWatch, IBike> = {
    name: 'Rich Dev',
    computer: {
      brand: 'HP',
      model: 'X-25UR',
      releaseYear: 2022,
    },
    smartWatch: {
      brand: 'Apple Watch',
      model: 'Something',
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: 'Yamaha',
      engineCapacity: '250cc',
    },
  };
}
