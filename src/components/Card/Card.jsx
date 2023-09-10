import React from 'react';
import {useNavigate} from "react-router-dom";

import "./card.scss"
const Card = ({data}) => {
    const navigate = useNavigate()
    if (!data || !data.volumeInfo) {
        return null;
    }
    const {volumeInfo} = data
    return (
        <div onClick={() => navigate(`/${data?.id}`)} className={'card'}>
            <div className={'card__imageCont'}>
                <img width={120} height={180} src={volumeInfo?.imageLinks?.smallThumbnail || 'placeholder-image-url.jpg'}
                     alt={data.volumeInfo?.title || 'Book Cover'}/>
            </div>
            <div className="card__bottom">
                <p className={'card__bottom__text'}>
                    {
                        volumeInfo?.categories?.filter((item,index) => {
                            if (index === 0) {
                                return item
                            }
                        })
                    }
                </p>
                <h2 className="card__bottom__title">
                    {
                       volumeInfo?.title
                    }
                </h2>
                <p className="card__bottom__text">
                    {
                        volumeInfo?.authors?.join(' / ')
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;