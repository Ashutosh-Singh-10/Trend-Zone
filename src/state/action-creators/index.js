export const addboard=(board)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload:board
        })
    }
}
export const tooglePop=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"toog",
            payload:val
        })
    }
}
export const addPost=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"addPost",
            payload:val
        })
    }
}
export const delPost=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"delPost",
            payload:val
        })
    }
}
export const editPost=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"editPost",
            payload:val
        })
    }
}
export const addLike=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"addLike",
            payload:val
        })
    }
}
export const addid=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"addboardid",
            payload:val
        })
    }
}
export const addpostid=(val)=>{
    return (dispatch)=>{
        dispatch({
            type:"addpostid",
            payload:val
        })
    }
}