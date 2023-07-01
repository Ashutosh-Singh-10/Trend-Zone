const reducer =(state=4,action)=>{

if(action.type==='addboardid')
{
    return state+1;
}
else
{
    return state
}

}

export default reducer;
