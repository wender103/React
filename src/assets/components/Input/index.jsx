import './style.css'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <div className='search_container'>
            <input 
                type="search" 
                onChange={handleChange} 
                value={searchValue}
            />
        </div>
    )
}