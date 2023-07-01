import React from 'react'
import "../assets/css/post.css"
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Post(props) {
  const dispatch=useDispatch();
  const {addLike}=bindActionCreators(actionCreators,dispatch);
  const {delPost}=bindActionCreators(actionCreators,dispatch);
  const [likeState,setLikeState]=useState(props.data.liked);


  return (  
    <div className="card">
    <div className="card-header">
      <h2 className="card-title">
        {props.data.postTitle}
      </h2>
        <div className="options-menu">
        </div>
    </div>
    <img src={props.data.image} alt="Card Image" className="card-image"/>
    <div className="card-content">

 <p>{props.data.postDesc  }</p>
    <hr />
    <div
    style={{display:"flex",padding:"10px 9px",alignItems:"center"}}
    >            <i className="fa fa-heart"  style={{

      color:props.data.liked==0?"red":"black",
      cursor:"pointer"
      }} onClick={(e)=>{addLike(props.data.Id);
      setLikeState(!likeState)}}></i>
            <button onClick={(e)=>{delPost(props.data.postId)}}

            className='dl-btn-2'
            >
              
              Delete</button>
              <Link to={`/editpost/${props.data.postId}`}>
            <button 

            className='ed-btn-2'

            >
              
              Edit</button>
              </Link>

</div>
    </div>
   </div>
  )
}
