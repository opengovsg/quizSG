import axios from 'axios'

const { REACT_APP_QUIZ_SG_URL: QUIZ_SG_URL } = process.env

const baseConfiguration = {
  // Configure base url
  baseURL: `${QUIZ_SG_URL}/api`,
}

// Create the api service which operational needs calls
const ApiService = axios.create(baseConfiguration)

export default ApiService
