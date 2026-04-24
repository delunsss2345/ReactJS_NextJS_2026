const API_BASE = 'https://dummyjson.com'

const buildErrorMessage = async (response) => {
  try {
    const data = await response.json()
    return data.message || data.error || `Request failed with status ${response.status}`
  } catch {
    return `Request failed with status ${response.status}`
  }
}

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(await buildErrorMessage(response))
  }

  return response.json()
}

export const fetchUsersApi = async () => {
  const data = await request('/users?limit=12')
  return data.users
}

export const searchUsersApi = async (query) => {
  const data = await request(`/users/search?q=${encodeURIComponent(query)}`)
  return data.users
}

export const loginApi = async ({ username, password }) => {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
  })
}

export const fetchAuthProfileApi = async (token) => {
  return request('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const fetchProductsApi = async () => {
  const data = await request('/products?limit=8')
  return data.products
}
