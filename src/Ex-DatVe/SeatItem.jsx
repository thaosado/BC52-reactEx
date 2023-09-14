import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {selectSeat} from "../redux/movieTicketSlice";
import cn from "classnames"
import styles from "./styles.module.scss"


export default function SeatItem({seats}) {
    const seatList = seats.danhSachGhe;
    const {disabled, selectedSeats, infor} = useSelector((state) => {
        return state.movieTickets
    })
    const dispatch = useDispatch()

    const handleCheckBox = (seat, isSelected) =>{
        if(selectedSeats.length+1 <= +infor.numberOfSeat || isSelected){
            dispatch(selectSeat({...seat, isSelected: !isSelected}))
        }
    }
    
  return (
    <div>
        {seatList.map((seat) => {
            const isSelected = selectedSeats.find((item) => item.soGhe === seat.soGhe)
            if(seats.hang && seat.soGhe){
                return (
                <td key={seat.soGhe}><input type="checkbox" 
                disabled={disabled.checkBox}
                value={seat.soGhe}
                onClick={()=>handleCheckBox(seat, !!isSelected)}
                className={cn(styles.checkBox, isSelected ? styles.smallBoxGreen : styles.boxEmpty)}
                 /></td>)
            }
            if(seat.soGhe === ""){
                return <td key={seat.soGhe}></td>
            }
            
            return <td key={seat.soGhe}>{seat.soGhe}</td> 
        })}
    </div>
  )
}
