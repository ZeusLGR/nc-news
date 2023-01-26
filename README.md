# NC News - React Web App

## Link to deployed version

https://nc-news-23.netlify.app/

(When first loading the app you may find there is a bit of loading time required to access the api. This is because the api is currently hosted with a free service)

Node.js "v19.0.0" is required to run this repo locally.
--

## Project summary:

NC News is a social news aggregation, content rating, and discussion app. 

It draws stored data via the NC News API to present the user with a number of written articles, along with their associated comments and vote count. 
(Read more about the NC News API here: https://github.com/ZeusLGR/news-api-be-project)

Every article has a specific topic which ranges between cooking, coding or football. 

Using the navigation buttons a user can choose to view all articles or specify which topic they would like to view articles for.

The home page displays the top voted article for each topic.

There are also additional options to sort articles by a number of fields and/or view them in either descending or ascening order.

A user is able to click on an article title which will render a more detailed page for that particular article. 

Here a user can like or dislike this article by clicking the respective arrow buttons, or post a new comment to the comment list section. 

By default, the user is signed in as "grumpy19" so any new comment posted will appear at the top of the list under this user name. 

The signed in user is able to delete any comment currently stored under their name. Therefore, you will see a "delete" button next to every comment posted by the "grumpy19" user. 


## Clone this repo:

- Copy the URL of this repo: https://github.com/ZeusLGR/nc-news.git

- Open your command line and create a new directory for where you wish to hold your repo clone.

- Make sure you cd into your new directory then use the _'git clone'_ command followed by the URL to clone this repo into your directory.

## Install dependencies:

You will need to use the _'npm install'_ command at this point to install the dependencies in the `package.json` file.

