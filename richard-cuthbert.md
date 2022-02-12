# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

---

- Probably on the to do list, but important nonetheless!

---

## UX

- [ ] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn’t cause an issue on sub-pages
- [x] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

---

- Great! Nice use of flex etc. It would be nice for all the tiles to be the same size though - you can fix the size of them and have the title of the tile be hidden when it oveflows.
- Cute little shadows!

---

## Functionality

### Login

- [x] Some indication of who is logged in (this can be hardcoded)

### Articles

- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes

---

- Really good functionality here! I can see you've prioritised the functionality here which I'm really impressed by.
- Order_by functionality not there, but I'm sure that's in the works :)

---

### Individual Article / Comments

- [x] Individual articles are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [ ] Can post new comments, which are persistent

---

- Not too difficult to put in, consider a reusable voter component maybe?

---

### Additional functionality:

- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

---

- As above, you've methodically worked through each point and it shows. All these things are stretch goals and can be implemented later.
- Maybe a reusable sort_by component...?

---

## Error Handling

- [ ] Bad url
- [ ] Bad topic slug in url
- [ ] Bad article id in url

---

- This serves a 500 error - something to sort out in your backend perhaps?

---

- [x] Post comment: (No text in comment body / Can you post without logging in?)

---

- This is the toughest bit of the sprint, IMO. You know what to do, this might involved going back and sorting some stuff in your backend.

---

## Code

- [x] Well named components
- [ ] Components reused where possible (`Articles` / `Voter`...)
- [ ] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [x] No `console.log`s / comments
- [ ] remove unnecessary files (e.g. App.test.js)

---

- Having 6 components for a project this big is not enough. You should have a component for each individual article tile on the homepage, a comment component etc.
- Every time there's something that appears more than once or is inside a `.map()`, it should be a reusable component. Also elements without anything between them e.g. `<Header></Header>` should be self closing - `<Header />`.
- `<ul>` should be OUTSIDE your map, `<li>` should appear INSIDE your map.
- Minimal object destructuring because your components are massive so you haven't needed to do it 😅 I'm assuming you know what to do when it's needed.
- Clean up the unneeded files please!

---

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes

---

- This is a really good project, Richard. Methodically approached and executed.
- Let's get some resuable components made please!
- The unmounted component error is because you have a useEffect waiting for `topic_slug` and `sort_by` to change, NOT a useEffect to load ON LOAD, so the component mounts without any articles, unmounts and then mounts with the getArticles function. If you want something to load on first render, you should have a useEffect with an empty array.

---
