import  * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
    "API-KEY" : "d2826521-0085-4ffb-9d35-d4ec51f7d121"
    }
})

 //запрашиваем пользователей
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow (userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow${userId}`)
    },
    authorize () {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})    
    },
    getUserProfile (userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getUserProfile(userId)
    }
   
}

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}` )
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId )
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }
}




