<template>
    <div style="text-align: left">
        <h2>Http Api (from swagger specs - nestjs server)</h2>
        <ul>
            <li>
                <input type="text" :value="url" />
                <button @click="setUrl">set</button>
            </li>
            <li>
                <button @click="getDefault">send</button>
                /api
            </li>
            <li>
                <button @click="getPackage">send</button> /api/package
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { httpApi } from '@/services/httpapi';

@Component
export default class HttpApiComponent extends Vue {
    public url = httpApi.url;

    constructor() {
        super();
        console.log('[HttpApiComponent] constructor()');
    }

    async mounted() {
        console.log('[HttpApiComponent] mounted()');
    }
    async destroyed() {
        console.log('[HttpApiComponent] destroyed()');
    }

    setUrl() {
        httpApi.url = this.url;
    }

    async getDefault() {
        try {
            console.log('[HttpApiComponent] /api request');
            const response = await httpApi.default.appControllerGetHello();
            console.log('[HttpApiComponent] /api response', response.data);
        } catch (err) {
            console.warn(err);
        }
    }
    async getPackage() {
        try {
            console.log('[HttpApiComponent] /api/package request');
            const response = await httpApi.default.appControllerGetPackage();
            console.log(
                '[HttpApiComponent] /api/package response',
                response.data
            );
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
