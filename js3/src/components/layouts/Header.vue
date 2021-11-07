<template>
    <header> 
        <nav class="container">
            <a href="/"><img src="https://jnetce.com.br/wp-content/uploads/2021/01/cropped-LOGO-JNET-1.png.webp" alt="LOGO" id="logo"> </a>
            <img src="@/assets/menu.svg" alt="menu" id="menu-button" @click="openMenu">
        
            <div id="menu-overlay" v-if="menuActive" @click="closeMenu"></div>
           
            <div id="menu-items" :class="{ativo: menuActive }">
                <img src="https://jnetce.com.br/wp-content/uploads/2021/01/cropped-LOGO-JNET-1.png.webp" alt="menu-logo" id="menu-logo">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Operacional</a></li>
                    <li><a href="/">Financeiro</a></li>
                    <li><a href="/">Estoque</a></li>
                    <li><a href="/">Relatórios</a></li>
                </ul>
            </div>
        </nav>
    </header>
    
    
</template>

<script>

export default {
    name: 'Header',
    data(){
        return {
            menuActive : false
        }
    },
    methods:{
        openMenu: function(){
            this.menuActive = true
        },
        closeMenu: function(){
            this.menuActive = false
        }
    }
}
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;

    }

    #logo{
        width: 130px;
    }
    #menu-button{
        width: 30px;
    }

    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    
    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: #FFFFFF;
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.ativo {
        display: flex;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul li{
        margin: 20px 0px;
    }

    ul li a{
        color: var(--color-text-menu);
    }

    @media(min-width:700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-items{
            background-color: var(--color-background-nav);
            color: var(--color-text-light) !important;
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items:center;
        }

        ul li{
           margin: 0;
           margin-left: 20px;
        }

        ul li a{
            color: var(--color-text-light);
        }
        
    }
</style>
