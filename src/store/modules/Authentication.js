import * as types from '../types'
import axios from '../../axios';
import router from '../../router'


const state = {
    loggingIn : false,
    token : null,
    user : {},
    errors: [],
    message: ""
}

const getters = {
    [types.AUTH_STATE] : state => {
        return state.loggingIn 
    },
    [types.IS_AUTHENTICATED] : state => {
        return state.token !== null
    }
}

const mutations = {
    [types.LOGIN_MUTATE] : (state, responsePayload) => {
        state.token = responsePayload.token;
    },
    [types.SIGN_UP_MUTATE] : (state, responsePayload) => {
        state.message = responsePayload.data.message
    },
    [types.FORGOT_PASSWORD_MUTATE] : (state, responsePayload) => {
        state.message = responsePayload.data.message
    },
    [types.PASSWORD_RESET_MUTATE] : (state, responsePayload) => {
        state.message = responsePayload.data.message
    },
    [types.SIGN_OUT_MUTATE] : (state) => {
        state.token = null
    },
    [types.AUTH_STATE_MUTATE] : (state) => {
        state.loggingIn = !state.loggingIn
    }
}
const actions = {
    [types.LOGIN_ACTION] : ({commit, dispatch}, authData) => {
        commit(types.AUTH_STATE_MUTATE)
        axios.post('/sign_in', {
            email:authData.email, 
            password:authData.password
        })
          .then(response => {
              console.log(response)
              const now = new Date();
              const expirationDate = new Date(now.getTime() + response.data.expires_in * 1000)
              localStorage.setItem('token', response.data.access_token)
              localStorage.setItem('expirationDate', expirationDate)
              commit(types.LOGIN_MUTATE, {token : response.data.access_token})
              dispatch(types.AUTO_LOGOUT_ACTION, response.data.expires_in * 1000)
              commit(types.AUTH_STATE_MUTATE)
              router.replace('/dashboard')
            })
          .catch(error => {
                commit(types.AUTH_STATE_MUTATE)
                console.log(error.reponse.data)
            });

    },
    [types.SIGN_UP_ACTION] : ({commit}, authData) => {
        commit(types.AUTH_STATE_MUTATE)
        axios.post('/sign_up_with_email', authData)
        .then(response => {
            console.log(response)
            commit(types.SIGN_UP_MUTATE, response)
            commit(types.AUTH_STATE_MUTATE)
        })
        .catch(error => {
            commit(types.AUTH_STATE_MUTATE)
            console.log(error)
        });
    },
    [types.FORGOT_PASSWORD_ACTION] : ({commit}, authData) => {
        commit(types.AUTH_STATE_MUTATE)
        axios.post('/password/email', authData)
        .then(response => {
            console.log(response)
            commit(types.FORGOT_PASSWORD_MUTATE, response)
            commit(types.AUTH_STATE_MUTATE)
        })
        .catch(error => {
            commit(types.AUTH_STATE_MUTATE)
            console.log(error)
        });
    },
    [types.PASSWORD_RESET_ACTION] : ({commit}, authData) => {
        commit(types.AUTH_STATE_MUTATE)
        axios.post('/password/reset', authData)
        .then(response => {
            console.log(response)
            commit(types.PASSWORD_RESET_MUTATE, response)
            commit(types.AUTH_STATE_MUTATE)
        })
        .catch(error => {
            commit(types.AUTH_STATE_MUTATE)
            console.log(error)
        });
    },
    [types.SIGN_OUT_ACTION] : ({commit}) => {
        // axios.post('/sign_up_with_email')
        // .then(reponse => {
            commit(types.SIGN_OUT_MUTATE)
            localStorage.removeItem('token')
            localStorage.removeItem('expirationDate')
            router.replace('/login')
        //   })
        //   .catch(error => console.log(error));
    },
    [types.AUTO_LOGOUT_ACTION] : ({commit}, expiration) => {
        setTimeout(() => {
            commit(types.SIGN_OUT_MUTATE) 
        }, expiration)
    },
    [types.AUTO_LOGIN_ACTION] : ({commit}) => {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const expirationDate = localStorage.getItem('expirationDate')
        const now = new Date()
        if (now >= expirationDate) {
            return
        }
        commit(types.LOGIN_MUTATE, {token:token})

    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}