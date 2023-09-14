import React from 'react'
import { useSelector } from 'react-redux'

export default function Ticket() {
  const { infor, selectedSeats } = useSelector((state) => {
    return state.movieTickets;
  })

  return (
    <tr>
      <td>{infor.name}</td>
      <td>{infor.numberOfSeat}</td>
      <td>{selectedSeats.map((seat) => {
        if (selectedSeats[0] === seat) {
          return (seat.soGhe)
        }
        return ("," + seat.soGhe)
      })}</td>
    </tr>
  )
}
