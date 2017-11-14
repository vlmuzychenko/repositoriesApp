import axios from 'axios';

export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export const GET_USER_REPOSITORIES_REQUEST = 'GET_USER_REPOSITORIES_REQUEST';
export const GET_USER_REPOSITORIES_SUCCESS = 'GET_USER_REPOSITORIES_SUCCESS';
export const GET_USER_REPOSITORIES_FAIL = 'GET_USER_REPOSITORIES_FAIL';

export function changeSelectedTab(selectedTab, tabNamespace) {
    return {
        type: CHANGE_SELECTED_TAB,
        tab: selectedTab,
        namespace: tabNamespace
    };
}

export function getUserRepositoriesRequest(userName) {
    return {
        type: GET_USER_REPOSITORIES_REQUEST,
        userName
    };
}

export function getUserRepositoriesSucccess(data) {
    return {
        type: GET_USER_REPOSITORIES_SUCCESS,
        data
    };
}

export function getUserRepositoriesFail(error) {
    return {
        type: GET_USER_REPOSITORIES_FAIL,
        error
    };
}

export function fetchUserRepositories(userName) {
    return (dispatch, getState) => {
        dispatch(getUserRepositoriesRequest(userName));

        axios.get(`https://api.github.com/users/${userName}/repos`)
            .then(function (response) {
                dispatch(getUserRepositoriesSucccess(response));
            })
            .catch(function (error) {
                dispatch(getUserRepositoriesFail(error));
            });
    }
}
