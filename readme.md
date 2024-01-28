# GitHub User API Testing Suite - README

## Overview
This testing suite is designed to test GitHub's User API using mock responses for different scenarios like successful data retrieval, unauthorized access, and forbidden access.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Setup
1. **Clone the Repository:**
   - Use `git clone [repository URL]` to clone the testing suite repository to your local machine.

2. **Install Dependencies:**
   - Navigate to the project directory and run `npm install` to install necessary dependencies.
   - Make sure you have installed axios and dotenv: `npm axios` , `npm dotenv`

3. **Setting Up Environment Variables:**
   - Create a `.env` file in the project root.
   - Obtain your GitHub API tokens (with and without user scope) from your GitHub account settings.
   - Add tokens to the `.env` file as `BEARER_TOKEN_WITH_USER`, `BEARER_TOKEN_NO_USER`, and `BEARER_TOKEN_WRONG`.

### Running Tests
- Execute `npm test` in the project root directory to run the testing suite.



For more detailed information on User APIs please refer to [GitHub documentation](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user).