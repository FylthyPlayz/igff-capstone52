 import Settings from "./Settings"
import { fetchIt } from "./Fetch"
import UserRepository from "./UserRepository"




export default {
    async get(id) {
        const users = await UserRepository.getAll()
        return await fetchIt(`${Settings.remoteURL}/`)
    }
}