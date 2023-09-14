import { createSlice } from "@reduxjs/toolkit";

const movieTicketSlice = createSlice({
    name: "movieTickets",
    initialState: {
        infor: {
            name: "",
            numberOfSeat: null,
        },
        selectedSeats: [],
        totalPrice: 0,
        disabled: {
            formInfor: false,
            checkBox: true,
        },
    },
    reducers: {
        changeInfor: (state,action) => {
            state.infor = action.payload;
        },
        startSelect: (state, action) => {
            state.disabled = action.payload
        },
        selectSeat: (state, action) => {
            const {isSelected, ...seat} = action.payload;
            if(isSelected){
                state.selectedSeats.push(seat);
                state.totalPrice += seat.gia;
            }
            else{
                const index = state.selectedSeats.findIndex((item) => item.soGhe === seat.soGhe);
                state.selectedSeats.splice(index, 1);
                state.totalPrice -= seat.price;   
            }
            if(state.infor.numberOfSeat === state.selectedSeats.length){
                state.disabled.checkBox = true;
            }
        },
    }
})

export const {startSelect, changeInfor, selectSeat, confirmSelection} = movieTicketSlice.actions;
export default movieTicketSlice.reducer;