{
  // Type guard / type-narrowing using typeof & in

  //* typeof --> type guard

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add(2, 3)); // 5
  console.log(add('2', '3')); // 23

  //* in guard
  // IMPORTANT: "in guard" only works for "object".

  type NormalUser = { name: string };
  type AdminUser = { name: string; role: 'admin' };

  const getUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`I am an admin & my role is ${user.role}`);
    } else {
      console.log(`I am a normal user`);
    }
  };

  const normalUser: NormalUser = { name: 'Mr. Normal' };
  const adminUser: AdminUser = { name: 'Mr. Admin', role: 'admin' };

  getUser(normalUser); // I am a normal user
  getUser(adminUser); // I am an admin & my role is admin
}
