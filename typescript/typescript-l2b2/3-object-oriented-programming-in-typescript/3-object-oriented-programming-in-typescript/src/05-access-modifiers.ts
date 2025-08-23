export {};

// ----------------------------------------
// 2. Access Modifiers
// ----------------------------------------

/**
  TypeScript introduces access modifiers to control the visibility of class members:

  `public` (default):
  Members are accessible anywhere.

  `private`:
  Members are accessible only within the class where they are declared.

  `protected`:
  Members are accessible within the class and its subclasses.

  `readonly`:
  Members can only be assigned once (either during declaration or in the constructor).
 */

class EmployeeCl {
  public name: string;
  private salary: number;
  protected department: string;
  readonly id: number;

  constructor(name: string, salary: number, department: string, id: number) {
    this.name = name;
    this.salary = salary;
    this.department = department;
    this.id = id;
  }

  public showDetails(): void {
    console.log(`${this.name} works in ${this.department}`);
    // Accessing private member within the class is allowed
    console.log(`Salary: ${this.salary}`);
  }
}

const employee = new EmployeeCl('Bob', 50000, 'HR', 101);

console.log(employee.name); // ✅ Allowed (public)
// console.log(employee.salary);  // ❌ Error: 'salary' is private
// console.log(employee.department); // ❌ Error: 'department' is protected
// employee.id = 102; // ❌ Error: 'id' is readonly

/**
 * Explanation:

 * `name` is public so it can be accessed from anywhere.
 * `salary` is private and is only accessible inside the `EmployeeCl` class.
 * `department` is protected and can be accessed in subclasses.
 * `id` is readonly and cannot be changed after initialization.
 */
