import React from 'react'
import { Inputedit } from './InputEdit'



export function Row({date, name, price, idx, handlerSetNewData}) {
    const onInputHandler = (data) => {
        handlerSetNewData({data, idx})
    }


    return (
        <>
            <tr>
                <td><Inputedit text={date} name={'date'} onInputHandler={onInputHandler} type="date"/></td>
                <td><Inputedit text={name} name={'name'} onInputHandler={onInputHandler} type="text"/></td>
                <td><Inputedit text={price} name={'price'} onInputHandler={onInputHandler} type="number"/></td>
            </tr>
        </>
    )
}
