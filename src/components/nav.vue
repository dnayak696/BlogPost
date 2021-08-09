<template >
    <div class="flexContainer">
        <ul>
            <li>
               <router-link to="/" >
                 Home  
               </router-link> 
            </li>
            <li v-if="!user"> 
                <router-link to="/login">
                Login
                </router-link>
            </li>
            <li v-if="!user">
                <router-link to="/signup">
                Sign Up
                </router-link>
            </li>
            <li v-if="user">
             <span @click="logout">Logout</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    methods: {
        async logout(){
            await this.$store.dispatch("auth/logout");
            this.$router.push('/')
        },

    },
    computed: {
        ...mapGetters({
            user: "auth/user", 
        })
    }
}
</script>
<style >
li {
  display: inline;
  padding-right: 10px;
}
    
.flexContainer{
 display: flex;

 flex-direction: row-reverse;

}
</style>