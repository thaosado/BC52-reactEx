import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectSeat } from "../redux/movieTicketSlice";
import { css } from '@emotion/css';


export default function SeatItem({ seats }) {
    const seatList = seats.danhSachGhe;
    const { disabled, selectedSeats, infor } = useSelector((state) => {
        return state.movieTickets
    })
    const dispatch = useDispatch()

    const handleCheckBox = (seat, isSelected) => {
        if (selectedSeats.length + 1 <= +infor.numberOfSeat || isSelected) {
            dispatch(selectSeat({ ...seat, isSelected: !isSelected }))
        }
    }


    return (
        <div>
            {seatList.map((seat) => {
                const isSelected = selectedSeats.find((item) => item.soGhe === seat.soGhe)
                if (seats.hang && seat.soGhe) {
                    let color = "white";
                    if (isSelected) {
                        color = "green"
                    }
                    if (seat.daDat) {
                        color = "red"
                    }
                    return (
                        <td key={seat.soGhe}><input type="checkbox"
                            disabled={disabled.checkBox}
                            value={seat.soGhe}
                            onClick={() => handleCheckBox(seat, !!isSelected)}
                            className={css`
                                    &::before{
                                        position: absolute;
                                        top: -7px;
                                        content: "";
                                        width: 30px;
                                        height: 25px;
                                        border: 3px solid #ff9800;
                                        display: inline-block;
                                        border-radius: 5px;
                                        background-color: ${color};
                                        box-shadow: inset 0px 2px 3px 0px rgba(0, 0, 0, .3), 0px 1px 0px 0px rgba(255, 255, 255, .8);
                                    }
                                    
                `}
                        /></td>)
                }
                if (seat.soGhe === "") {
                    return <td key={seat.soGhe}></td>
                }

                return <td key={seat.soGhe}>{seat.soGhe}</td>
            })}
        </div>
    )
}
