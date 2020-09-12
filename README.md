# SpaceX App

This is a sample React-App With custom  SSR implemented.
Hosted on [https://nameless-lake-22725.herokuapp.com/](https://nameless-lake-22725.herokuapp.com/)

## Features 

### REACT SSR(server side rendering)
    Server-side rendering (SSR) is when content on your webpage is rendered on the server and not on your browser using JavaScript
    Hence, the first load of the application is much faster than Client side rendering.
    
    Express framework is used along side of ReactDOMServer to implement the same.

### RESPONSIVE
    This application has adaptive layout to various screen sizes(Pc, Tablet, Mobile phone).
    React-bootstrap is integrated with this application to make it responsive using Components
    like Container, Row, Columns, Card UI etc.

### WEBPACK and BABEL CONFIGURED
    Webpack is a very famous module bundler.
    This application is configured with different configurations for server and client.
    webpack version 4 is used in this application

    Babel is a open-source JavaScript transcompiler that is mainly used to convert
    ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be 
    run by older JavaScript engines.

    Features like
        * **Arrow fuctions
        * **optional chaining
        * **null coalescing etc
    and other latest features of JS is used in this Application, which is converted by
    babel to the Conventional javascript code.


### IMAGE LAZY LOADING
    The rendering is not being blocked by the image loading process.
    NOTE : Supported in Chrome 76+


##  STEPS TO RUN ON LOCAL MACHINE 
    You can run this application on your local Environment by Following these steps : 
    
    Clone code using Command :

    ```
        git clone https://github.com/akshaybmsa96/spaceX-app.git
    ```

    Then navigate to the Directory and run the Following Commands:

    ```
        npm install
    ```
    ```
        npm run build
    ```
    ```
        npm run start
    ```

    Naviagte to localhost:8000 in your browser.
    
## LIGHTHOUSE REPORT 
    Application performs good at various parameters on Lighthouse Tool.

    ![Alt Text](https://user-images.githubusercontent.com/18141199/93003082-511d7180-f559-11ea-8793-d25c267089df.png)



## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
This app is ready to be deployed!

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## AUTHOR

* **Akshay Sharma**
   
