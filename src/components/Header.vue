<template>
    <header>
        <div class="header">
             <router-link class="card-link" to="/" exact><p>Anne-Lise Ribeiro</p></router-link>
            <div class="container-menu">
                <div class="menu" v-on:click="dropDownLlist">
                    <p>Menu</p>
                    <img src="">
                </div>
                <div id="drop-down-list" class="drop-down-list">
                    <ul class="drop-down-list-ul">
                        <router-link class="card-link" to="/" exact><li>Accueil</li></router-link>
                        <router-link class="card-link" to="/Recherches" exact><li>Recherches</li></router-link>
                        <router-link class="card-link" to="/Collection" exact><li>Collection</li></router-link>
                        <router-link class="card-link" to="/Imprimes" exact><li>Imprimés</li></router-link>
                        <router-link class="card-link" to="/Inspiration" exact><li>Inspirations</li></router-link>
                    </ul>
                </div>
            </div>
            
        </div>
    </header>    
</template>

<script>
export default {
    name: 'HeaderContainer',
    methods:{
        dropDownLlist : function DropDownList() {
            let element = document.getElementById("drop-down-list");
            element.classList.toggle("show-drop-down-list");
    } 
}
}


</script>

<style type="text/scss" lang="scss" scoped>
    header {
        display: block;
        height: 70px;
        width: 100vw;
        background-color: white;
        border-bottom: solid 2px #E2C491;
        position: fixed;
        z-index: 99;
        

        .header {
            height: 70px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
            font-size: 30px;
            font-weight: 500;

            .card-link {
                text-decoration: none;
                color: black;
            }

            .drop-down-list {
                display: none;
                background-color: white;
                border: solid 2px #E2C491;
                transition: 0.4s;
                position: absolute;
                top: 100%;

                .drop-down-list-ul {
                    display: flex;
                    flex-direction: column;
                    padding-left: 20px;
                    padding-right: 20px;
                    margin-top: 10px;
                    margin-bottom: 10px;

                     li {
                         line-height: 35px;
                        list-style-type: none;
                        font-size: 24px;
                    }
                }
               
            }

            .show-drop-down-list {
                display: inherit;
                transition: 0.4s;
            }
        }

        .container-menu {
            height: 35px;
            display: flex;
            flex-direction: column; 
            align-items: center;

            .menu {
                display: flex;
                position: relative;
            }
        }
    }
</style>