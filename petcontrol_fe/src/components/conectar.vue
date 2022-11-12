<template>

    <div class="conectar_user">
        <div class="container_conectar_user">
            <h2>Iniciar Sesión</h2>

            <form v-on:submit.prevent="processconectaruser">
                <input type="email" v-model="user.email" placeholder="correo">
                <br>
                <input type="password" v-model="user.password" placeholder="Constraseña">
                <br>
                <button type="submit">Iniciar Sesión</button>                 
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "conectar",

    data: function(){
        return{
            user: {
                username: "",
                password: ""
            }
        }
    },
    
    methods: {
        processconectaruser: function(){
            axios.post(
                "https://pet-control-app.herokuapp.com/login/",
               this.user,
               {headers:{}}
            )
            .then((result) =>{
                let dataconectar ={
                    username: this.user.useremail,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                }

                this.$emit('completedconectar', dataconectar)
            })
            .cath((error) => {

                if(error.response.status == "401")
                    alert("ERROR 401: Credenciales Incorrectas");
            });
        }
    }
}
</script>

<style>
    
.conectar_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%; 

    display: flex;
    justify-content: center;
    align-items: center;
}

.container_conectar_user{
    border: 3px solid #000000;
    border-radius: 10px;
    width: 25%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.conectar_user h2{
    color: #000000;
}

.conectar_user form{
    width: 70%;
}
.conectar_user input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #000000;
}

.conectar_user button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #9932cc;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
}

.conectar_user button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #000000;
}
</style>


    
