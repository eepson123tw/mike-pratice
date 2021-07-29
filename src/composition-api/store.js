import { reactive } from 'vue'

const store = reactive({

  repoList: [],
  user: {
    photo: '',
    name: 'eepson123tw'
  },
  isChange: false
})

const setRepoList = (repos) => {
  store.repoList.push(...repos)
}
const setUserTitle = ({ login, avatar_url: url }) => {
  store.user.photo = url
  store.user.name = login
}

const reSetRepoList = () => {
  store.repoList = []
}

export default { store, setRepoList, setUserTitle, reSetRepoList }
