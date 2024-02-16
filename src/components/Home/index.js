// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    iplTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeam = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeams: updatedTeam, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="logo-image-style"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="logo-name-style">IPL Dashboard</h1>
        </div>
        <ul className="team-list-container">
          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            iplTeams.map(eachTeam => (
              <TeamCard eachTeamDetails={eachTeam} key={eachTeam.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
