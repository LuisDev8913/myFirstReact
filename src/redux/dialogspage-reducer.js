const ADD_DIAlOG = 'ADD-DIALOG';
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';

let initialdialogs ={
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
};
const  dialogsReducer =(state = initialdialogs,action)=>{
    if(action.type === ADD_DIAlOG){
        let NewDialogPost = {
            dialogPost: state.NewDialog,
            id: 5
        };
        state.DialogArr.push(NewDialogPost);
        state.NewDialog = '';
    }else if(action.type === UPDATE_DIALOG_TEXT){
        state.NewDialog = action.newText;
    }
    return state;
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

export default dialogsReducer;