<template>
  <div class="container" >
      
       <div>
         <h1>Create post </h1>
           <br>
    <span>Title</span>
    <br>
     <input style="height: 30px; width: 300px;" type="text" v-model="title"/> 

     <br>
     <span>Description</span>
     <br>
     <textarea type="text" style="height: 100px; width: 300px;"  v-model="description" />
     <br>
       <button style="margin-top: 10px;" @click="createpost"> Submit </button>
       </div>
 
  </div>
   
</template>
<script>
// import { API } from 'aws-amplify';
// import {createBlogpost} from '../graphql/mutations'
export default {
    name: 'create-post',
    data(){
      return{
        title: '',
      description: '',
      }
    },

    methods:{
       async createpost() {
         
      const { title, description } = this;
      if (!title || !description) return;
      const newPost = { title, description };
      // this.Blogpost = [...this.Blogpost, Blogpost];
      // await API.graphql({
      //   query: createBlogpost,
      //   variables: {input: Blogpost},
      // });

      await this.$store.dispatch("postInfo/createPost", newPost)
       
    this.title= '';
      this.description='';
      this.$router.push('/')
   
    },
    }


}
</script>
<style>
.container{
    display: flex;
   justify-content: center;
    margin-left: 100px;
    margin-right: 100px;
    padding-left: 100px;
    padding-right:100px ;
    background-color: rgb(245, 245, 245);
   
    
}




</style>
