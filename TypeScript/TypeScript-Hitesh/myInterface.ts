interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

const pavel: User = {
  dbId: 1,
  email: 'pavel@.com',
  userId: 112,
  githubToken: 'token',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'pavel10', off: 10) => {
    return 10;
  },
};

pavel.email = 'pavel@gmail.com';
// pavel.dbId = 222; // Error Here

interface Admin extends User {
  role: 'admin' | 'learner';
}

// Admin after extended
const mahmud: Admin = {
  dbId: 1,
  email: 'pavel@.com',
  userId: 112,
  role: 'admin',
  githubToken: 'token',
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'pavel10', off: 10) => {
    return 10;
  },
};
