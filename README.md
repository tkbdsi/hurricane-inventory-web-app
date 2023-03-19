# Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

Before you can run the web app, you need to have the following software installed on your system:

1. Node.js (version 12.x or higher)
2. npm (version 6.x or higher)
3. Git

# Installation

1. Fork the repository to create your own copy:

```
https://github.com/tkbdsi/hurricane-inventory-web-app.git
```

2. Clone your forked repository:

```
git clone https://github.com/your-username/project-name.git
```

3. Change to the project directory

```
cd project-name
```

4. Install dependencies

```
npm install
```

# Firebase Configuration

To set up your own Firebase configuration, follow these steps:

1. Go to the [Firebase console](https://console.firebase.google.com/)
2. After creating the project, click on "Add Firebase to your web app" and copy the configuration object.
3. Create a .env file in the root of the project directory and paste your Firebase configuration:

```
REACT_APP_API_KEY=your-firebase-api-key
REACT_APP_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_DATABASE_URL=your-firebase-database-url
REACT_APP_PROJECT_ID=your-firebase-project-id
REACT_APP_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_APP_ID=your-firebase-app-id
REACT_APP_MEASUREMENT_ID=your-firebase-measurement-id
```

4. Save the `.env` file.

# Running the App

To run the app in development mode, execute the following command:

```
npm run start
```

Open your browser and navigate to http://localhost:3000 to view the web app in action.

# Contributing

--- TBD ---

# Project Structure

--- coming soon ---

# Testing

To run the test suite, execute the following command:

```
npm run test
```

# Deployment

--- maybe coming soon, this is up to the user generally ---

# Bill of Software and Libraries

- React - the web framework used
- Firebase - data storage and real-time updates
- React Router - to form the single page application

# License

-- tbd --

# Acknowledgements

---
