## Smart Therapy

> Rate-and-review web application to help you find the best therapist for you.

Tech Stack: React (using HTML and CSS) / Node.js (using Express) / MySQL.

## Usage

Necessary technology to download:
1. Install Node.js from https://nodejs.org/en/. Make sure to select the correct version depending on your operating system.
2. Broswer that was used to clone the application from GitHub; note that the application when started will run on the default system broswer if not specified.
You do not need to download MySQL.

How to install the app dependencies (after cloning the repository in a folder):
1. Open the terminal commnand line
2. Navigate to the root folder that the application was cloned into, ex. cd <root_folder_of_local_repository>
3. Next, run the following commands in sequence in terminal
4. cd client
5. npm install
6. npm install react-router-dom
7. cd ..
8. npm install
9. npm install nodemon -g
10. If 9 didn't work and you're using macOS, try running "sudo npm install -g nodemon" instead.

To run the app, simply type "npm start" into the command line (from the root git folder).
The application should automatically open in the broswer in localhost:3000. The server is located at localhost:5000, although it is not necessary to open the server separately ("npm start" already starts it). 

From the tab that was automatically opened, search and enjoy! You can close the app from the command-line using Ctrl+C, then type "npm start" at any later time to restart it.
