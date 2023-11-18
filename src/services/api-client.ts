import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a0f673bebb6941a0b78e999a836c292e'
  }
})