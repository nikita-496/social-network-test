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
                debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
        }); 
        }

        onPageChanged = (pageNumber) => {
            this.props.toggleIsFetching(true)
            this.props.setCurrentPage(pageNumber)

            getUsers(pageNumber, this.propspageSize)
            .then(data =>{
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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

