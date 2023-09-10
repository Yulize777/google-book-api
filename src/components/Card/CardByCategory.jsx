import React from 'react';
import {useNavigate} from "react-router-dom";

const CardByCategory = ({dataFilteredByCategory}) => {
    const navigate = useNavigate()
    if (!dataFilteredByCategory || !dataFilteredByCategory?.volumeInfo) {
        return null;
    }
    const {volumeInfo} = dataFilteredByCategory
    return (
        <div className={'card'}>
            <div onClick={() => navigate(`/${dataFilteredByCategory?.id}`)} className={'card__imageCont'}>
                <img width={120} height={180} src={volumeInfo?.imageLinks?.smallThumbnail || 'placeholder-image-url.jpg'}
                     alt={dataFilteredByCategory.volumeInfo?.title || 'Book Cover'}/>
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
                        volumeInfo?.authors?.map(item => {
                            return item
                        })
                    }
                </p>
            </div>
        </div>
    );
};

export default CardByCategory;