import React from 'react'
import styles from './Users.module.css'

let Users = (props) =>{
    
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/bq/643/128.jpg', followed: false, fullName: 'Nikita', status: 'I\'m Front-end Developer', location: {city: 'Magnitogorsk', country: 'Russia'} },
                {id: 2, photoUrl: 'https://www.vokrug.tv/pic/person/9/2/5/3/92535d1871632ba1effcdfad08b8ee1f.jpg', followed: true, fullName: 'Darya', status: 'I\'m Back-end Developer', location: {city: 'Moskow', country: 'Russia'} },
                {id: 3, photoUrl: 'http://stanradar.com/upload/bio/original/1579793121_13431200.png', followed: false, fullName: 'Dmitriy', status: 'I\'m DevOps', location: {city: 'Kazan', country: 'Russia'} },
                {id: 4, photoUrl:'https://i.archi.ru/i/250/316187.jpg' ,followed: true, fullName: 'Sergey', status: 'I\'m Front-end Developer', location: {city: 'Novosibirsk', country: 'Russia'} }
            ]
        )
    }
    
    
    return <div> {

        props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {user.followed 
                    ? <button onClick={() => {props.unfollow(user.id)} }>Unfollow</button> 
                    : <button onClick={() => {props.follow(user.id)} }>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
        </div>)
        
        }
    </div>
}

export default Users;