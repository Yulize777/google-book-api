import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneBookCreateAsyncThunk} from "../../store/thunk/getOneBookCreateAsyncThunk";
import "./detailCard.scss"
const DetailCard = () => {
    const detailCard = useSelector(state => state.books.book)
    const bookLoading = useSelector(state => state.books.bookLoading)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getOneBookCreateAsyncThunk(id))
    },[])
    if (bookLoading) {
        return <h1>Loading</h1>
    }
    return (
        <div className="detail-card">
            <span onClick={() => navigate(-1)}>Go back</span>
            <div className="detail-card__image">
                <img
                    src={detailCard?.volumeInfo?.imageLinks?.thumbnail || 'placeholder-image-url.jpg'}
                    alt={detailCard?.volumeInfo?.title || 'Book Cover'}
                />
            </div>
            <div className="detail-card__info">
                <h2>{detailCard?.volumeInfo?.title}</h2>
                <p>{detailCard?.volumeInfo?.categories?.join(', ')}</p>
                <p>{detailCard?.volumeInfo?.authors?.join(', ')}</p>
                <p>{detailCard?.volumeInfo?.description}</p>
            </div>
        </div>
    );
};

export default DetailCard;