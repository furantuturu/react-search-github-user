import { useState } from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import { getGithubUser } from './api/gh-users'
import GhUserCard from './GhUserCard'
import SearchInputBox from './SearchInputBox'
import GitHubIcon from './icons/github-mark-white.svg?react'
import useDebounce from './customHooks/useDebounce'

export default function App() {
  const [searchInput, setSearchInput] = useState("")

  const debouncedValue = useDebounce(searchInput, 1000)

  //* placeholder data that processes the debounced input string and return this arr
  const names = ['f', 'fu', 'fur', 'fura', 'furan', 'furant', 'furantu', 'furantut', 'furantutu', 'furantutur', 'furantuturu']

  const queries = useQueries({
    queries: names.map(char => ({
      queryKey: ["ghuser", char],
      queryFn: () => getGithubUser(char),
      retry: false,
      staleTime: 10 * 1000
    })),
    combine: (results) => {
      return {
        data: results.map(result => result.data),
      }
    }
  })

  return (
    <>
      <div className="container">
        <h1>Search a GitHub <GitHubIcon className="gh-icon" /> User</h1>
          <SearchInputBox searchInput={ searchInput } setSearchInput={ setSearchInput } />
        <hr />
        <div className="gh-users-container">
          <ul className='gh-users-list'>
            { ( queries.data ?? "No user/s found" )
                                                .filter(data => data !== undefined)
                                                .map(data => {
                                                  return <GhUserCard key={ data.id } userData={ data } />
            }) }

          </ul>
        </div>
      </div>
    </>
  )
}