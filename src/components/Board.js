import React from 'react'
import Post from "./Post"
import { useSelector } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import "../assets/css/board.css"
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import Logo from './Logo';



export default function Board() {

    const bId= window.location.pathname.substring(7);
    
    const post=useSelector(state=> state.post)
    const postId=useSelector(state=> state.postId)



    const dispatch=useDispatch();
    const {addPost}=bindActionCreators(actionCreators,dispatch);
    const {addpostid}=bindActionCreators(actionCreators,dispatch);

    const[postTitle,setPostTitle]=useState("")
    const[postDesc,setPostDesc]=useState("")
    const[image,setImage]=useState(null)
    const[toogle,setToogle]=useState(0)
    const [isImage,setIsImage]=useState(0)

    

    const savePost=()=>{
      if(!image)
      {
        setIsImage(1)
        console.log("image not found")
        return ;
      }
        addPost({
            Id:Number(bId),
            postTitle:postTitle,
            postDesc:postDesc,
            image:image,
            postId:postId,
            like:0,
            
            
        })  
        addpostid();
        setToogle(0); 
    }




    const mypost = [];
    post.forEach((item) =>{
        
        if(item.Id.toString()===bId)
        {
            mypost.push(item);
        }
    });

    
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


  return (

    < div 
    style={{position:"absolute" ,top:"0px" ,width:"100%",
    


}}
    >
        <div className="navbar"
        style={{
            height:"55px",
            backgroundColor:"white",
            border:"none",
            boxShadow:"0px 4px  40px rgb(0 0 0/0.2)",
          position:"fixed",
          width:"100%"
            
            

        
        
        }}
        >

      <Link  to="/" className="logo hf-cn">
        <Logo/>
     
      </Link>
    
    </div>
    
    <div className="content"
    style={{display:mypost.length===0?"block":"none"}}
    
    >
      <h2 className="heading">Your Posts</h2>
<br /><br /><br /><br />
      <div className="add-something-icon">
      <img src={require("../assets/img/noPost.jpeg")} alt=''/> 
      </div>
      <p className="no-posts-text">Nothing here yet. Create your first post by clicking the + button.</p>
    </div>


<div className='ps-cn'
    style={{display:mypost.length===0?"none":"flex"}}>
      {mypost.map((element,id) => {
                return (
                     
   <Post data={element} i={id} key={id} className="bd-pst"/>       
                        );
                    })}

                    

</div>
<button
className='cr-btn'
onClick={(e)=>{setToogle(1)}}


> + Create New Post </button>
<button
className='cr-btn2'
onClick={(e)=>{setToogle(1)}}


> +  </button>










<div className="hm-cr"
        style={{display:toogle===1?"flex":"none",    }}
        >

            <div className="hm-pp"
            style={{height:"500px"}}
            >
        <br />
            <div className='hm-w90 pp-hd'>
                    <div  className='hm-f1'>
                        Create a Post
                    </div>
                    <button 
                    onClick={(e)=>{
                      setToogle(0);
                      setIsImage(0);
                    }}
                      className='hm-bt-cl'>

                        X
                    </button>
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
              <input {...getInputProps()} 
                onChange={onImageChange}
              />
              Drag and Drop to Upload 
          </div>

          )}
        </Dropzone>



        </div>
        <div className="hm-w90">


<br />
<input type="file" accept='.jpg, .jpeg, .png, .webp'
  onChange={onImageChange}
  />

<div 
style={{display:isImage?"block":"none",color:"red"}}
>
  Please select a image 

</div>





              
   
            </div>
            <div className="hm-w90">
                <br />
                <hr />
                <br />

            </div>
            <div className="hm-w90">
            What's   on your mind? 
            </div>
            <br />
                <input type="text " className='hm-w90 hm-pd-1' 
                   onChange={(e)=>{setPostDesc(e.target.value)}}
                />


    <button 
    onClickCapture={savePost}
     className='hm-bt-sv'>Save</button>
    
            </div>
            
        </div>





    </div>
  )
}
