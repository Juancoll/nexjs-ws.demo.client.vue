<template>
    <div id="app">
        <h1>nexjs-ws.demo-project.client-vue</h1>
        <img class="logo" alt="Vue logo" src="./assets/icon_256.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
        <WSConnectionComponent />
        <WSBaseContractComponent />
        <WSCredentialContractComponent />
        <WSAuthContractComponent />
        <HttpApiComponent />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WSConnectionComponent from './components/WSConnectionComponent.vue';
import WSBaseContractComponent from './components/WSBaseContractComponent.vue';
import WSCredentialContractComponent from './components/WSCredentialContractComponent.vue';
import WSAuthContractComponent from './components/WSAuthContractComponent.vue';
import HttpApiComponent from './components/HttpApiComponent.vue';

@Component({
    components: {
        WSConnectionComponent,
        WSBaseContractComponent,
        WSCredentialContractComponent,
        WSAuthContractComponent,
        HttpApiComponent
    }
})
export default class App extends Vue {
    constructor() {
        super();
        console.log('[App] constructor');
    }
    mounted() {
        console.log('[App] mounted');
    }
    destroyed() {
        console.log('[App] destroyed');
    }
}
</script>

<style lang="scss">
html,
body {
    margin: 0px;
    padding: 0px;
    background-color: lightgray;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    padding: 10px;
}
button {
    width: 100px;
    height: 28px;
    color: #ed1e79;
    background-color: transparent;
    border: #ed1e79;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
}
input {
    height: 25px;
    border: #ed1e79;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin-right: 5px;
}
.logo {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
}
h2 {
    color: gray;
}
</style>
