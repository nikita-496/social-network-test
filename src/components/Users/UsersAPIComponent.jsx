import axios from 'axios'
import React from 'react'
import { getUsers } from '../../api/api';
import Preloader from '../common/preloader';
import Users from './Users';



class UsersAPIComponent extends React.Component{
        //запрос на сервер
        componentDidMount() {
            this.props.toggleIsFetching(true)

            //сналача получаем пользователей, затем в them обрабатываем ответ от сервера
            getUsers(this.props.currentPage, this.pageSize).then(data =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
        }); 
        }

        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber)
            this.props.toggleIsFetching(true)
            

            getUsers(pageNumber, this.props.pageSize)
            .then(data =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
        }); 
        }

    render() {
        debugger
        return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} 
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}

                />
        </>
    }
}

export default UsersAPIComponent;

