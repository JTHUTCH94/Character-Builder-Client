# Character-Builder-Client

# Character-Builder-Client

Welcome to the RPG Character Builder Version 1. This is a simple character customization app that allows you to build a custom hero from a set of pre-established choices. Design your hero by choosing their race, their class, and their weapon choice, as well as a name of your choosing. Save your creation to a database of heroes, and view your creations at any time. You have the power to both edit your heroes and erase them from existence all together. Begin your creation process here: https://rpg-character-builder.netlify.com.

Screenshots:

![image](https://user-images.githubusercontent.com/34722406/39642305-56043420-4f9f-11e8-81cc-7496cefa70b5.png "The app's landing page")

![image](https://user-images.githubusercontent.com/34722406/39636852-68da2a42-4f8f-11e8-946a-474a19259c83.png "The app's create character form")

![image](https://user-images.githubusercontent.com/34722406/39636856-6e45dc4c-4f8f-11e8-958b-1dc30070c594.png "The app's character list")

![image](https://user-images.githubusercontent.com/34722406/39636866-74ff22dc-4f8f-11e8-8e0b-e76b7a93ab54.png "The app's update character form")

Tech-Stack:

The client side of the app is built using React and Redux. It consists of mutiple components designed to handle and dispatch multiple different actions essential to the operation of the application. The components consist of disfferent groupings; Inputs, Displays, Forms, & Decorations (not all of which are used). The inputs include anything that is required for the direct manipulation of the data in the application. The forms are structured forms for the creation of the characters. The displays are simply the components designed to show the created/updated characters. The decorations are just decorations. CSS rulesets are used to style the application, and media queries are set to handle cross platform use of the application.

The server side of the application is built using JavaScript, Mongoose, Chai, and Express. It uses an mLab instance to manage the application's data, which is accessed and manipulated through the use of a simple API. It is styled after the CRUD method of developing API's. 

Application Status:
- This is the first version of the RPG Character Builder application. 
- Future updates will include more styling and additional features 
  * Including but not limited to:
    - User creation/login
    - Search functionality
    - Character images
    
Source:
The source code for this application can be found at:
  - Client side: 
    https://github.com/JTHUTCH94/Character-Builder-Client
  - Server side:
    https://github.com/JTHUTCH94/Character-Builder-Server
