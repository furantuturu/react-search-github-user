import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getGithubUser } from './api/gh-users'
import GhUserCard from './GhUserCard'
import SearchInputBox from './SearchInputBox'
import GitHubIcon from './icons/github-mark-white.svg?react'

export default function App() {
  const [searchInput, setSearchInput] = useState("")
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["githubUser", searchInput],
    queryFn: () => getGithubUser(searchInput),
    staleTime: 5 * 1000
  }) 

  console.log(data)

  if (isPending) return <h1>Loading...</h1> 
  if (isError) return <h1>Error Message: { error.message }</h1> 

  return (
    <>
      <div className="container">
        <h1>Search a GitHub <GitHubIcon className="gh-icon" /> User</h1>
          <SearchInputBox searchInput={ searchInput } setSearchInput={ setSearchInput } />
        <hr />
        <div className="gh-users-container">
          <ul className='gh-users-list'>
            <GhUserCard key={ data.id } userData={ data } />
          </ul>
        </div>
      </div>
    </>
  )
}