# Time & Topic Picker

This project is a simple React web application that allows users to pick a random month and year between January 1965 and the current month in the current year, along with a random Trivial Pursuit topic. I did this to challenge myself to read up on a topic from that time period. Also to learn more about JS and React in general.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:7777](http://localhost:7777) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Nginx Configuration for Deployment

To serve this React application using Nginx, follow these steps:

1. Build the React application:

    ```bash
    npm run build
    ```

2. Update your Nginx configuration to serve the app at the `/time-topic` location:

    ```nginx
    server {
        listen 80;
        server_name your_domain_or_ip;

        location /time-topic {
            alias /path_to_your_react_app/build;
            try_files $uri $uri/ /time-topic/index.html;
        }

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

3. Ensure Nginx has the necessary permissions to access the `build` directory:

    ```bash
    sudo chown -R www-data:www-data /path_to_your_react_app/build
    sudo chmod -R 755 /path_to_your_react_app/build
    ```

4. Restart Nginx to apply the changes:

    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Additional Resources

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Troubleshooting `npm run build` failures](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

