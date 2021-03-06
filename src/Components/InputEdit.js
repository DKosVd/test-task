import React from 'react'

export function Inputedit({ text, name, onInputHandler, type }) {
    const [visible, setVisible] = React.useState(false);
    const [txt, setTxt] = React.useState(text)
    const refInput = React.createRef()


    React.useEffect(() => {
        refInput.current?.focus()
    }, [refInput])

    const handlerInput = (e) => {
        setTxt(e.target.value)
    }

    const onHandlerBlur = (e) => {
        onInputHandler({
            [e.target.name]: txt
        })
        setVisible(!visible)
    }

    const visibleHandler = () => {
        setVisible(!visible)
    }

    return (
        <>
            {visible ?
                <input
                    type={type}
                    ref={refInput}
                    name={name}
                    value={txt}
                    onInput={handlerInput}
                    onBlur={onHandlerBlur}
                    className="input_edit" 
                    required/> :
                <span onClick={visibleHandler}>{txt || 'добавить'}</span>}
        </>
    )
}
