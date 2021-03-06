# Song-And-Lyric-Creator - Summary
This is a song and lyric creator. I built upon a starter product to develop the client side interface with React an GraphQL contained in the client folder.

## Requirements and Setup
1. Node must be install.
2. A mongoDB database must be connected to run the application. Please follow the instructions titled "Getting started with Atlas": https://docs.atlas.mongodb.com/getting-started. You will need to complete parts 1-5 of the guide. In part 5 scroll down and only follow the instructions under "Connect to Your Atlas Cluster". Copy the "connection string".

## Running the project 
1. Clone the repository.
2. Locate the folder with the command line.
3. Find the server.js file under the server folder. Edit the MONGO_URI with the connection string. Replace the username, database password, and database name with those used in the MongoDB setup.
4. Change directory: cd Song-And-Lyric-Creator
4. Run: npm install
5. Run: npm run dev

## Navigating the project
1. First add a song by entering the title and clicking the add symbol. This will appear as a list element
2. Song details can be view by clicking a list element.
3. Within the song details page lyrics can be added.
4. Lyrics can be liked within the page. 
5. The back link will return a user to the home page.
6. Songs can be deleted by selected the delete icon.
