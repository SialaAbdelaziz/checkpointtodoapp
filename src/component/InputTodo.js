
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from "../redux/actions";
import { ADD_TASK } from '../redux/actionTypes';

const InputTodo = () => {
    const [text, setText] = useState("");
    const handelChange =(e) => setText (e.target.value);
    const dispatch = useDispatch();
    const handelSubmit = (e) => {
        e.preventDefault();
        text 
        ? useDispatch(ADD_TASK{id: Math.random, task: text, isDone:false})
        : alert("Insert Task")
    }
    return (
        <div>
            <form>
                <input 
                placeholder="What to do?"
                value={text}
                onChange={handelChange} 
                ></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default InputTodo
