import http from "k6/http"

let testCount = 0

export default function () {
  testCount++
  const url = `http://localhost/index.php?r=site%2Flogin&i=${testCount}`
  const resGet = http.get(url)
  resGet.submitForm({
    fields: {
      'LoginForm[username]': 'windir',
      'LoginForm[password]': '123456',
    },
    submitSelector: '[name=login-button]',
  })
};