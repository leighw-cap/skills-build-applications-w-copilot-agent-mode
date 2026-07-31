import ResourceView from './ResourceView.jsx'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <ResourceView
      apiEndpoint={activitiesEndpoint}
      resourceName="activities"
      title="Activities"
      description="Logged workouts, practices, and fitness milestones."
    />
  )
}

export default Activities