import Settings from "./Settings" //importing URL to fetch calls
import { fetchIt } from "./Fetch"

export default {
    async get(id) {
        return await fetchIt(`${Settings.remoteURL}/users/${id}`)
    },
    async createAccount(user) {
        return await fetchIt(`${Settings.remoteURL}/users`, "POST", JSON.stringify(user))
    },
    async findUser(un, pwd) {
        return await fetchIt(`${Settings.remoteURL}/users?email=${un}&password=${pwd}`)
    },
    async delete(id) {
        return await fetchIt(`${Settings.remoteURL}/users/${id}`, "DELETE")
    },
    async getAllPlayers() {
        return await fetchIt(`${Settings.remoteURL}/players`)
    },
    async getAllTeams() {
        return await fetchIt(`${Settings.remoteURL}/teams`)
    },
    async getAll() {
        return await fetchIt(`${Settings.remoteURL}/users`)
    },
    async getUserFavorites() {
        return await fetchIt(`${Settings.remoteURL}/userFavorites`)
    }
}