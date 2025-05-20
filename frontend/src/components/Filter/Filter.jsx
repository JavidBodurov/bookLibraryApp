import { useDispatch, useSelector } from 'react-redux';
import { 
    setTitleFilter, 
    selectTitleFIlter, 
    resetFilters, 
    setAuthorFilter, 
    selectAuthorFilter,
    setOnlyFavoriteFilter,
    selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice';
 
import './Filter.css';


const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFIlter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

    const handleTitleFIlterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFIlterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFavoriteChange = () => {
        dispatch(setOnlyFavoriteFilter())
    };

    const handleResetFilters = () => {
        dispatch(resetFilters())
    };

    return (
        <div className='app-block filter'>
            <div className='filter-row'>
                <div className='filter-group'>
                    <input
                        onChange={handleTitleFIlterChange}
                        value={titleFilter}
                        type='text'
                        placeholder='Filter by title...'
                    />
                </div>
                <div className='filter-group'>
                    <input
                        onChange={handleAuthorFIlterChange}
                        value={authorFilter}
                        type='text'
                        placeholder='Filter by author...'
                    />
                </div>
                <div className='filter-group'>
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} 
                            onChange={handleOnlyFavoriteChange}/>
                        Only Favorite
                    </label>
                </div>
                <button type='button' onClick={handleResetFilters}>Reset FIlters</button>
            </div>
        </div>
    );
}

export default Filter;