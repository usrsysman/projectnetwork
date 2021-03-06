import React from "react";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../Redux/users-reducer";
import {connect} from "react-redux";

const UsersContainer = (props) => {
    return <div>
        will be
    </div>
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.UsersData
    }
}

let mapDispatchToProps = (dispatch) => {
return {
     follow: (userId) => {
         dispatch(followAC(userId))
     },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);