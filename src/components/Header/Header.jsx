import React, {useId, useState} from 'react';
import "./header.scss"
const Header = ({category,setCategory,setSearch,search,sorted,setSorted}) => {
    const selectId = useId()
    const [text,setText] = useState('')
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const performSearch = (e) => {
        if (e.key === 'Enter' || e.currentTarget.className === 'header__top__btn') {
             setSearch(text)
        }
    }
    return (
        <header className={'header'}>
            <h1 className={'header__title'}>Search for books</h1>
            <div className={'header__top'}>
                <input onKeyDown={performSearch} value={text} onChange={handleOnChange} type="text" className="header__top__field"/>
                <button onClick={performSearch} type={'button'} className="header__top__btn">Search</button>
            </div>
            <div className="header__top">
                <label htmlFor={selectId + 'category'}>
                    Categories
                    <select onChange={(e) => setCategory(e.target.value)} value={category} id={selectId + 'category'} className="header__top__select">
                        <option value={''}>All</option>
                        <option value="Art">Art</option>
                        <option value="Biography">Biography</option>
                        <option value="Computers">Computers</option>
                        <option value="History">History</option>
                        <option value="Medical">Medical</option>
                        <option value="Medical">Poetry</option>
                    </select>
                </label>
                <label htmlFor={selectId + 'sort'}>
                    Sorting by
                    <select onChange={(e) => setSorted(e.target.value)} value={sorted} id={selectId + 'sort'} className="header__top__select">
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </label>
            </div>
        </header>
    );
};

export default Header;