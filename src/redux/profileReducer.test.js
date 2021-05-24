import profileReducer, { addPostActionCreater, deletePost } from "./profileReducer";
  // 1. source data
let state = {
  posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
  ]
}

test('length of posts should be incremented', () => {

  let action = addPostActionCreater("it-kamasutra.com")
  
  // 2.action
  let newState = profileReducer(state, action)

  // 3.expectation
  expect (newState.posts.length).toBe(5);

});


test(`after deleting length shouldn't be decrement if id is incorrect`, () => {

  let action = deletePost(1000)

  // 2.action
  let newState = profileReducer(state, action)

  // 3.expectation

  expect (newState.posts.length).toBe(4);
});
