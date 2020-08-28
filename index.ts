import { VK } from 'vk-io';
import { Utils } from './utils';

const utils = new Utils();

const vk = new VK({
    token: "",
    pollingGroupId: 0
});

const { api, updates } = vk;

updates.on('message', (ctx)=>{
    const AIText:Array<string> = utils.split(ctx.text);
    utils.addWord(AIText[0]);
    const words = utils.getWords();
    let msg = "";
    const colWords = words.length - Math.floor(Math.random() * words.length);
    for(let i = 0; i < colWords; i++){
        msg += (words[Math.floor(Math.random() * words.length)]) + " ";
    }
    
    ctx.send(msg[0].toLocaleUpperCase() + msg.slice(1));
});

updates.startPolling();