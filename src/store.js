import { configureStore } from "@reduxjs/toolkit";
import movieTicketReducer from "./redux/movieTicketSlice";

const store = configureStore({
    reducer: {
        movieTickets: movieTicketReducer,
    }
});

export default store;
