<template>
         <div class="container">
     
   

     <div class="postContainer"> 
        <h1>Posts view</h1>
        <br>
        <div class="card" v-for="post in posts" v-bind:key="post.id"  @click="viewPost(post)">
            <strong> {{post.title}}</strong>
              <p style="font-weight:bold;  color: gray; border: solod green 3px; border-radius: 5px;">{{  new Date(post.createdAt)  | fulldate}}</p>
         <br>
         <p>{{post.description}}</p>
         <br>
       
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
    async mounted(){
        this.$store.dispatch('postInfo/getPostsData');
    },
    data: () => ({postTitle:"", rerror: ""}),
    methods: {
        viewPost(post){
            this.$router.push(`/post/${post.id}`)
        },
    //       moment: function () {
    // return moment();
//   }

    },
    computed: {
        ...mapGetters({
       posts: 'postInfo/posts'  
        })
    },
   filters:{
       fulldate(value){
          return moment(value).fromNow();
       }
   }

}
</script>
<style >
.card{
  height:auto;
  width: 300px;
  border-radius: 5px ;
  box-shadow: 5px;
  background-color: white;
  padding: 10px;
  margin: 20px;
}
</style>