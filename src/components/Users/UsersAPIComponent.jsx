import axios from 'axios'
import React from 'react'
import Preloader from '../common/preloader';
import Users from './Users';



class UsersAPIComponent extends React.Component{
        //запрос на сервер
        componentDidMount() {
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            //ответ с сервера 
            .then(response =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
        }); 
        }

        onPageChanged = (pageNumber) => {
            this.props.toggleIsFetching(true)
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
        }); 
        }

    render() {
        return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} 
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}

                />
        </>
    }
}

export default UsersAPIComponent;
