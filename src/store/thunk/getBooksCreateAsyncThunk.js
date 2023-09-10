import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBooksCreateAsyncThunk = createAsyncThunk(
    "books/getBooksCreateAsyncThunk",
    async ({search,sorted,maxResult},{rejectWithValue}) => {
        try {
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${sorted}&key=AIzaSyDzbsHwuyAwpBiHPWUNJXpmfNrf0k937JM&maxResults=${maxResult}`)
            return data
        }
        catch (error) {
            rejectWithValue(error)
        }
    }
)