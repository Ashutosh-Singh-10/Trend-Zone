import React from 'react'
import '../assets/css/Home.css'
import Board from './BoardItem'
import { useSelector } from 'react-redux'
import {actionCreators} from '../state/index'
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import { useState } from 'react';

export default function Home() {
    const myBoard=useSelector(state=> state.board)
    const boardId=useSelector(state=> state.boardId)
    const popState=useSelector(state=> state.popState)
    const searchId=window.location.pathname.substring(8);
    const [board,setBoard]=useState([]);
    myBoard.forEach((item) =>{
        
        if(item.boardName==searchId)
        {
            board.push(item);
        }
    });



        
    const [boardName, setBoardName]=useState("")
    const [boardColor, setBoardColor]=useState("#FFCC66")   
    const colors=["#FFCC66","#FFAEC0","#C5C5FC","#A7F0F9"]
    

    const dispatch=useDispatch();
    const {tooglePop}=bindActionCreators(actionCreators,dispatch);
    const {addboard}=bindActionCreators(actionCreators,dispatch);
    const {addid}=bindActionCreators(actionCreators,dispatch);





    const {}=bindActionCreators(actionCreators,dispatch);
    const saveBoard=()=>{
        addboard({boardName
            ,boardColor,
             "id":boardId,
            
        })
        tooglePop()
        addid();
    }
    
  return (
      <div className="page">
        <br />
    <h1>My Boards</h1>
        <br />
        <div className="hm-bx">
        <div className='hm-mb'>
    {board.map((element,id) => {
                return (
                     
   <Board data={element} i={id} key={id}/>
                        );
                    })}
</div>


    </div>


        <div className="hm-cr"
        style={{display:popState===1?"flex":"none"}}
        >

            <div className="hm-pp">
        <br />
            <div className='hm-w90 pp-hd'>
                    <div  className='hm-f1'>
                        Add a name for your board
                    </div>
                    <button onClick={tooglePop}  className='hm-bt-cl'>
                        X
                    </button>
            </div>
            <br />
            <input type="text" onChange={(e)=>{setBoardName(e.target.value)}}
            placeholder='Places around the world'
            className='hm-w90 hm-pd-1'
            />
            <br />
            <div className='hm-w90 hm-f1'
            >Select post colour</div>

            <div
            className='hm-w90 hm-f2'
            >Here are some templates to help you get started</div>


    <div className='hm-sl hm-w90 hm-cls'>
        <div
        style={{
        border:boardColor===colors[0]?"2px solid black":"none",
        background:colors[0]
        }}
        onClick={(e)=>{setBoardColor(colors[0])}}
        className='hm-cir'
        >  </div>
        <div
        style={{
            border:boardColor===colors[1]?"2px solid black":"none",
            background:colors[1]        
        }}
        className='hm-cir'
        onClick={(e)=>{setBoardColor(colors[1])}}
        > </div>
        <div
        style={{
            border:boardColor===colors[2]?"2px solid black":"none",
            background:colors[2]
                }}
        className='hm-cir'  
        onClick={(e)=>{setBoardColor(colors[2])}}
        > </div>
        <div
        style={{
            border:boardColor===colors[3]?"2px solid black":"none",
            background:colors[3]
                }}
        className='hm-cir'  
        onClick={(e)=>{setBoardColor(colors[3])}}
        > </div>



    </div>
    <br /><br /><br />
    <button onClickCapture={saveBoard} className='hm-bt-sv'>Create Board</button>
    
            </div>
            
        </div>
</div>
  )
}
