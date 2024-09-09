import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App() {
  function handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <div className="container">
        <h1>Search a GitHub User</h1>
        <div className="search-form">
          <form onSubmit={ handleSubmit }>
            <div className="searchInputBox">
              <input type="text" required="required" />
              <span>Enter a GitHub Username</span>
              <button className="search-button" type="submit">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}