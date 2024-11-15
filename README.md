# Note Taker

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Application Screenshots](#application-screenshots)
- [GitHub Repository Location (HTTPS)](#github-repository-location)
- [Render Deployment Location (HTTPS)](#github-deployment-location-https)
- [Credits](#credits)
- [Contributions](#contributions)
- [License](#license)


## Description

-Greetings!

The **Note Taker** is a web-based application that can be employed to write and save notes. This application presents fields to the user which can be used to input a note title and text. Furthermore, the application utilizes an Express.js back-end to save and retrieve note data from a JSON file.


## Features

- **Add notes:** Allows user to create and save an unlimited number of notes. 
- **Save notes:** Data is sequentially stored locally.
- **View notes:** All saved notes can be easily viewed and accessed. 


## Technologies Used

- **Node.js:** Runtime environment for executing JavaScript server-side.
- **Express.js:** A Lightweight web application framework designed to efficiently build web and mobile based applications through Node.js.
- **UUID:** A 128-bit number that uniquely identifies information across multiple systems and platforms.
- **Nodemon:** A utility that aids in the development of Node.js applications by automatically restarting the entire application whenever changes are made to the files in the directory.  


## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Hammarou/Note-Taker.git
   ```

2. Navigate to the application directory:
   ```sh
   cd note-taker
   ```

3. Install the dependencies:
   ```sh
   npm run install:prod
   ```

## Usage

To start the application, use the command: 

```sh 
npm start
```

1. Click the `Get Started` button on the landing page to go to the notes page.

2. Type the title and content of your note.

3. To clear the note page of unsaved work, click the `Clear Form` button at the top right of the navigation bar. This will delete the unsaved note that you are currently working on. 

4. To save a note, click the `Save Note` button next to the `Clear Form` button.

5. All saved notes appear in the sidebar to the left of the page.

6. To delete a saved note, click the corresponding trash icon.


## Application Screenshots

![First screenshot](/public/assets/images/screenshot1.png)
![Second screenshot](/public/assets/images/screenshot2.png)


## GitHub Repository Location (HTTPS)

https://github.com/Hammarou/Note-Taker


# Render Deployment Location (HTTPS)

https://note-taker-v4x4.onrender.com


## Credits

N/A

## Contribution

Feel free to fork this application, submit issues, or make pull requests if you have suggestions or improvements. Contributions are welcome!


## License

This applicatiom is licensed under the [MIT](LICENSE) license.