<template>
    <div class="container">
        <form>
            <h3>Login Here</h3>
            <span>Email </span>
            <br/>
            <input v-model="email"/>
               <br/>

            <span>Password</span>
               <br/>
            <input  width="500px" v-model="password"/>
               <br/>
               <button>Login</button>
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data: () =>({
        username: "",
        password: "",
        email: '',
        error: '',
    }),

    methods: {
        ...mapActions({
            loginVue: 'auth/login',
        }),
        async login(){
            try{
                await this.loginVue({
                    username : this.username,
                    password: this.password
                }); 

            }catch(err){
                this.error = err;
            }
        }
    }
        

    
}
</script>
<style>
button{
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: rgb(69, 69, 218);
    color: white;
    font-weight: bold;
    width: 100px;
}
    
</style>