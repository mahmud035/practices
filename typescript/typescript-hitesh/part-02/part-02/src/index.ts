class User {
  email: string;
  name: string;
  private city: string = '';

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const pavel = new User('pavel@.com', 'pavel');
// pavel.city

console.log(pavel);

//* Same work with Different Syntax:
class User2 {
  readonly city: string = '';

  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }
}

const pavel2 = new User2('pavel@.com', 'pavel', 112);
// pavel2.userId

console.log(pavel2);
