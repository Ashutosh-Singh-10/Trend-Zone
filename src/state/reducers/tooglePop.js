const reducer =(state=0,action)=>{

    if(action.type==="toog")
    {
    if(state==1)
    {
        return state-1;
    }
    else
    {
        return state+1;
    }}
    else
    {
        return state;
    }



}

export default reducer;
