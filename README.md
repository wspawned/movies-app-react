# yerkenizlefullizle9.com

[Deployed project link](https://main.d9k5wnto5btwe.amplifyapp.com/)

![image](https://user-images.githubusercontent.com/80424496/206066608-34f0625d-a969-4127-8222-8a0d557d8ef9.png)

![image](https://user-images.githubusercontent.com/80424496/206067369-90582497-35ad-422c-9ddc-fbafb56b6d63.png)



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
# Notes

Mixed Content: The page at URL was loaded over HTTPS, but requested an insecure resource URL.This request has been blocked; the content must be served over HTTPS

Mixed Content is fixed by changing HTML
```
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

async Thunk gets parameters as destructuring

```
dispatch(getGenreMovies( {genreId, paramsPage} ))
```
```
export const getGenreMovies = createAsyncThunk(
  "genreMovies/get",
  async ({genreId, paramsPage}) => {
  // API call
  }
);
```

add trailer for Movies

names upperCase maybe
