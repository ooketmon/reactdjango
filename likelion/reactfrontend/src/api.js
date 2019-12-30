import axios from "axios"

axios.default.baseURL = "http://223.194.45.84:8000/api"

export default {    

    //모든 글 불러오기
    getAllPosts() {
        return axios.get('/posts/')
    },

    //글 작성하기
    createPost(data) {
        return axios.post('/posts/', data)
    },

    deletePost(id) {
        return axios.delete('/posts/'+String(id))
    }

}

