{
  // Conditional type: A type that is depend on another type.
  /**
   * IMPORTANT: If a given type 'SomeType' extends another given type 'OtherType', then ConditionalType is TrueType, otherwise it is FalseType
  
   * NOTE: Conditional types are defined as follows: 
   ** type ConditionalType = SomeType extends OtherType ? TrueType : FalseType
   * 'extends' here means that any value of type 'SomeType' is also of type 'OtherType'.
   */

  // Ex: 1
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; // NOTE: Conditional type

  // Ex: 2 ==> Nested Conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  // Ex: 3
  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // TODO: check korbo ==> car ache ki na / bike ache ki na / ship ache ki na / tractor ache ki na

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false; // NOTE: Here: "keyof Sheikh" ==> 'bike' | 'car' | 'ship'

  type HasBike = CheckVehicle<'bike'>; // true
  type HasCar = CheckVehicle<'car'>; // true
  type HasShip = CheckVehicle<'ship'>; // true
  type HasTractor = CheckVehicle<'tractor'>; //! false
}
