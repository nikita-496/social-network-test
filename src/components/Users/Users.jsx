import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/default-user.png'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


const Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize) 

        let pages = [];
        for (let i=1 ; i <= pagesCount; i++) {
            pages.push(i)
        }

    return (
        <div> 
            <div>
                {pages.map(page => {
                   return <span className={props.currentPage === page && styles.selectedPage} onClick={(e) => { props.onPageChanged(page) }}>{page}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'./profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                       
                    </div>
                    <div>
                        {
                        user.followed 
                            ? <button onClick={() => {
                            
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                        "API-KEY" : "d2826521-0085-4ffb-9d35-d4ec51f7d121"
                                        }
                                    })
        
                                .then(response =>{
                                    if (response.data.resultCode == 0) {
                                        props.unFollow(user.id)
                                    }
                            }); 
    
                            }}>Follow</button>

                            : <button onClick={() => {
                            
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                        "API-KEY" : "d2826521-0085-4ffb-9d35-d4ec51f7d121"
                                        }
                                    })
        
                                .then(response =>{
                                    if (response.data.resultCode == 0) {
                                        props.follow(user.id)
                                    }
                            }); 
    
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
        )
}

export default Users;