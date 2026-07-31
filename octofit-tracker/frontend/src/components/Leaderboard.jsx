import ResourceView from './ResourceView.jsx'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceView
      apiEndpoint={leaderboardEndpoint}
      resourceName="leaderboard"
      title="Leaderboard"
      description="Competitive rankings across users and teams."
    />
  )
}

export default Leaderboard