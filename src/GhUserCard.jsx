import CityIcon from './icons/city-solid.svg?react'
import UsersIcon from './icons/users-solid.svg?react'
import RepositoryIcon from './icons/repository.svg?react'

export default function GhUserCard({ userData }) {
    return (
        <li className="gh-user-card"> 
            <div className="gh-user-avatar" 
                style={{ backgroundImage: `url("${userData.avatar_url}")` }} >
            </div>
            <div className="gh-user-details">
                <div className="gh-user-name">
                    <a href={ userData.html_url } target="_blank">
                        <h2>{ userData.name }</h2>
                    </a>
                    <a href={ userData.html_url } target="_blank">
                        <sub>{ userData.login }</sub>
                    </a>
                </div>
                <p className='location'><CityIcon /> { userData.location ?? "-/-" }</p>
                <p className='repo'><RepositoryIcon /> { userData.public_repos } Repositories</p>
                <p className='followers'><UsersIcon /> { userData.followers } Followers</p>
            </div>
        </li>
    )
}