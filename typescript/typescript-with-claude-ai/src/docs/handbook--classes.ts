import bcrypt from 'bcrypt';
import { response } from 'express';
import jwt from 'jsonwebtoken';
import { model, Schema, type Document, type Model } from 'mongoose';
import type { IJob, IUser } from './handbook--everyday-types';
import User from './handbook--everyday-types';

{
  //* Class Basics: Properties and Methods
  // Classes in TypeScript work like JavaScript classes, but with type annotations:

  class Job {
    // Properties
    title: string;
    company: string;
    salary: number;
    isRemote: boolean;

    // Constructor
    constructor(
      title: string,
      company: string,
      salary: number,
      isRemote: boolean
    ) {
      this.title = title;
      this.company = company;
      this.salary = salary;
      this.isRemote = isRemote;
    }

    // Method
    getDescription(): string {
      return `${this.title} at ${this.company}`;
    }

    // Method with parameters
    increaseSalary(percentage: number): void {
      this.salary *= 1 + percentage / 100;
    }
  }

  // Usage
  const job = new Job('Developer', 'Tech Corp', 85000, true);
  console.log(job.getDescription()); // "Developer at Tech Corp"
  job.increaseSalary(10);
  console.log(job.salary); // 93500
}

{
  //* `readonly` Properties
  // Mark properties as immutable:

  class Job {
    readonly _id: string;
    title: string;
    company: string;

    constructor(id: string, title: string, company: string) {
      this._id = id; // ✅ Can assign in constructor
      this.title = title;
      this.company = company;
    }
  }

  const job = new Job('123', 'Developer', 'Tech');
  job.title = 'Senior Developer'; // ✅ Works
  // job._id = '456'; // ❌ Error: Cannot assign to '_id' because it is readonly
}

{
  //* Real-world pattern (MongoDB document):

  interface JobDocumentData {
    _id: string;
    createdAt: Date;
    title: string;
    company: string;
    salary: number;
    updatedAt: Date;
  }

  class JobDocument {
    readonly _id: string;
    readonly createdAt: Date;
    title: string;
    company: string;
    salary: number;
    updatedAt: Date;

    constructor(data: JobDocumentData) {
      this._id = data._id;
      this.createdAt = data.createdAt;
      this.title = data.title;
      this.company = data.company;
      this.salary = data.salary;
      this.updatedAt = data.updatedAt;
    }

    update(changes: Partial<JobDocument>) {
      Object.assign(this, changes);
      this.updatedAt = new Date();
      // Can't change _id or createdAt - they're readonly
    }
  }

  const job = new JobDocument({
    _id: '1',
    createdAt: new Date(),
    title: 'Developer',
    company: 'Tech Corp',
    salary: 90000,
    updatedAt: new Date(),
  });
  console.log(job);
}

{
  //* `super`: Calling Parent Constructor
  // When extending classes, always call `super()` first:

  // Parent Class
  class Employee {
    name: string;
    email: string;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

    getInfo(): string {
      return `${this.name} ${this.email}`;
    }
  }

  // Child Class
  class Developer extends Employee {
    skills: string[];
    yearsOfExperience: number;

    constructor(
      name: string,
      email: string,
      skills: string[],
      yearsOfExperience: number
    ) {
      super(name, email); // ✅ Must call super() before accessing 'this'
      this.skills = skills;
      this.yearsOfExperience = yearsOfExperience;
    }

    getInfo(): string {
      return `${super.getInfo()} - ${this.yearsOfExperience} years experience`;
    }
  }

  const dev = new Developer(
    'Mahmud',
    'mahmud@example.com',
    ['TypeScript', 'React'],
    5
  );
  console.log(dev.getInfo()); // "Mahmud (mahmud@example.com) - 5 years experience"
}

{
  //* Access Modifiers: `public`, `private`, `protected`
  // Control visibility of class members:

  class User {
    public name: string; // Accessible everywhere (default)
    private passwordHash: string; // Only accessible within this class
    protected role: string; // Accessible in this class and subclasses

    constructor(name: string, password: string, role: string) {
      this.name = name;
      this.passwordHash = this.hashPassword(password);
      this.role = role;
    }

    private hashPassword(password: string): string {
      // Private method - only used internally
      return `hashed_${password}`;
    }

    public verifyPassword(password: string): boolean {
      return this.passwordHash === this.hashPassword(password);
    }

    protected getRoleInfo(): string {
      return `Role: ${this.role}`;
    }
  }

  const user = new User('Mahmud', 'secret123', 'user');
  console.log(user.name); // ✅ Public
  console.log(user.verifyPassword('secret123')); // ✅ Public method
  // console.log(user.passwordHash); // ❌ Error: 'passwordHash' is private
  // console.log(user.getRoleInfo()); // ❌ Error: 'getRoleInfo' is protected
}

{
  //* Real-world pattern (authentication service):

  class AuthService {
    private readonly jwtSecret: string;
    private readonly saltRounds: number = 10;

    constructor(jwtSecret: string) {
      this.jwtSecret = jwtSecret;
    }

    private async hashPassword(password: string): Promise<string> {
      return bcrypt.hash(password, this.saltRounds);
    }

    private async comparePasswords(
      password: string,
      hash: string
    ): Promise<boolean> {
      return bcrypt.compare(password, hash);
    }

    private generateToken(userId: string): string {
      return jwt.sign({ userId }, this.jwtSecret, { expiresIn: '1d' });
    }

    public async register(
      name: string,
      email: string,
      password: string
    ): Promise<{ user: IUser; token: string }> {
      const passwordHash = await this.hashPassword(password);
      const user = await User.create({ name, email, passwordHash });
      const token = this.generateToken((user._id as string).toString());

      const userObject = user.toObject() as IUser;
      return { user: userObject, token };
    }

    public async login(
      email: string,
      password: string
    ): Promise<{ user: IUser; token: string }> {
      // Add .select('+passwordHash') to include the password field
      const user = await User.findOne({ email }).select('+passwordHash');
      if (!user) throw new Error('User not found');

      const isValid = await this.comparePasswords(password, user.passwordHash);
      if (!isValid) throw new Error('Invalid password');

      const token = this.generateToken((user._id as string).toString());

      // Convert to plain object and remove passwordHash
      const userObject = user.toObject() as IUser;
      return { user: userObject, token };
    }
  }

  // Usage
  const authService = new AuthService(process.env.JWT_SECRET!);
  const { user, token } = await authService.login(
    'mahmud@example.com',
    'password123'
  );
  console.log(user, token);
}

{
  //* Static Members: Class-Level Properties and Methods
  // Static members belong to the class itself, not instances:

  class MathUtils {
    static PI: number = 3.14159;

    static circleArea(radius: number): number {
      return this.PI * radius * radius;
    }

    static rectangleArea(width: number, height: number): number {
      return width * height;
    }
  }

  // Access without creating instance
  console.log(MathUtils.PI); // 3.14159
  console.log(MathUtils.circleArea(5)); // 78.53975

  // No need to instantiate
  // const utils = new MathUtils(); // Not needed
}

{
  //* Real-world pattern (Mongoose model with static methods):

  interface IJob extends Document {
    title: string;
    company: string;
    salary: number;
    isRemote: boolean;
  }

  interface IJobModel extends Model<IJob> {
    findByCompany(company: string): Promise<IJob[]>;
    findHighPaying(minSalary: number): Promise<IJob[]>;
    getAverageSalary(): Promise<number>;
  }

  const jobSchema = new Schema<IJob>({
    title: String,
    company: String,
    salary: Number,
    isRemote: Boolean,
  });

  // Static Methods
  jobSchema.statics.findByCompany = function (company: string) {
    return this.find({ company });
  };

  jobSchema.statics.findHighPaying = function (minSalary: number) {
    return this.find({ salary: { $gt: minSalary } });
  };

  jobSchema.statics.getAverageSalary = async function () {
    const result = await this.aggregate([
      { $group: { _id: null, avgSalary: { $avg: '$salary' } } },
    ]);
    return result[0]?.avgSalary || 0;
  };

  const Job = model<IJob, IJobModel>('Job', jobSchema);

  // Usage - call directly on model
  const techJobs = await Job.findByCompany('Tech Corp');
  const highPayingJobs = await Job.findHighPaying(100000);
  const avgSalary = await Job.getAverageSalary();

  console.log(techJobs, highPayingJobs, avgSalary);
}

{
  //* Utility class pattern:

  class ApiHelper {
    private static readonly BASE_URL = 'https://api.example.com';

    static buildUrl(endpoint: string): string {
      return `${this.BASE_URL}${endpoint}`;
    }

    static buildQueryString(params: Record<string, unknown>): string {
      return Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join('&');
    }

    static parseResponse<T>(response: unknown): T {
      if (
        typeof response !== 'object' ||
        response === null ||
        !('success' in response)
      ) {
        throw new Error('Invalid response format');
      }
      const res = response as { success: boolean; error?: string; data: T };
      if (!res.success) {
        throw new Error(res.error || 'Request failed');
      }
      return res.data;
    }
  }

  // Usage
  const url = ApiHelper.buildUrl('/jobs');
  const query = ApiHelper.buildQueryString({ page: 1, limit: 10 });
  const jobs = ApiHelper.parseResponse<IJob[]>(response);

  console.log(url, query, jobs);
}

{
  //* Generic Classes
  // Classes can be generic for maximum reusability:

  class Container<T> {
    private value: T;

    constructor(value: T) {
      this.value = value;
    }

    getValue(): T {
      return this.value;
    }

    setValue(newValue: T): void {
      this.value = newValue;
    }
  }

  const stringContainer = new Container<string>('hello');
  console.log(stringContainer.getValue()); // "hello"

  const numberContainer = new Container<number>(42);
  console.log(numberContainer.getValue()); // 42
}

{
  //* `this` at Runtime
  // TypeScript has a special `this` type for methods that return the instance:

  class QueryBuilder {
    private filters: Record<string, unknown> = {};
    private sortOptions: Record<string, unknown> = {};

    where(field: string, value: unknown): this {
      this.filters[field] = value;
      return this; // Return 'this' for chaining
    }

    sort(field: string, order: 'asc' | 'desc' = 'asc'): this {
      this.sortOptions[field] = order === 'asc' ? 1 : -1;
      return this; // Return 'this' for chaining
    }

    getQuery() {
      return { filters: this.filters, sort: this.sortOptions };
    }
  }

  // Method chaining
  const query = new QueryBuilder()
    .where('company', 'Tech Corp')
    .where('isRemote', true)
    .sort('salary', 'desc')
    .getQuery();

  console.log(query);
}

{
  //* `this` Parameters
  // Specify what `this` should be in methods:

  class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

    // Method requires 'this' to be User instance
    greet(this: User): string {
      return `Hello, I'm ${this.name}`;
    }
  }

  const user = new User('Mahmud', 'mahmud@example.com');
  console.log(user.greet()); // ✅ Works

  // const greetFn = user.greet;
  // greetFn(); // ❌ Error: 'this' is undefined

  // Fix: bind 'this'
  const boundGreet = user.greet.bind(user);
  console.log(boundGreet()); // ✅ Works
}
