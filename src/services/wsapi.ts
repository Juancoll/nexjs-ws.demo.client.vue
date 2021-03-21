import { WSApi, User } from '../lib/wsclient'
import { SocketIOClient } from '@nexjs/wsclient'

console.log( 'create wsapi' )
export const wsapi = new WSApi<User, string>( new SocketIOClient() )