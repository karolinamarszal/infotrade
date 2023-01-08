import axios from "axios"

const TOKEN = "ceeun52ad3i7ibb1nqqgceeun52ad3i7ibb1nqr0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})