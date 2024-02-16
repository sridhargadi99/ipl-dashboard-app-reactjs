// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {id, name, teamImageUrl} = eachTeamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-style">
        <img className="team-card-image-style" src={teamImageUrl} alt={name} />
        <p className="team-card-name-style">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
