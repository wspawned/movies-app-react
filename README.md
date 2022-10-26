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

you cannot call async functions inside your JSX. --- In general you load data in a useEffect callback with an empty dependency array. You'll also need let name = await getNameOfPerson(); because getNameOfPerson is async. Without await you'll get the unresolved Promise.


