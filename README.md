# return_journey_round_1


This project implements an internal API to query the status of a user's card based on the card ID.

## Table of Contents

- [Getting Started](#getting-started)

- [File Structure](#file-structure)

- [Setup](#setup)

- [Design and Architectural decisions ](#design)

- [JavaScript Tasks](#javacript-tasks)



## Getting Started

### File Structure

  ```
src
|
|-- app.ts
|
|-- config
|   |
|   |-- logger.ts
|   |-- utils.js
|
|-- controllers
|    |
|    |-- productsControllers.ts
|
|-- middlewares
|    |   
|    |-- fileLoggerMiddleware.ts
|
|-- routes
|    |
|    |-- index.ts
|    |--products.ts
|
|-- services
|    |
|    |--fileLoggerService.ts
|
|-- tests
|    |
|    |--productsController.test.ts
|
|
|-- types
|    |
|    |--product.ts
|
|-- utils
|    |
|    |--testUtils.ts
  ```

### Setup

1. install dependencies:

   ```bash
   npm i 
   ```
2. Run nodemon server:
    ```
    npm run server
    ```
3. Run tests:
    ```
    npm test
    ```


### Design
  1. Logger
  ```    
      I have tried created a generic logger in "config/logger.ts" that lets you lets you log into a file. It can be used through "fileLoggerService" which provides a function createFileLogger.
```
  2. Middleware
```
      "fileLoggerMiddleware.ts" that uses fileLoggerService to create a loggger for logging all info about every request.
```
  3. Routes
```
      I've created a express router in "routes/index.ts" where every api call get's routed and then from index.ts we can route it to respective routes, like i've with the 'api/products/' routes.

      This structure makes it easy to add new routes and expanding the app
```
  4. Controllers
```
      Includes all the respective controllers for productRoutes
```
  5.types
```
      A type declaration for the in-memory product array
```
  6. Utils
```
      It's always good to use utils functions and having usefull functions in utils, that can be reused throughout the app
```
  7. tests
     
```
      The test first hit the POST reuqest to create a number of new products. Then it tests the specific GET requests by trying to read a random of three new created products, and then tries to GET an invalid product.
```

### JavaScript Tasks

    The tasks 1,2 and 3 have been solved and included in the files task1,task2 and task3 respectively
