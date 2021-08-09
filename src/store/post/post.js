import {createBlogpost as createPost} from '../../graphql/mutations'
import {API, graphqlOperation} from 'aws-amplify';
import {  getBlogpost as getPostQuery} from '../../graphql/queries';
import {listBlogposts as listPostQuery}from '../../graphql/queries';
import { deleteBlogpost  as deletePostMutation} from '../../graphql/mutations'


export const postInfo ={

    namespaced: true,
    state: { posts: null},
    mutations:{
        setPosts(state, payload){
            state.posts = payload;
        }
    },
    actions:{
       async createPost(_, newPost){
           try{
            await API.graphql(graphqlOperation(createPost,{input: newPost }))
           }catch(err){
            console.log( "CreatePost ", err)
           }
       },
       async getPost(_, id){
            return API.graphql(
                graphqlOperation(getPostQuery,{id: id})
            )
    },
       async getPostsData({commit}){
           const postsData = await API.graphql(graphqlOperation(listPostQuery));
           commit('setPosts', postsData.data.listBlogposts.items);
       },

      async deletePost(_, id){
          try{
            await API.graphql(graphqlOperation(deletePostMutation,{input: {id: id}}));
          }catch(err){
              console.log(err);
          }
      
       }


    },
    getters: {
        posts: state => state.posts,
    }
   
    
} 
