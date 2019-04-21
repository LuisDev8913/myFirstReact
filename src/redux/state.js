const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIAlOG = 'ADD-DIALOG';
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';

let store ={
    _state: {
        profilepage:{
            PostArr: [
                {post: "My React. Very Cool", id: 1},
                {post: "I want", id: 2},
                {post: "Very cool look", id: 3}
            ],
            NewPostText:'it my text'
        },
        dialogspage:{
            messageData: [
                {id: 1, sms: 'Hi' },
                {id:2, sms:'I iron Man'}
            ],
            dialogsData: [
                {id: 1, name:'Andrey'},
                {id: 2, name:'Tony Stark'}
            ],
            DialogArr:[
                {dialogPost:'jj', id:1}
            ],
            NewDialog:'This my Text!Cool!'
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber (){

    },
    subscribe (observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let NewPost = {
                post: this._state.profilepage.NewPostText,
                id: 5
            };
            this._state.profilepage.PostArr.push(NewPost);
            this._state.profilepage.NewPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilepage.NewPostText = action.newText;
            this._callSubscriber(this._state);

        }else if(action.type === ADD_DIAlOG){
            let NewDialogPost = {
                post: this._state.dialogspage.NewDialog,
                id: 5
            };
            this._state.dialogspage.DialogArr.push(NewDialogPost);
            this._state.dialogspage.NewDialog = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_DIALOG_TEXT){
            this._state.dialogspage.NewDialog = action.newText;
            this._callSubscriber(this._state);
        }
    }
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
export const  AddDialog = ()=>{
    return{
        type: ADD_DIAlOG
    }
};
export const  UpdateDialogText  = (dialog)=>{
    return{
        type: UPDATE_DIALOG_TEXT , newText:dialog
    }
};

export default store;