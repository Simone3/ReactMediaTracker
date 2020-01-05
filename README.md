# Media Tracker


## Description

Media Tracker is a mobile application for Android and iOS that allows to keep track of books, movies, TV shows and videogames.

It's basically a todo-list with some extra features:
- Display several media item fields like name, description, release date, director/author, etc.
- Download media item data from catalogs (provided by Google Books, The Movie Database and Giant Bomb).
- Define custom "own platforms" to know where the media items are available (e.g. Netflix, Hulu, etc.).
- Define custom categories and groups to put media items together.
- Mark each media item as active, completed, owned or tracked to easily filter and search them.
- Sync saved lists between different devices.


## Technical Details

It's a React Native remake of an old [university project](https://github.com/Simone3/MediaTracker) (native Android).

Main components:
- React Native
- Redux (with Redux Saga)
- Firebase
- TypeScript

It has a dedicated NodeJS [back-end server](https://github.com/Simone3/MediaTrackerBackEnd) to persist the media items in a MongoDB database.


## Installation (Android only ATM)

- Setup and install your own back-end server following [these instructions](https://github.com/Simone3/MediaTrackerBackEnd).
- Clone this repository via Git.
- Setup the React Native and Android and/or iOS development environments following [this guide](https://facebook.github.io/react-native/docs/getting-started).
- Setup your configuration files and properties:
  - For the following steps mind that you can define the configuration for the *dev* and/or *prod* environments like in the back-end guide.
  - Open *app/config/files* and create *config-dev* and/or *config-prod* folders.
  - *[Android only]* Copy inside *config-dev* and/or *config-prod* the *google-services.json* that you can download from your corresponding Firebase project (see back-end installation guide) from Project settings -> Your apps -> (Your-Android-App) -> Download the latest config file.
  - Open *app/config/properties* and clone *config-sample.ts* into *config-dev.ts* and/or *config-prod.ts*.
  - Open and edit *config-dev.ts* and/or *config-prod.ts* with your configuration. You can keep everything as is except for the `backEnd.baseUrl` field, to be defined with your corresponding back-end endpoint (see back-end guide).
- Execute`npm install` in the root project folder.
- Connect a mobile device to your PC or start a local emulator (see React Native guide).
- Install/run the application:
  - Dev Android: `npm run android-dev`
  - Dev Android (Debug): use the Visual Studio Code "Debug Android" task (first install the "React Native Tools" extension)
  - Prod Android: `npm run android-prod`

Notes:
- Run `adb reverse tcp:3000 tcp:3000` after starting the Android emulator to invoke the local back-end APIs.


