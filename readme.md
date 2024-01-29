# GitHub User API Testing Suite

## Overview
This testing suite is designed to test GitHub's User API using mock responses for different scenarios like successful data retrieval, unauthorized access, and forbidden access.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Setup
1. **Create a new folder on your machine for this project**

2. **Clone the Repository:**
   - Open your command line or terminal.
   - Change directory to the newly created folder.
   - Use `git clone https://github.com/maria-kozlova/jestTestSuite` to clone the testing suite repository to your local machine.

3. **Install Dependencies:**
   - Navigate to the project directory and run `npm install` to install necessary dependencies.
   - Make sure you have installed axios and dotenv. To install run: `npm axios` and `npm dotenv` commands.

4. **Setting Up Environment Variables:**
   - Create an `.env` file in the root of the project and store the following tokens in it: 
     - `BEARER_TOKEN_WITH_USER=Bearer mockToken12345`
     - `BEARER_TOKEN_NO_USER=Bearer mockToken67890`
     - `BEARER_TOKEN_WRONG=Bearer wrongMockToken4567`
   Please note, these tokens are not actual API tokens but are used solely for mock responses in testing.

### Running Tests
- Execute `npm test` in the project root directory to run the testing suite.

For more detailed information on User APIs please refer to [GitHub documentation](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user).