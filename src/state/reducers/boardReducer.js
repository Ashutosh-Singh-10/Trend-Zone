
const reducer =(state=[
    {boardName:"Food",boardColor:"#FFAEC0",id:1},
    {boardName:"Nature",boardColor:"#C5C5FC",id:2},
    {boardName:"Sports",boardColor:"#A7F0F9",id:3}
],action)=>{

if(action.type==='add')
{
    return state.concat(action.payload)
}
else
{
    return state
}

}

export default reducer;
