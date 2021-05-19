import axios from 'axios'

 //запрашиваем пользователей
export const getUsers = (currentPage, pageSize) => {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                return response.data
            });
}

