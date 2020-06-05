# EDD_Progress_Tracker
A simple MERN app which allows the user to log the result of their calls to the EDD Customer Support Service Center

### Design Notes
This application is basically a logger. It will accept keyboard input from the user, and incriment an appropiate collection field according to that input. for example:

>	When the user hits the '1' key, the app will query the database and increase the "automated response" field by one.

The application will then produce a formatted report summarizing the user's attempts for that day. 

NOTE: the other option is that everyt time the user presses one of the input keys, the application adds a new entry in the correct column, including a timestamp for when that datapoint was entered. This, however, would be best achieved using MySQL instead of MongoDB

### SCHEMA

Keeping in theme with the current boilerplate setup of 'notes' being tied to users via collection association, this application will use a similar structure. Instead of notes, the user will be able to create new entries for each new 'day' they are attempting to contact edd. Each 'day' obejct will have several fields:

- Successfully contacted agent
- Navigated Submenus (Disconnected due to too many people in queue)
- Disconnected due to high call volumes
- Dead Air
- Feedback Loop
- Busy Signal

Each of these fields can be incrimented by either clicking buttons or pressing the correct input keys

Once the user is done for the day, they can request a formatted html table which will break down the call results by percentages

====================================================================================================
