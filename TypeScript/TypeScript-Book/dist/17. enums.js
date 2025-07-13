"use strict";
{
    // Enums
    //* In TypeScript, an `enum` is a set of named constant values.
    let Color;
    (function (Color) {
        Color["Red"] = "#ff0000";
        Color["Green"] = "#00ff00";
        Color["Blue"] = "#0000ff";
    })(Color || (Color = {}));
    // Enums can be defined in different ways:
    //* Numeric enums
    // In TypeScript, a Numeric Enum is an Enum where each constant is assigned a numeric value, starting from 0 by default.
    let Size;
    (function (Size) {
        Size[Size["Small"] = 0] = "Small";
        Size[Size["Medium"] = 1] = "Medium";
        Size[Size["Large"] = 2] = "Large";
    })(Size || (Size = {}));
    // It is also possible to specify custom values by explicitly assigning them:
    let Size2;
    (function (Size2) {
        Size2[Size2["Small"] = 10] = "Small";
        Size2[Size2["Medium"] = 11] = "Medium";
        Size2[Size2["Large"] = 12] = "Large";
    })(Size2 || (Size2 = {}));
    console.log(Size2.Medium); // 11
    //* String enums
    // In TypeScript, a String enum is an Enum where each constant is assigned a string value.
    let Language;
    (function (Language) {
        Language["Bangla"] = "BN";
        Language["English"] = "EN";
        Language["Spanish"] = "ES";
    })(Language || (Language = {}));
    // NOTE: TypeScript allows the usage of heterogeneous Enums where string and numeric members can coexist.
}
