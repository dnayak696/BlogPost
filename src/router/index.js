import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';

import CreatePost from '../views/createPost.vue';
import LoginComponent from '../views/login.vue';
import SignUpComponent from '../views/signUp.vue';
import PostViewComponent from '../views/postView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
     path: '/create-post',
     component: CreatePost
  },
  {
    path: '/post/:id',
    component: PostViewComponent
  },

  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/signup',
    component: SignUpComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
