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
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})    
    }
   
}

/*export const authorize = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})      
}*/



