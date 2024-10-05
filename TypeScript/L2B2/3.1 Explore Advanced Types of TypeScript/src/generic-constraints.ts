{
  //* Constraints
  /**
   * IMPORTANT:
   * যখন generic function কে force করে বলবো যে, generic এ পাঠানো data তে এই এই type এর data থাকতেই হবে, অথবা এই এই property থাকতেই হবে --> তখন সেটাকে Constraints in generic or generic constraints বলে।
   * Constraints কে define করার জন্য "extends keyword" টা ব্যবহার করতে হয়।
   * Constraints এ মিনিমাম Requirements এর type বা property তো দিতে হবেই + এর সাথে extra type বা property ও দিতে পারবো।
   */

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = 'Next Level Web Development';

    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 444,
    name: 'Mr. Z',
    email: 'z@gmail.com',
    emni: 'emni', // Error Here : Because id, name and email property are missing
  });

  const student1 = addCourseToStudent({
    id: 222,
    name: 'Mr. X',
    email: 'a@gmail.com',
    devType: 'NLWD',
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: 'Mr. Y',
    email: 'a@gmail.com',
    watchType: 'AppleWatch',
  });
}
