<template >
    <div class="container">
        <form
         v-if="!confirmPassword"
         @submit.prevent = "signup"
        >
        <div >
            <span>User Name</span>
            <br>
            <input style="height: 30px; width: 300px;" v-model="username"/>
            <br>
            <span>Password</span>
            <br>
            <input style="height: 30px; width: 300px;" v-model="password"/>
            <br>
            <span> Email</span>
            <br>
            <input style="height: 30px; width: 300px;" v-model="email"/>
            <br>

            <button type="submit">Sign Up</button>

        </div>

        </form>
         <div v-if="error">{{error.message}}  </div>
         <div v-if="confirmPassword">
             <h3>Enter your code. Please check your email</h3>
             <br>
             <span>Code</span>
             <br>
             <input style="height: 30px; width: 300px;" v-model="code"/>
             <br>
             <button style="width: 300px;height: 100px; padding:10px" @click="confirmSignUp">ConfirmCode</button>
         </div>
    </div>
</template>
<script>
export default {
    data: ()=> ({
        username: '',
        password: '',
        email: '',
        error: " ",
        confirmPassword: false,
        code: ''
    }),
    methods: {
        async signUp(){
            if(!this.email|| !this.password){
                return;
            }
            try{
                    await this.$store.dispatch("auth/signUp",{
                        username: this.username,
                        password: this.password,
                        email: this.email,
                    });

                    this.confirmPassword = true;
            }catch(err){
                this.error = err;
            }
        },
        async confirmSignUp(){
            if(!this.username || !this.code){
                return;
            }
            try{

                const {username, password, code} = this;
                 await this.$store.dispatch("auth/confirmSignUp",{
                     username: username,
                     code: code
                 });
                 await this.$store.dispatch('authlogin',{
                     username,
                     password
                     });
            this.$router.push('/');
            }catch(err){
                 console.log(err);
                 this.error = err;
            }
        }
            }
}
</script>
<style >
 button{
height: 30px;
 width: 100px;

 }
    
</style>