import * as Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9d7cf002-70ff-4a91-b4ad-b755f045cc45"
    }
})
const instanceSpotify = Axios.create({
    withCredentials: true,
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': 'Bearer ' + 'token'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
export const followingAPI = {
    deleteUnfollow(id) {
        return instance.delete(`follow/` + id).then(response => response.data)
    },
    postFollow(id) {
        return instance.post(`follow/` + id, {}).then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userIdUri) {
        return instance.get(`profile/` + userIdUri).then(response => response.data)
    }
}
