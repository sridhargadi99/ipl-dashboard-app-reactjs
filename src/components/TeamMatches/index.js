// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    matchDetails1: {},
    matchDetails2: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getCamelCaseResult = eachTeam => ({
    umpires: eachTeam.umpires,
    result: eachTeam.result,
    manOfTheMatch: eachTeam.man_of_the_match,
    id: eachTeam.id,
    date: eachTeam.date,
    venue: eachTeam.venue,
    competingTeam: eachTeam.competing_team,
    competingTeamLogo: eachTeam.competing_team_logo,
    firstInnings: eachTeam.first_innings,
    secondInnings: eachTeam.second_innings,
    matchStatus: eachTeam.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedUrl = data.team_banner_url
    const updatedMatchDetails1 = this.getCamelCaseResult(
      data.latest_match_details,
    )
    const updatedMatchDetails2 = data.recent_matches.map(eachTeamDetails =>
      this.getCamelCaseResult(eachTeamDetails),
    )

    this.setState({
      teamBannerUrl: updatedUrl,
      matchDetails1: updatedMatchDetails1,
      matchDetails2: updatedMatchDetails2,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, matchDetails1, matchDetails2, isLoading} = this.state
    return isLoading ? (
      // eslint-disable-next-line react/no-unknown-property
      <div testid="loader" className="loader-container">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-match-bg-container">
        <img
          className="team-match-banner-image-style"
          src={teamBannerUrl}
          alt="team banner"
        />
        <div className="team-match-latest-container">
          <h1 className="latest-heading-style">Latest Matches</h1>
          <LatestMatch matchDetails1={matchDetails1} key={matchDetails1.id} />
          <ul className="recent-match-list-container">
            {matchDetails2.map(eachTeam => (
              <MatchCard eachTeamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TeamMatches
