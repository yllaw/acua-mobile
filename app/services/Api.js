import axios from 'axios'
import env from '@/env.json'

export default() => {
  return axios.create({
    baseURL: `https://${env.SUBURL}.ngrok.io`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
