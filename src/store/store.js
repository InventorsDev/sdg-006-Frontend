import { createStore } from "vuex" 
import authentication from '../store/modules/Authentication'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const store = createStore({
   state:{
      name: "Vue"
   },
   getters,
   mutations,
   actions, 
   modules : {
      authentication
   }
})

export default store