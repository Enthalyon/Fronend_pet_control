import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import conectar from './components/conectar.vue'
import desconectar from './components/desconectar.vue'
import inicio from './components/inicio.vue'
import registro from './components/registro.vue'
import productos from './components/productos.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/conectar/',
  name: 'conectar',
  component: conectar
},
{
  path: '/user/desconectar',
  name: 'desconectar',
  component: desconectar
},
{
  path: '/',
  name: 'inicio',
  component: inicio
},
{
  path: '/user/',
  name: 'registro',
  component: registro
}, 
{
  path: '/',
  name: 'productos',
  component: productos
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router