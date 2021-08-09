<template>
    

    <div class="container">
     
   

     <!-- <div class="postContainer"> 
        <h1>Posts view</h1>
        <br>
        <div class="card" v-for="post in posts" v-bind:key="post.id"  @click="viewPost(post.id)">
          <strong> {{post.title}}</strong>
         <br>
         <p>{{post.description}}</p>
         <br>
         <p>{{post.id}}</p>
         <br>
         <p>{{post.createdAt}}</p>

        </div> -->
         
     <!-- </div> -->

  <PostComponent/>

    </div>
</template>
<script>
// import { API } from 'aws-amplify';
// import { listBlogposts } from '../graphql/queries';

import  PostComponent from '../components/posts.vue'

export default {
    name: 'home',
    components:{
      PostComponent,
    },
    monted(){
      
    },
    async created() {
    // this.getPosts();
  },
    data(){
      return{
        posts: []
      }
    },
    methods:{
     async getPosts() {
      // const posts = await API.graphql({
      //   query: listBlogposts
      // });
      // this.posts = posts.data.listBlogposts.items;
    },
    viewPost(){

    }


    }

}
</script>

<style scoped>

.postContainer{
 align-content: center;
}
.card{
  height:auto;
  width: 300px;
  border-radius: 5px ;
  box-shadow: 5px;
  background-color: white;
  padding: 10px;
  margin: 5px;
}
</style>
