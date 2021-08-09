import {Auth,} from 'aws-amplify';
export const auth = {
    namespace: 'true',
    state: {
        user : null
    },
    mutation: {
        setUser(state, payload){
                state.user = payload;

        }
    },
    actions: {
        async logout({commit}){
             commit('setUser',null);
             return await Auth.signOut();     
        },
        async  login({commit}, {username, password}){
            try{
                await Auth.signIn({
                    username, 
                    password
                });

                const userInfo = await Auth.currentUserInfo();

                commit('setUser', userInfo);
                return Promise.resolve('success');
    
            }catch(err){
                console.log(err);
                return Promise.reject('failed')

            }
        },
        async confirmSignUp(_, {username, code}){
            try{
                await Auth.confirmSignUp(username, code);
                return Promise.resolve("success");


            }catch(err){
                 console.log(err);
                 return Promise.reject(err);


            }
        },
        async signUp(_,{username, password, email}){
            try{
              await Auth.signUp({
                  username,
                  password,
                  attributes:{
                      email,

                  }
              });
              return Promise.resolve("success");

            }catch(err){
                 console.log(err);
                 return Promise.reject(err);

            }

        },

        async authAction({commit}){
            const userInfo = await Auth.currentUserInfo();
            commit('setUser', userInfo);

        }



    },
    getters:{
        user: (state) => state.user ,


    }
}