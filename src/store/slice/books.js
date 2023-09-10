import {createSlice} from "@reduxjs/toolkit";
import {getBooksCreateAsyncThunk} from "../thunk/getBooksCreateAsyncThunk";
import {getOneBookCreateAsyncThunk} from "../thunk/getOneBookCreateAsyncThunk";

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: null,
        booksLoading: false,
        book: null,
        bookLoading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooksCreateAsyncThunk.fulfilled, (state,action) => {
                state.books = action.payload
                state.booksLoading = false
            })
            .addCase(getBooksCreateAsyncThunk.pending, (state) => {
                state.booksLoading = true
            })
            .addCase(getBooksCreateAsyncThunk.rejected, (state) => {
                state.booksLoading = false
            })
            .addCase(getOneBookCreateAsyncThunk.fulfilled, (state,action) => {
                state.book = action.payload
                state.bookLoading = false
            })
            .addCase(getOneBookCreateAsyncThunk.pending, (state) => {
                state.bookLoading = true
            })
            .addCase(getOneBookCreateAsyncThunk.rejected, (state) => {
                state.bookLoading = false
            })
    }
})
export default booksSlice.reducer;