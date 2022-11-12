<template>

    <div class="registro_user">
        <div class="container_registro_user">
            <h2>Registrarse</h2>
            
            
            <form v-on:submit.prevent="processregistro">
                <input type="text" v-model="user.nombres" placeholder="nombre">
                <br>
                <input type="text" v-model="user.apellidos" placeholder="apellido">
                <br>
                <input type="text" v-model="user.ciudad" placeholder="ciudad">
                <br>
                <input type="password" v-model="user.password" placeholder="password">
                <br>
                <input type="text" v-model="user.departamento" placeholder="departamento">
                <br>
                <input type="text" v-model="user.direccion" placeholder="direccion">
                <br>
                <input type="email" v-model="user.email" placeholder="email">
                <br>
                <input type="text" v-model="user.telefono" placeholder="telefono">
                <br>                               
                <button type="submit">Registrarse</button>                 
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: "registro",

    data:function(){
        return{
            user:{
                nombres: "",
                apellidos: "",
                ciudad: "",
                password: "",
                departamento: "",
                direccion: "",
                email: "",
                telefono: "",
            }
        }
    },

    methods: {
    processregistro: function(){
            axios.post(
            "https://pet-control-app.herokuapp.com/user/",
                this.user,
                {headers:{}}
            )
            .then((result) => {
                let dataregistro ={
                    email: this.user.email,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                }

                this.$emit('completedregistro', dataregistro)
            })
            .cath((error) => {
                console.log(error)
                alert("ERROR:  Fallo en el registro");
            });
        }
    }
}
</script>
<style>
    
    .registro_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%; 
    
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .container_registro_user{
        border: 3px solid #000000;
        border-radius: 10px;
        width: 25%;
        height: 60%;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .registro_user h2{
        color: #000000;
    }
    
    .registro_user form{
        width: 70%;
    }
    .registro_user input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #000000;
    }
    
    .registro_user button{
        width: 100%;
        height: 40px;
        color: #E5E7E9;
        background: #9932cc;
        border: 1px solid #E5E7E9;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    
    .registro_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #000000;
    }
    </style>
    
    
        
    

