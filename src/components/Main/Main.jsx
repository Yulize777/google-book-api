import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBooksCreateAsyncThunk} from "../../store/thunk/getBooksCreateAsyncThunk";
import Card from "../Card/Card";
import Header from "../Header/Header";
import CardByCategory from "../Card/CardByCategory";
import "../../style.scss"


const App = () => {
    const books = useSelector(state => state.books.books)
    const loading = useSelector(state => state.books.booksLoading)
    const [search,setSearch] = useState('')
    const [sorted,setSorted] = useState('relevance')
    const [maxResult,setMaxResult] = useState(10)
    const [category,setCategory] = useState('')
    const dispatch = useDispatch()
    const data = books?.items || []
    const dataFilteredByCategory = data?.filter(item => {
        if  (item?.volumeInfo?.categories?.includes(category)) {
            return item
        }
    })
    useEffect(() => {
        dispatch(getBooksCreateAsyncThunk({search,sorted,maxResult}))
    },[search,sorted,maxResult])
    const loadMore = () => {
        if (maxResult < 40) {
            setMaxResult(prev => prev + 10)
        } else {
            alert('there are no books anymore')
        }
    }
    console.log(loading)
    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
                sorted={sorted}
                setSorted={setSorted}
                category={category}
                setCategory={setCategory}
            />
            <h2 style={{textAlign: 'center'}}>{books && books?.totalItems + " " +  'found results'} </h2>
            <div className="content">

                {
                    !books?.totalItems ? 'no results' :
                        category ? dataFilteredByCategory.length ? dataFilteredByCategory?.map((item,index) => (
                                <CardByCategory key={item?.id} dataFilteredByCategory={item} />
                            )) : 'no results'  :
                            books?.items?.map((item,index) => (
                                <Card key={item?.id} data={item} index={index} />
                            ))
                }
            </div>
            <div className={'load__cont'}>
                {
                    loading ? 'Loading' :
                        <button disabled={!books?.totalItems } onClick={loadMore} className="load">Load more</button>
                }
            </div>
        </>
    );
};

export default App;
