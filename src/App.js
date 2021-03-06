import React from 'react';
import './App.css'
import { Modal } from './Components/Modal';
import { Row } from './Components/Row';
import { Form } from './Components/Form';
import { addNew, addPart } from './store/actions/actions';
import { reducer } from './store/reducer/reducer';
import { initialState } from './store/reducer/state';
import { Chart } from './Components/Chart'

function App() {
  const [show, setShow] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, initialState);
  window.state = state;
  
  const handlerSetNewData = (data) => {
    dispatch(addPart(data))
  }

  const handlerAddNewData = (data) => {
    dispatch(addNew(data))
  }


  const onCloseHandler = () => {
    setShow(false)
  }

  const onShow = () => {
    setShow(true)
  }



  return (
    <div className="container">
      <div className="table shadow">
        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Инструмент</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {state.items.map((elem, idx) => <Row key={`${elem.name}__${elem.date}__${idx}`} {...elem} idx={idx} handlerSetNewData={handlerSetNewData} />)}
          </tbody>
        </table>
        <div className="add">
          <button className="btn btn-primary plus" type="button"  onClick={onShow}>+</button>
        </div>
        <Modal onClose={onCloseHandler} show={show}>
          <div className="add_new">
            <Form handlerAddNewData={handlerAddNewData} />
          </div>
        </Modal>
      </div>
      <div className="chart shadow">
        <Chart items={state.items}/>
      </div>
    </div>
  );
}

export default App;
