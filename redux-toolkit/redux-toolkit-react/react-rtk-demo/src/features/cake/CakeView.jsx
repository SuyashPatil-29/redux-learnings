import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
    const noOfCakes = useSelector((state)=>state.cake.noOfCake)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)

    const onChangeHandler = (event)=>{
        setValue(parseInt(event.target.value))
    }
    return (
        <div>
            <h2>Number of cakes - {noOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Cake</button>
            <input type="number" value={value} onChange={onChangeHandler}/>
            <button onClick={()=>dispatch(restocked(value))}>Restock Cake</button>
        </div>
    );
}

export default CakeView;
