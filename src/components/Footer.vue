<template>
    <footer>
        <div class="footer">
            <p>Contact : Anne-Lise-Ribeiro@hotmail.com</p>
            <p class="copyright">© All right reserved Anne-lise Ribeiro</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style type="text/scss" lang="scss" scoped>
    footer {
        display: block;
        height: 5vh;
        width: 100vw;
        background-color: #E2C491;

        .footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
            font-size: 24px
        }

        .copyright {
            font-size: 18px;
            width: 10vw;
            text-align: center;
        }
    }
</style>