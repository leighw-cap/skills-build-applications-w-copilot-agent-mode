import ResourceView from './ResourceView.jsx'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourceView
      apiEndpoint={workoutsEndpoint}
      resourceName="workouts"
      title="Workouts"
      description="Suggested training sessions and exercise plans."
    />
  )
}

export default Workouts