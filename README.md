# CSV Uploader
In this backend app any user can upload any csv and view the information and search for any data on their csv file

![image](https://github.com/Argha-Majumder/CSV-uploader/assets/81928385/ed8c46eb-03a9-4c8a-9554-009fe2c1c29b)


## Technologies Used

1. NodeJS
2. Express
3. MongoDB
4. SCSS
5. Git


## Installation

Step-by-step process for installation:

1. First clone the repository using the command

```
git clone https://github.com/Argha-Majumder/CSV-uploader.git
```

2. The go to the directory where this file is located and install the required package using

```
npm install
```

3. Now start the server by opening a terminal and use this command

```
npm start
```

4. Then open any web browser and type 
https://localhost:8000


## Folder Structure

CSv-uploader
    
    |
    |----assets
    |       |-----css
    |       |-----js
    |       |-----scss
    |
    |----config
    |       |-----mongoose.js
    |
    |----controllers
    |       |-----csv_controller.js
    |       |-----home_controller.js
    |
    |----models
    |       |-----csv_data.js
    |
    |----routes
    |       |-----index.js
    |
    |----views
    |       |-----_csv.ejs
    |       |-----_header.ejs
    |       |-----csv_viewer.ejs
    |       |-----home.ejs
    |       |-----layout.ejs
    |
    |-----.gitignore
    |
    |-----index.js
    |
    |-----package-lock.json
    |
    |-----package.json
    |
    |-----README.md


## Hosting

For hosting, I use [render](https://render.com), where anyone can easily upload their full stack applications for free. See my app in action over [here](https://csv-uploader-rl08.onrender.com/)