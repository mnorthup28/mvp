# Run Through the Flint Hills

![Project Image](![image](https://github.com/mnorthup28/mvp/assets/143556399/f6206164-077f-453d-99b3-a1ddb91167a6))

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Description

"Run Through the Flint Hills" is a web application that helps users find running trails in the Flint Hills region based on their preferences, such as distance, surface type, elevation, and military access. It provides a user-friendly interface to filter and display the trails that match the user's criteria.

## Features

- Interactive trail selection based on user preferences.
- Filtering trails by distance, surface type, elevation, and military access.
- Suggestions for new trails submitted by users.

## Technologies Used

- JavaScript
- Express.js
- PostgreSQL (with pg)
- HTML/CSS
- Node.js
- dotenv (for environment variables)
- GitHub (for version control)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Set up a PostgreSQL database and configure the connection in your `.env` file.
3. Install the required dependencies using `npm install`.
4. Start the server with `npm start`.

## Usage

1. Open the web application in your browser.
2. Use the form to specify your trail preferences, including distance, surface type, elevation, and military access.
3. Click the "Submit" button to filter the trails that match your criteria.
4. The matching trails will be displayed on the page.

## API Endpoints

- `GET /trails`: Retrieves a list of trails based on user preferences.
- `GET /trails/:id`: Retrieves a specific trail by its ID.
- `POST /trailsuggest`: Allows users to suggest new trails.
- `DELETE /trailsuggest/:id`: Deletes a suggested trail by ID.

## Database Schema

The project uses a PostgreSQL database with the following schema:

- `trailTable`: Stores information about existing trails.
- `trailSuggestionTable`: Stores user-suggested trails.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
