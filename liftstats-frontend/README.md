

LiftStats 

------

CONTAINER: Welcome
Route: '/'

-Displays login and logout button

-Clicking either button will display a form
  -form will be for login or signup and will include a cancel or x button that will return to displaying both buttons 
  -both of these forms are components with state


---------------
CONTAINER: Dashboard 
route '/dashboard'

PR1 = Highest Weight for a given number of reps
PR2 = Highest weight Regardless of reps
PR3 = Highest number of reps regardelss of weight 

-view stats dashboard button - link to another container new route 
-log workout button 

potential ideas for components:
    -most recent PRs (Personal Records ) (stateless component, just displays props)
    -recent sets logged feed (stateless component)




---------------
Rails API backend plan


user - email, pw_digest, display_name (maybe at OAuth authentication later)
set - workout_type(name), weight, reps, date_code

user has_many sets
set belongs_to user

there will be a lot of activerecord work. 
I want to make sure the app is fast and I remember that activerecord can query a database very fast


-----------------------
CONTAINER: Stats_Dashboard 
route 'stats_dashboard'

ideas for components:

    -select a workout_type from a dropdown - display all 3 PRs for that workout_type 
    -list of recents sets that broke a pr
    -select a workout_type, time_period, number_of_reps - display a graph x: time_period, y: weight for that given number of reps 
    -display a feed of all 3 prs for all workout_types 
    


--------------------




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
