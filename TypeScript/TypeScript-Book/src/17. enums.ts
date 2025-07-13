{
  // Enums

  //* In TypeScript, an `enum` is a set of named constant values.

  enum Color {
    Red = '#ff0000',
    Green = '#00ff00',
    Blue = '#0000ff',
  }

  // Enums can be defined in different ways:

  //* Numeric enums

  // In TypeScript, a Numeric Enum is an Enum where each constant is assigned a numeric value, starting from 0 by default.

  enum Size {
    Small, // value starts from 0
    Medium,
    Large,
  }

  // It is also possible to specify custom values by explicitly assigning them:

  enum Size2 {
    Small = 10,
    Medium,
    Large,
  }
  console.log(Size2.Medium); // 11

  //* String enums

  // In TypeScript, a String enum is an Enum where each constant is assigned a string value.

  enum Language {
    Bangla = 'BN',
    English = 'EN',
    Spanish = 'ES',
  }

  // NOTE: TypeScript allows the usage of heterogeneous Enums where string and numeric members can coexist.
}
