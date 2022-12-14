import { createHeaders } from "./index.js"

const apiUrl = process.env.REACT_APP_API_URL

export const fetchUser = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`)
    if (!response.ok) {
      throw new Error("Could not complete request")
    }

    const data = await response.json()
    console.log(data)
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

export const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`)
    if (!response.ok) {
      throw new Error("Could not complete request")
    }

    const data = await response.json()
    console.log(data)
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    })
    if (!response.ok) {
      throw new Error("Could not create user with username " + username)
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

export const removeTranslations = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    })
    if (!response.ok) {
      throw new Error("Could not update user with translations " + userId)
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

export const updateTranslations = async (newTranslations, user) => {
  let patchData = {
    translations: newTranslations,
  }
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify(patchData),
    })
    if (!response.ok) {
      throw new Error(
        "Could not update user with translations " + user.translations
      )
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username)
  if (checkError != null) {
    return [checkError, null]
  }
  if (user.length > 0) {
    return [null, user.pop()]
  }
  return await createUser(username)
}
