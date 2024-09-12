import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getGithubUser } from './api/gh-users'
import GhUserCard from './GhUserCard'
import SearchInputBox from './SearchInputBox'
import GitHubIcon from './icons/github-mark-white.svg?react'
import useDebounce from './customHooks/useDebounce'

export default function App() {
  const [searchInput, setSearchInput] = useState("")

  const debouncedInput = useDebounce(searchInput, 1000)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["githubUser", debouncedInput],
    queryFn: () => getGithubUser(debouncedInput),
    enabled: !!debouncedInput,
    staleTime: 5 * 1000
  })

  return (
    <>
      <div className="container">
        <h1>Search a GitHub <GitHubIcon className="gh-icon" /> User</h1>
          <SearchInputBox searchInput={ searchInput } setSearchInput={ setSearchInput } />
        <hr />
        <div className="gh-users-container">
          <ul className='gh-users-list'>
          { isLoading && <h1>Loading...</h1> }
          { isError && <h1>User Not Found</h1> }
          { data && <GhUserCard key={ data.id } userData={ data } /> }
          </ul>
        </div>
      </div>
    </>
  )
}