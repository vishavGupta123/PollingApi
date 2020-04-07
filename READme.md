Getting Started:

Step 1:To copy the project from my gitlab profile just run the following command :"git clone https://gitlab.com/vishavGupta/questionsapp.git".

Step 2:install all the dependencies mentioned inside the Package.Json file by running the 'npm install "name of the library"'.

Step 3:run the project on your local device by running the 'node index.js' command or 'nodemon index.js' command if you have installed the nodemon library.


Various Routes And there Function:

/questions/:id---> GET the question and various options associated with the question:

/questions/create---> Post a new question inside the database:

/questions/:id/options/create--->add a new option inside the question:

/questions/:id/delete--->Delete a question with the given id in the params:


/options/:id/delete--->Delete a option inside the question:

/options/:id/add_vote--->Post request->add plus one to the vote everytime we visit this route:


Technologies and libraries used:

Express Js:

Node js:

Mongoose:
 
Mongo DB: