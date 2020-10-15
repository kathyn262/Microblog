# Microblog

Microblog is a full stack anonymous microblog that allows users to create, read, edit, comment, delete, and vote on posts. Posts on the homepage are sorted by votes. 

I created the frontend of this application with React and Redux. 

Microblog is [live on Heroku](https://microblog-front.herokuapp.com/).

![Landing Page Screenshot](frontend/assets/landing-screenshot.png)
![Post Detail Screenshot](frontend/assets/post-detail-screenshot.png)

## Table Of Contents
- [Installation](https://github.com/kathyn262/Microblog#installation)
- [Technologies](https://github.com/kathyn262/Microblog#technologies)
- [Component Hierarchy](https://github.com/kathyn262/Microblog#component-hierarchy)
- [Future Implementation](https://github.com/kathyn262/Microblog#future-implementation)

## Installation 

Backend Setup: 

```
cd backend
npm install
node server.js
```

Frontend Setup: 
```
cd frontend
npm install 
npm start
```

## Technologies
- React
- Create-React-App
- Redux
- Redux Thunk
- Bootstrap
- Axios

## Component Hierarchy 
```
App
├─┬ containers/TitleList
│ └── components/Title
├─┬ containers/NewPost
│ └── components/PostForm
└─┬ containers/PostDetail
  └─┬ components/PostDetail
    ├─┬ components/CommentList
    │ └── components/Comment
    ├── components/CommentForm
    └── components/PostForm
  ```

  ## Future Implementation
  - Add auth to backend for signup/login functionality