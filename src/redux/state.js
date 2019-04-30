import dialogsReducer from "./dialogspage-reducer";
import profileReducer from "./profilepage-reducer";


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
        this._state.dialogspage = dialogsReducer(this._state.dialogspage, action);
        this._state.profilepage = profileReducer(this._state.profilepage,action);
        this._callSubscriber(this._state);
    }
};



export default store;