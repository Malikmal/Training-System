# Practical Test

The Training System for Country Delegation will control the training activities for each skill where this country will participate in a competition. For this system the access will be restricted, and all information can be registered in a database. The data will be provided in JSON format for the future development of the client-side web system that will present the information in a nice way for the final users.

There are the main objectives/functionalities for the system:
1. Register the users in one profile (board, expert, trainer or competitor) for a skill (optional): Just logged users with Board profile can realize this operation, for other profiles an error message must be returned. This are the fields for the user registration:
    -	Name, text mandatory;
    -	E-mail, text mandatory;
    -	username, text mandatory;
    -	Password, text mandatory;
    -	Profile, mandatory with one of these options (board, expert, trainer or competitor)
    -	Skill, optional;
2.	Login in the system: Just registered users can do login in the system using login and password information. For not registered users and with wrong access information, the error message return.
3.	Register and manage (insert/update/delete) a training activity for one skill: It is possible for users with expert profile maintain information about the training activities in the system. These are the fields for one activity:
    -	Skill, mandatory with one of skills registered in the skills table;
    -	Title text mandatory;
    -	Description text mandatory;
    -	Start date, date mandatory;
    -	End date, date mandatory with validation for date bigger then start date;
    -	Participants, list of participants (users) of the activity, mandatory. Validation to just include participants with the same skill in their registration data.
4.	List of activities: Return the information of activities registered based in the filter variables. This  information just can be provided for logged users in any profile;
5.	Logout: Permit a logged user do logout in the system. 
To realize these actions, you must develop these services:
#

## 1.	Authentication
### 1.1. Login (v1/auth/login)
Description : For client to get login token via username and password
Request method : POST
Header : header authorization basic 
Requested parameter:
  -	Body:
    -	username
    -	password 
Response result:
  -	If success,
    -	header: response status: 200
    -	body:
        -	token: authorization token (to be valid until logout). Token will be generated by the system
        -	profile (board, expert, trainer or competitor)
  -	If username/password not correct or empty,
    -	header: response status: 401
    -	body: message: invalid login

### 1.2.	Logout (v1/auth/logout?token={AUTHORIZATION_TOKEN}) 
Description: For server to invalid the user’s token
Request method: GET
Header: header authorization basic
Response result:
  -	If success,
      -	header: response status: 200
      -	body:
          -	message: logout success
  -	If unauthorized user access it, data:
      -	Message: Unauthorized user
      -	Response status: 401





## 2.	Registration
### 2.1.	Create user (v1/user?token={AUTHORIZATION_TOKEN}), only board users can access this API service. 
Description: For a board user register an user in the system
Request method: POST
Header: header authorization basic 

Request parameter:
  -	Body:
      -	name
      -	email
      -	username
      -	password
      -	profile
      -	[skill]

Response result:
  -	If success, body:
      -	Message: create success
      -	Response status: 200
  -	If failed, body:
      -	Message: Data cannot be processed
      -	Response status: 422
  -	If unauthorized user access it, body:
      -	Message: Unauthorized user
      -	Response status: 401

## 3.	Training Activities
### 3.1.	Register an Activity (v1/activity?token={AUTHORIZATION_TOKEN}), only expert users can access this API service.
Description: For an expert user register a training activity in a respective skill in the system
Request method: POST
Header: header authorization basic

Request parameter:
  -	Body:
      -	skill
      -	title
      -	description
      -	startdate
      -	enddate
      -	participants 

Response result:
  -	If success, body:
      -	Message: create success
      -	Response status: 200
  -	If failed, body:
      -	Message: Data cannot be processed
      -	Response status: 422
  -	If unauthorized user access it, body:
      -	Message: Unauthorized user
      -	Response status: 401

### 3.2.	Update an Activity (v1/activity/{ID}?token={AUTHORIZATION_TOKEN}), only expert users can access this API service.
Description: For an expert user update a training activity data in a respective skill in the system
Request method: PUT or PATCH 
Header: header authorization basic 

Request parameter:
  -	Body:
      -	skill
      -	title
      -	description
      -	startdate
      -	enddate
      -	participants 

Response result:
  -	If success, body:
      -	Message: update success
      -	Response status: 200
  -	If failed, body:
      -	Message: Data cannot be processed
      -	Response status: 422
  -	If unauthorized user access it, body:
      -	Message: Unauthorized user
      -	Response status: 401




### 3.3.	Delete an Activity (v1/activity/{ID}?token={AUTHORIZATION_TOKEN}), only expert users can access this API service.
Description: For an expert user delete a training activity data in a respective skill in the system
Request method: DELETE 
Header: header authorization basic 

Response result:
  -	If success, body:
      -	Message: update success
      -	Response status: 200
  -	If failed, body:
      -	Message: Data cannot be processed
      -	Response status: 422
  -	If unauthorized user access it, body:
      -	Message: Unauthorized user
      -	Response status: 401

### 3.4.	List of Activities (v1/activities/{skill_id}?token={AUTHORIZATION_TOKEN}), only logged users can access this API service.
Description: Return the list of activities for one skill ordered in ascending date for startdate with pagination and give sort function for each of field (ascending and descending);
Request method: GET
Header: header authorization basic

Response result:
  -	If success, body:
      -	Array of activities. Each activity contains:
      -	skill_id
      -	skill_name
      -	title
      -	description
      -	startdate
      -	enddate
      -	Array of participants:
          -	id
          -	name
          -	profile
          -	skill

Response status: 200
  -	If failed, body:
      -	Message: Data cannot be processed
      -	Response status: 422
  -	If unauthorized user access it, body:
      -	Message: Unauthorized user
      -	Response status: 401


4.	Skills
4.1.	List of skills (v1/skills?token={AUTHORIZATION_TOKEN}), only logged users can access this API service.
Description: Return the list of registered skills with activities registered in the database;
Request method: GET
Header: header authorization basic 
Response result:
  -	If success, body:
      -	Array of skills. Each skill contains:
          -	id
          -	skill_name

Response status: 200
  -	If unauthorized user access it, body:
      -	Message: Unauthorized user
      -	Response status: 401

## NOTES:
  -	Use NestJs / Express as the programming language
  -	Use MongoDB for database
  -	[key/item] with bracket [] is optional. Item with braces {} is mandatory.
  -	HTTP method tunneling via _method is allowed.
  -	The API needs to be implemented as specified, but you can add other fields.


## TESTING
You should use the JSON file “Sample_ServerSide.postman_collection.json” provided to test the API using POSTMAN Chrome Extension. Please see the description in each test for usage.
The system should handle input of data and responses should follow the above specification.


## DATABASE
Create and use a database, create at least the tables for users, profiles, skills and activities. Create a DUMP of your database and send it with the project.
