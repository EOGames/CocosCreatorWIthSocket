import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import  io  from 'socket.io-client/dist/socket.io.js';
@ccclass('Test')
export class Test extends Component {
    start() {
    }
    protected onLoad(): void {
        const socket = io(`http://127.0.0.1:5000`); 
        socket.on('connect', function(){
            console.log('You have connected to the socket.io server.');
        });

        socket.on('connect_error', function(){
            console.log('connect_error');
        });

        socket.emit('chat message','Hello from cocos');
        socket.on('fromServer',(msg)=>
        {
            console.log('from server',msg);
        });

    }

    update(deltaTime: number) {
        
    }
}


