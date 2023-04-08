import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IceCreamsView = () => {

    const noOfIceCreams = useSelector((state)=>state.icecream.noOfIceCreams)
    const disptach = useDispatch()
    const [value, setValue] = useState(0)

    const onChangeHandler = (event)=>{
         setValue(parseInt(event.target.value))
    }
    return (
        <div>
            <h2>Number of IceCreams - {noOfIceCreams}</h2>
            <button onClick={()=>disptach(ordered())}>Order IceCreams</button>
            <input type='number' value={value} onChange={onChangeHandler}/>
            <button onClick={()=>disptach(restocked(value))}>Restock IceCreams</button>
        </div>
    );
}

export default IceCreamsView;
