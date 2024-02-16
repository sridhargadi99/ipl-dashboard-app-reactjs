// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails1} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails1
  return (
    <div className="latest-match-container">
      <div className="latest-match-container1">
        <div className="latest-match-text-container">
          <p className="team-style">{competingTeam}</p>
          <p className="date-style">{date}</p>
          <p className="stadium-style">{venue}</p>
          <p className="result-style">{result}</p>
        </div>
        <div className="latest-match-image-container">
          <img
            className="latest-match-image-style"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="hr-rule" />
      <div className="latest-match-container2">
        <h1 className="heading-style">First Innings</h1>
        <p className="paragraph-style">{firstInnings}</p>
        <h1 className="heading-style">Second Innings</h1>
        <p className="paragraph-style">{secondInnings}</p>
        <h1 className="heading-style">Man Of The Match</h1>
        <p className="paragraph-style">{manOfTheMatch}</p>
        <h1 className="heading-style">Umpires</h1>
        <p className="paragraph-style">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
