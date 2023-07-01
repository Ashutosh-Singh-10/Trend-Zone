import React from 'react'
import '../assets/css/EditPost.css'
import { useSelector } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import { useState } from 'react';import Dropzone from 'react-dropzone'

import { Link, useNavigate } from 'react-router-dom';


export default function EditPost(props) {

  const dispatch=useDispatch();
  const {editPost}=bindActionCreators(actionCreators,dispatch);
  const post=useSelector(state=> state.post)

const postId=window.location.pathname.substring(10);

  const[postTitle,setPostTitle]=useState("")
  const[image,setImage]=useState(null)
  const[postDesc,setPostDesc]=useState("")
  const [isImage,setIsImage]=useState(0)


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

   }


       const onDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles[0])  {
          setImage(URL.createObjectURL(acceptedFiles[0]));
          
        }

      }

      const navigate = useNavigate();
      
  const savePost=(e)=>
  {
    if(!image)
    {
      setIsImage(1)
      console.log("image not found")
      return ;
    }
    else{
    editPost({
      postTitle:postTitle,
      postDesc:postDesc,
      image:image,
      postId:postId,    
  })  
  navigate('/');
    }

  }
  return (
    <div className="ed-cr"
        >

            <div className="hm-pp"
            style={{height:"500px",border:"1px solid black"}}
            >
        <br />
            <div className='hm-w90 pp-hd'>
                    <div  className='hm-f1'>
                        Edit your Post
                    </div>
   
            </div>
            <div className="hm-w90">
                Write something for your post
            </div>
            <br />
            <div className="hm-w90">
                Subject
            </div>
            
            
            <br />  
            <input type="text" 
            onChange={(e)=>{setPostTitle(e.target.value)}}
            placeholder='Enter title for your post'
            className='hm-w90 hm-pd-1'
            />
            <br />
            <div className="hm-w90">
               
                            <Dropzone onDrop={onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>

              <input  {...getInputProps()}
                onChange={onImageChange}
                />
              Drag and Drop to Upload 
            </div>
          )}
        </Dropzone>
        <br/>
        <input type="file" accept='.jpg, .png, .webp, .jpeg'
                onChange={onImageChange}
                />

        <div
        style={{display:isImage?"block":"none",color:"red"}}
>
  Please select a image 

</div>



 
            </div>
            <div className="hm-w90">
                <br /><br />
                <hr />
                <br />
                
            </div>
            <div className="hm-w90">
            What's   on your mind? 
            </div>
            <br />
                <input type="text " className='hm-w90 hm-pd-1' 
                 
                />



    <button 
     className='hm-bt-sv'
     onClick={(e)=>{savePost(e)}}
     >Save</button>

    
            </div>
            
        </div>



  )
}
