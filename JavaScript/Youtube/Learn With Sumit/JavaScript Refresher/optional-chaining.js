{
  //* optional chaining
  const user = {
    id: 339,
    name: 'Sumit',
    age: 42,
    education: {
      degree: 'Graduate',
      school: {
        schoolName: 'Rangpur Zilla School',
      },
    },
  };

  const schoolName = user?.education?.school?.schoolName;
  console.log(schoolName); // Rangpur Zilla School
}
