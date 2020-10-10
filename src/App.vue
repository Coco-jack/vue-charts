<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    height: 100vh;
    width: 100vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: url("./assets/images/background.png") no-repeat;
    background-size: 100% 100%;
}

* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 100px;
}

.el-message__icon {
    font-size: .24rem;
}
</style>
