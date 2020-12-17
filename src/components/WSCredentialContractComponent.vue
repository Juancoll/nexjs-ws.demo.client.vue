<template>
    <div style="text-align: left">
        <h2>@nexjs/ws - Credential Contract</h2>
        <ul>
            <li>
                <button @click="subscribe">subscribe</button>
                <button @click="unsubscribe">unsubscribe</button>
            </li>
            <li>
                <button @click="print">send</button>
                demo.print()
            </li>
            <li>
                <button @click="notify">send</button> demo.notify()
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { wsapi } from '@/services/wsapi'

@Component
export default class WSCredentialContractComponent extends Vue {
    url = 'http://localhost:3000';

    constructor () {
        super()
        console.log( '[WSCredentialContractComponent] constructor()' )
    }

    async mounted (): Promise<void> {
        console.log( '[WSCredentialContractComponent] mounted()' )
        wsapi.credentialsContract.onUpdate.on( () =>
            console.log( '[credentialContract] onUpdate' ),
        )
        wsapi.credentialsContract.onDataUpdate.on( data =>
            console.log( '[credentialContract] onDataUpdate', data ),
        )
    }
    async destroyed (): Promise<void>{
        console.log( '[WSCredentialContractComponent] destroyed()' )
        wsapi.credentialsContract.onUpdate.off()
        wsapi.credentialsContract.onDataUpdate.off()
    }

    async subscribe (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] subscribe request' )
            await wsapi.credentialsContract.onUpdate.sub( 'user-credentials-001' )
            await wsapi.credentialsContract.onDataUpdate.sub(
                'user-credentials-002',
            )
            console.log( '[WSCredentialContractComponent] subscribe response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async unsubscribe (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] unsubscribe request' )
            await wsapi.credentialsContract.onUpdate.unsub()
            await wsapi.credentialsContract.onDataUpdate.unsub()
            console.log( '[WSCredentialContractComponent] unsubscribe response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async print (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] print() request' )
            await wsapi.credentialsContract.print( )
            console.log( '[WSCredentialContractComponent] print() response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async notify (): Promise<void>{
        try {
            console.log( '[WSCredentialContractComponent] notify() request' )
            await wsapi.credentialsContract.notify()
            console.log( '[WSCredentialContractComponent] notify() response' )
        } catch ( err ) {
            console.warn( err )
        }
    }
}
</script>
