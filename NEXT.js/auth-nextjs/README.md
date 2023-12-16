# NEXT.js Authentication with Next.js

This repository contains a sample project demonstrating how to implement authentication using Next.js.

## Introduction

The project showcases an authentication system built with Next.js, a popular React framework. It provides a foundation for implementing user authentication and handling protected routes in a Next.js application. The code includes a basic registration, login, and logout functionality, as well as protected routes that require user authentication.

## Tech Stack

- Nextjs
- typescript
- mongodb
- mongoose
- mailtrap

## Features

- User registration: Allows users to create a new account with a unique username and password.
- User login: Provides a login form for existing users to authenticate themselves.
- User logout: Enables users to log out of their accounts and end their authenticated session.
- Protected routes: Demonstrates how to create routes that require authentication to access.
- Authentication persistence: Utilizes cookies to maintain user authentication across sessions.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mahmud035/NEXT.js.git
```

2. Navigate to the project directory:

```bash
cd NEXT.js/auth-nextjs
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit `http://localhost:3000` to access the application.

3. Register a new user account or use the provided login credentials.

4. Explore the different pages and features of the application, including protected routes that require authentication.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the existing code style and include appropriate tests with your changes.

## Assignment

1. Improve the UI of the application
2. Add feature of forgot password

---

### Hint:

For forgot password feature.

1. User needs a page to enter his email and submit.
2. Validate if user exists, if yes, send him same token email that we discussed in this course
3. User clicks on email and get a page to enter new password with a submit button.
4. As soon as he click submit button, he is sending you a token and new password.
5. Verify the token and save the new password after encrypting it.

---
