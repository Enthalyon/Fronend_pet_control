<template>

  <div id="app" class="app">
    <div class="header"> 

    <h1>Pet Control</h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadinicio"> Inicio </button>
        <button v-if="is_auth">Cuenta</button>
        <button v-if="is_auth" v-on:click="desconectar"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadconectar"> Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadregistro"> Registrarse </button>
      </nav> 
    </div>
  </div>
  <div class="main-component">
        <router-view
          v-on:completedconectar="completedconectar"
          v-on:completedregistro="completedregistro"
          v-on:desconectar="desconectar"
        >
        </router-view>
    </div>
     
      <div class="footer">
          <h2>Petcontrol 2022</h2>
      </div>
</template>

<script> 
  export default {
    name: 'App',
  
    data: function(){
      return{
        is_auth: false  
      }
    },
  
    components: {
    },
    
    methods: {
      verifyAuth: function(){
        this.is_auth = localStorage.getItem("isAuth") || false;
        if(this.is_auth == false)
          this.$router.push({name: "conectar"});
        else 
          this.$router.push({name: "inicio"});
      },
  
      desconectar: function(){
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
      },
  
      loadinicio: function(){
        this.$router.push({name:"inicio"});
      },
  
      loadconectar: function(){
        this.$router.push({name: "conectar"})
      },
  
      loadregistro: function(){
        this.$router.push({name: "registro"})
      },
      
      
       completedconectar: function(data){
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.user.useremail);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);
        alert("Autenticación Exitosa");
        this.verifyAuth();
      },
      completedregistro: function(data){
        alert("Registro Exitoso");
        this.completedconectar(data);
      },
    },
  
    created: function(){
      this.verifyAuth()
    }
  }
  </script>
  <style>
      body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;

    background-color: 	#20b2aa;
    color: #E5E7E9;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
    font-style: italic;
  }

  .header nav {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
 
  .header nav button{
    color: #E5E7E9;
    background: #9932cc;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
 
  .header nav button:hover{
    color: #20b2aa;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #20b2aa;
    color: #E5E7E9;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  </style>
