# yerkenizlefullizle9.com

[Deployed project link](https://main.d9k5wnto5btwe.amplifyapp.com/)

# Notes



## API url

https://developers.themoviedb.org/3/getting-started/introduction

## Grouping by file type

https://reactjs.org/docs/faq-structure.html#grouping-by-file-type

```
api/
  APIUtils.js
  APIUtils.test.js
  ProfileAPI.js
  UserAPI.js
components/
  Avatar.js
  Avatar.css
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
```

https://www.robinwieruch.de/react-folder-structure/

## Redux with TypeScript

https://redux.js.org/usage/usage-with-typescript

https://redux-toolkit.js.org/api/createslice

## React Router

https://www.pluralsight.com/guides/using-react-router-with-redux

https://reactrouter.com/en/main/hooks/use-navigate

TRY this one with redux next time [Connected React Router](https://github.com/supasate/connected-react-router)

```
import { useNavigate, redirect, useLocation } from 'react-router-dom';
```
# handle TS later

Mixed Content: The page at URL was loaded over HTTPS, but requested an insecure resource URL.

This request has been blocked; the content must be served over HTTPS

Fixed by changing HTML
```
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

FIND BETTER PLACE FOR QUERY PARAMS and Scroll to top



