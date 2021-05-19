import React from 'react'
import Preloader from '../common/preloader';
import Users from './Users';




class UsersAPIComponent extends React.Component{
        //запрос на сервер
        componentDidMount() {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }

        onPageChanged = (pageNumber) => {
            this.props.getUsers(pageNumber, this.props.pageSize)
        }

    render() {
        return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} 
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followSuccess={this.props.followSuccess}
                        unFollowSuccess={this.props.unFollowSuccess}
                        followingInProgress={this.props.followingInProgress}

                />
        </>
    }
}

export default UsersAPIComponent;

