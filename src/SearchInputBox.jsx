import SearchIcon from './icons/magnifying-glass-search.svg?react'

export default function SearchInputBox({ searchInput, setSearchInput }) {
    return (
        <div className="searchInputBox">
            <input value={ searchInput } 
                    onChange={ (e) => setSearchInput(e.target.value) } 
                    type="text" 
                    required="required"
                />
            <span>Enter a GitHub Username</span>
            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
    )
}
