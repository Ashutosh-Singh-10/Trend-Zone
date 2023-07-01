const reducer =(state=[

],action)=>{

if(action.type==='addPost')
{
    return state.concat(action.payload)
}
else if(action.type==='addLike')
{
    let s=state;

    s.forEach((item) =>{
        if(item.Id==action.payload)
        {
            if(item.liked==0)
            {
                item.liked=1;
            }
            else
            {
                item.liked=0;
            }
            return s;
            
        }
    })
    return s
}
else if(action.type=='delPost')
{
    let myState=[];
    state.forEach((item) =>{
        
        if(item.postId!=action.payload)
        {
            myState.push(item);
        }
    });
    return myState
}
else if(action.type=='editPost')
{
    state.forEach((item) =>{
        
        if(item.postId==action.payload.postId)
        {
            item.postTitle=action.payload.postTitle;
            item.postDesc=action.payload.postDesc;
            item.image  =action.payload.image;
        }
    });
    return state;
}
else
{
    return state;
}

}

export default reducer;
