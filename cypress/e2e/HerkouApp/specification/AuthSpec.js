
class AuthSpec {
    setBasicAuth(username, password) {
        return "Basic " + btoa(`${username}:${password}`)
    }
}

export default AuthSpec;