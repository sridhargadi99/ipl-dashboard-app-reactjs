// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachTeamDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = eachTeamDetails

  const newColor =
    matchStatus === 'Won'
      ? 'match-card-status-style1'
      : 'match-card-status-style2'
  return (
    <li className="match-card-container">
      <img
        className="match-card-image-style"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-team-style">{competingTeam}</p>
      <p className="match-card-result-style">{result}</p>
      <p className={`match-card-status-style ${newColor}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
