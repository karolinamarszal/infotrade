import axios from "axios"

const TOKEN = "ceunkfiad3ibo9vbg0ugceunkfiad3ibo9vbg0v0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})