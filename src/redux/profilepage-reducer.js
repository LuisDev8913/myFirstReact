const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialsProfile = {
    PostArr: [
        {post: "My React. Very Cool", id: 1},
        {post: "I want", id: 2},
        {post: "Very cool look", id: 3}
    ],
    NewPostText:'it my text'
};
const  profileReducer =(state = initialsProfile,action)=>{
    if(action.type === ADD_POST){
        let NewPost = {
            post: state.NewPostText,
            id: 5
        };
        state.PostArr.push(NewPost);
        state.NewPostText = '';
    }else if(action.type === UPDATE_NEW_POST_TEXT){
        state.NewPostText = action.newText;
    }
    return state;
};

export const  addPostActionCreator = ()=>{
    return{
        type: ADD_POST
    }
};
export const  updateNewPostActionCreator = (text)=>{
    return{
        type: UPDATE_NEW_POST_TEXT, newText:text
    }
};

export default profileReducer;