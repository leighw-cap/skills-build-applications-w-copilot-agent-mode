import ResourceView from './ResourceView.jsx'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceView
      apiEndpoint={teamsEndpoint}
      resourceName="teams"
      title="Teams"
      description="Groups, rosters, and shared challenge progress."
    />
  )
}

export default Teams