import React from 'react'

export function Form({handlerAddNewData}) {
    const [state, setState] = React.useState({
        date: '',
        name: '',
        price: ''
    });
    const onInputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        handlerAddNewData(state)
        setState({
            date: '',
            name: '',
            price: ''
        })
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="input_elems">
                    <label htmlFor="date">Дата</label>
                    <input type="date" name="date" className="input_modal" id="date" value={state.date} onInput={onInputHandler} required/>
                </div>
                <div className="input_elems">
                    <label htmlFor="name">Инструмент</label>
                    <input type="text" name="name" className="input_modal" id="name" value={state.name} onInput={onInputHandler} required/>
                </div>
                <div className="input_elems">
                    <label htmlFor="price">Цена</label>
                    <input type="number" name="price" className="input_modal" id="price" value={state.price} onInput={onInputHandler} required/>
                </div>
                <div>
                    <button type="submit" className="btn btn-success">Добавить</button>
                </div>
            </form>
        </>
    )
}
