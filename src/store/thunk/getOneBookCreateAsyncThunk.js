import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getOneBookCreateAsyncThunk = createAsyncThunk(
    'books/getOneBookCreateAsyncThunk',
    async (id,{rejectWithValue}) => {
        try {
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDzbsHwuyAwpBiHPWUNJXpmfNrf0k937JM`)
            return data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)