<template>
    <footer>
        <div class="footer">
            <p>Contact : anne-lise-ribeiro@hotmail.com</p>
            <p class="copyright">© All right reserved Anne-Lise Ribeiro</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterContainer'
}
</script>

<style type="text/scss" lang="scss" scoped>
    footer {
        display: block;
        height: 8vh;
        width: 100vw;
        background-color: #E2C491;

        .footer {
            height: 8vh;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
            font-size: 24px
        }

        .copyright {
            font-size: 18px;
            width: 20vw;
            text-align: center;
        }
    }
</style>