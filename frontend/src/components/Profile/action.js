import { ACTION } from "./constants";
import axios from "axios";
export const acceptdonation = (data) => async (dispatch) => {
    await axios.post('../../api/donation/accept', { _id: data._id })
    dispatch({
        type: 'ACCEPT_DONATION',
        payload: data
    })
}
export const getSomeData = (data) => async (dispatch) => {
    await axios.get("/some-api-route");
    dispatch({
        type: ACTION.GET_SOME_DATA,
        payload: data,
    });
};
export const addHistory = (history) => async (dispatch) => {
    const res = await axios.post('/api/users/addhistory', { history: history })
    dispatch({
        type: 'ADD_HISTORY',
        payload: res.data
    })
}
export const getProfile = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/profile/${id}`)
        dispatch({
            type: ACTION.GET_PROFILE,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }

}
export const addFed = (value, rating, donationId) => async (dispatch) => {
    console.log('rating is:', rating);
    console.log('donationid is:', donationId);
    const res = await axios.post('/api/users/addfed', { value: value, rating: rating, donationId: donationId })
    console.log('add fed data is; ', res.data);
    dispatch({
        type: 'ADD_FED',
        payload: res.data
    })
}
export const reviewOrg = (id, rating) => async (dispatch) => {
    console.log(rating, id);
    const res = await axios.post('/api/users/review', { id: id, rating: rating });
    console.log('After reviewing the Organisation', res.body);
    dispatch({
        type: 'REVIEW',
        payload: res.data
    })
}
export const getSuggestedPages = () => async (dispatch) => {
    const res = await axios.get("/api/path/to/sugPage");
    dispatch({
        type: ACTION.GET_SUGGESTED_PAGES,
        payload: res.data
    })
}
export const getPendingDonations = () => async (dispatch, getState) => {
    const userId = getState().authReducer.user.userId
    const checkvisibilty = (donation) => {
        return (donation.status.localeCompare("pending") == 0 && donation.receiverId == userId)
    }
    const donations = getState().DiscoverReducer.Donations.filter(checkvisibilty);
    dispatch({
        type: 'GET_PENDING_DONATION',
        payload: donations
    })
}
export const changeTab = tab => (dispatch) => {

    // const res = await axios.get(`/api/route/${tab}`)
    //MAKE ANOTHER DISPATCH TO UPDATE STATE

    dispatch({
        type: ACTION.CHANGE_TAB,
        payload: tab
    })
}

export const uploadProfilePic = (profilePic, avatar) => (dispatch) => {
    dispatch({
        type: ACTION.UPDATE_PROFILE_PIC,
        payload: { profilePic, avatar }
    })
}


export const followUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/follow/${id}`);
        dispatch({
            type: ACTION.GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }

}

export const unfollowUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/unfollow/${id}`);
        dispatch({
            type: ACTION.GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
}

export const getFollowers = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/followers/${id}`)
        dispatch({
            type: ACTION.GET_FOLLOWERS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
}

export const getFollowing = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/following/${id}`)
        dispatch({
            type: ACTION.GET_FOLLOWING,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
}

export const rejectDonation = (id) => async (dispatch) => {
    try {
        const res = await axios.post('/api/donation/reject', { _id: id })
        console.log(res.data);
        dispatch({
            type: 'REJECT_DONATION',
            id: id
        })
    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }

}

export const editProfile = (user) => async dispatch => {
    try {
        const res = await axios.post('/api/users/edit-profile', { user });
        dispatch({
            type: ACTION.GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        })
    }
}