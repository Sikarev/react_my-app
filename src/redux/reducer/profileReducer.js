const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let state = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 15, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" },
    { id: 2, message: "This is my first post", likesCount: 7, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" },
    { id: 3, message: "React is cool", likesCount: 67, picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1" }
  ],

  newPostText:"lorem ipsum"
}

const profileReducer = (profileState = state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          id: 4,
          message: profileState.newPostText,
          likesCount: 0,
          picture: "http://sun9-36.userapi.com/s/v1/if1/_BF97CTzOHd98gIKmCzOgpm9y4LWSU9J5k2_OGI1T7sUdEyfFeoGWGWJgpW3N8TBL8V50Q.jpg?size=200x0&quality=96&crop=0,0,200,290&ava=1"
        };
        
        let stateCopy = {...profileState};
        stateCopy.postsData = [...profileState.postsData];

        stateCopy.postsData.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
}
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      let stateCopy = {...profileState};

      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    return profileState;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;