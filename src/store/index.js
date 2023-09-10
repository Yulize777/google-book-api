import {configureStore} from "@reduxjs/toolkit";
import books from "./slice/books";
const store = configureStore({
    reducer: {
        books
    }
});

export default store;
