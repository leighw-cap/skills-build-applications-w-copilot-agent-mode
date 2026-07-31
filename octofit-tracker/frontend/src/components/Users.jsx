import ResourceView from './ResourceView.jsx'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceView
      apiEndpoint={usersEndpoint}
      resourceName="users"
      title="Users"
      description="Athlete profiles and account records."
    />
  )
}

export default Users