const apiURL = "https://best-asl-translator.herokuapp.com"
const apiKey = "hirtehneaatehi"

export const postUser = (userName) => {
  fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      translations: [],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not create new user")
      }
      return response.json()
    })
    .then((newUser) => {
      // newUser is the new user with an id
    })
    .catch((error) => {})
}

export const fetchAllUsers = () => {
  return fetch(`${apiURL}/translations`).then((response) => response.json())
}
