<template>
       <div class="container2">
           <div class="flex2">
               <button  @click="deletePost(post.id)" style="margin-right: 20px ;"> delete</button>
           </div>
           <h2>{{post.title}}</h2>
           <br>
           <h3>{{post.description}}</h3>
       </div>

</template>


<script>
export default{

    name: 'post-view',
    data:()=>({
       post:null,
       albumName: "" 
    }),
    async mounted(){
  
             const id =    this.$route.params.id ;
            const post = await this.$store.dispatch('postInfo/getPost', id);
            this.post = post.data.getBlogpost;
            console.log(this.post);
     
    },
    methods: {
      async deletePost(){
          const id =   this.$route.params.id ;
         await this.$store.dispatch('postInfo/deletePost',id )
         alert('successfully deleted')
         this.$router.push('/');
       }
       
    },
    computed: {
        
    }
}
</script>
<style scoped>
.container2{
 margin: 100px;
 background-color: rgb(231, 229, 227);
 padding: 10px;
}
.flex2{
    display: flex;
    flex-direction: row-reverse;
   
}
</style>
