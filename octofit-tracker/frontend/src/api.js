export const apiBaseUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export async function fetchResource(resourceName, apiEndpoint = `${apiBaseUrl}/${resourceName}/`) {
  const response = await fetch(apiEndpoint)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return normalizeResourceResponse(await response.json(), resourceName)
}

export function normalizeResourceResponse(payload, resourceName) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  if (Array.isArray(payload.results)) {
    return payload.results
  }

  if (Array.isArray(payload.data)) {
    return payload.data
  }

  if (Array.isArray(payload.items)) {
    return payload.items
  }

  if (Array.isArray(payload[resourceName])) {
    return payload[resourceName]
  }

  return []
}