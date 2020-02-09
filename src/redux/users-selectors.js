import {createSelector} from 'reselect';

const getUsersSimpleSelector = (state) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSimpleSelector, (users) => {
    return users.filter( arr => true );
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const gerTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage= (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowDisabledValue = (state) => {
    return state.usersPage.followDisabledValue;
};
