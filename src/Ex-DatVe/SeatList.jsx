import React, { useState } from 'react'
import SeatItem from './SeatItem';
import styles from "./styles.module.scss";
import cn from "classnames"
import { useDispatch, useSelector } from 'react-redux';
import Ticket from './Ticket';
import {startSelect} from "../redux/movieTicketSlice"

export default function SeatList({ data }) {
    const [isConfirm, setIsConfirm] = useState(false)
    const { disabled, selectedSeats, infor } = useSelector((state) => {
        return state.movieTickets
    })
    const dispatch = useDispatch();

    const handleConfirmSelection = () => {
        if(selectedSeats.length === 0 || selectedSeats.length < infor.numberOfSeat){
            return alert ("Please Select your Seats NOW!")
        }
        setIsConfirm(true);
        dispatch(startSelect({formInfor: true, checkBox: true}));
    }

    return (
        <div>
            <div className={styles.screen}>
                <h4>SCREEN THIS WAY</h4>
            </div>
            <h6 className={cn(styles.select, { 'd-none': !disabled.formInfor })}>Please Select your Seats NOW!</h6>
            <table className='text-center'>
                <tbody>
                    {data.map((seats) => {
                        return (
                            <tr key={seats.hang}>
                                <td>{seats.hang}</td>
                                <td><SeatItem seats={seats} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h6 className={cn(styles.review, { 'd-none': !disabled.formInfor })}>Review : {selectedSeats.map((seat) => {
                if (selectedSeats[0] === seat) {
                    return (seat.soGhe)
                }
                return ("," + seat.soGhe)
            })} </h6>

            <button className='btn btn-light my-3'
                disabled={disabled.checkBox}
                onClick={handleConfirmSelection}>Confirm Selection</button>

            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Number Of Seats</th>
                            <th scope="col">Seats</th>
                        </tr>
                    </thead>
                    <tbody className={cn({'d-none' : !isConfirm})}>
                        <Ticket />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
