import React from 'react'
import '../assets/css/BoardItem.css'
import { Link } from 'react-router-dom'
export default function Board(props) {
  return (
    <Link to={`board/${props.data.id}`} className='hm-pb' key={props.data.id}>
    <div className='hm-pbf' 
    style={{backgroundColor:props.data.boardColor}}>
    </div>
    <div className='hm-pbs'>
  <div >
    {props.data.boardName}
    </div>
    </div>
    </Link>  )
}
