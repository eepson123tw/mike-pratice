import axios from 'axios'

// get http://api.github.com/users/{username}
// get http://api.github.com/users/{username}/repos
// get http://api.github.com/users/{username}/repos

const github = axios.create({
  baseURL: 'http://api.github.com/'
})

export const apiGetUserData = (data) => github.get(`users/${data}`)
export const apiGetUserRepo = ({ name, page }) => github.get(`users/${name}/repos?page=${page}&per_page=5&sort=pushed`)
