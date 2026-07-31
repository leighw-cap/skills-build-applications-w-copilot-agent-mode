import { useEffect, useState } from 'react'

import { fetchResource } from '../api.js'

function ResourceView({ resourceName, title, description, apiEndpoint }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadResource() {
      try {
        setStatus('loading')
        setError('')
        const nextItems = await fetchResource(resourceName, apiEndpoint)

        if (!ignore) {
          setItems(nextItems)
          setStatus('ready')
        }
      } catch (requestError) {
        if (!ignore) {
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadResource()

    return () => {
      ignore = true
    }
  }, [apiEndpoint, resourceName])

  return (
    <section className="resource-panel">
      <div className="resource-heading">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="badge text-bg-light">{items.length} records</span>
      </div>

      <p className="api-endpoint">{apiEndpoint}</p>

      {status === 'loading' && <p className="state-message">Loading...</p>}
      {status === 'error' && <p className="state-message text-danger">{error}</p>}
      {status === 'ready' && items.length === 0 && (
        <p className="state-message">No records returned yet.</p>
      )}
      {status === 'ready' && items.length > 0 && <ResourceTable items={items} />}
    </section>
  )
}

function ResourceTable({ items }) {
  const columns = Array.from(
    items.reduce((columnSet, item) => {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        Object.keys(item).forEach((key) => columnSet.add(key))
      }

      return columnSet
    }, new Set()),
  )

  if (columns.length === 0) {
    return (
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={`${item}-${index}`}>
            {String(item)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item?._id ?? item?.id ?? index}>
              {columns.map((column) => (
                <td key={column}>{formatValue(item?.[column])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return '-'
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

export default ResourceView