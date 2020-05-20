# git-repo-app
This is a react app that allows a user to login user using GitHub accoun, post login the user can fetch trending repositories on GitHub. The user can specify the search attributes to get the required list of trending repos. This app makes use of [Git Repo API](https://developer.github.com/v3/repos/) to fetch the trending repositories. It also uses [express](https://expressjs.com/) for server and [Passport](http://www.passportjs.org/) for authentication using GitHub

## App usage
To run the project on your local machine
> Clone the repo
```bash
git clone https://github.com/alekhranjan75/git-repo-app.git
```
>Install Server & Client npm dependencies after moving to the git-repo-app directory
```bash
cd git-repo-app
npm install
cd client
npm install
```

>Set-up [GitHub OAuth](https://auth0.com/docs/connections/social/github)

>Add the GitHub ClientId and ClientSecret to the 'devProps.js' file(inside config folder)

>To run the app(from app root directory)
```bash
npm run dev
```
## Visit app
You can visit the app [here](https://git-repo-app.herokuapp.com/)
