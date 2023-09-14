import React from 'react'
import cn from "classnames"
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { startSelect, changeInfor } from '../redux/movieTicketSlice';


export default function RequiredDetails() {
  const {infor, disabled} = useSelector((state)=>{
    return state.movieTickets
  })
  
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeInfor({...infor, [evt.target.name]: evt.target.value}))
  }
  const handleStartSelecting = (value1, value2) => {
    if(!value1 || !value2){
      return alert("Please Enter your Name and Number of Seats")
    }
    dispatch(startSelect({formInfor: true, checkBox: false}))
  }

  
  return (
    <div className='text-start'>
        <h6 className='mb-5' style={{color: '#ff9800'}}>Fill The Required Details Below And Select Your Seats</h6>
        <label>Name<span className='text-danger'> *</span></label>
        <input disabled={disabled.formInfor}
         type="text" className='ms-1'
        name='name'
        value={infor.name}
        onChange={handleChange} />

        <label className='ms-3'>Number of Seats<span className='text-danger'> * </span></label>
        <input disabled={disabled.formInfor}
        type="number" className='ms-1' style={{width: "100px"}}
        name='numberOfSeat'
        value={infor.numberOfSeat}
        onChange={handleChange} />

        <button className='mt-5 btn btn-light' 
        disabled={disabled.formInfor}
        onClick={()=>handleStartSelecting(infor.name, infor.numberOfSeat)}>Start Selecting</button>

        <div>
            <ul>
                <li className={cn('me-5', styles.smallBox, styles.smallBoxGreen)}>Selected Seat</li>
                <li className={cn('me-5', styles.smallBox, styles.smallBoxRed)}>Reserved Seat</li>
                <li className={cn('me-5', styles.smallBox, styles.smallBoxEmpty)}>Empty Seat</li>
            </ul>
        </div>
    </div>
  )
}
