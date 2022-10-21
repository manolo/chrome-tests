

### Running this project

- Install dependencies
```
npm i
```

- Open a terminal start server
```
node server.js
```

- Open UI in browser
  - Visit http://localhost:8080
  - Close the app
  - See server logs

- Open browser in commandline
  - Run this command
  ```
  ## For mac
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" 'http://localhost:8080'
  ## For linux
  google-chrome 'http://localhost:8080'
  ```
  - Close the app
  - See server logs

- Open browser in commandline
  - Run this command
  ```
  ## For mac
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless 'http://localhost:8080'
  ## For linux
  google-chrome --headless 'http://localhost:8080'
  ```
  - See server logs

- Run Visual tests using chromedriver (playwright)
  - Run `node test.js`
  - See server logs

- Run Visual tests in headless mode
  - Run `node test.js --headless`
  - See server logs
