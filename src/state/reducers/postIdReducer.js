const reducer =(state=4,action)=>{

    if(action.type==='addpostid')
    {
        return state+1;
    }
    else{
        return state
    }
    
    }
    
    export default reducer;
    