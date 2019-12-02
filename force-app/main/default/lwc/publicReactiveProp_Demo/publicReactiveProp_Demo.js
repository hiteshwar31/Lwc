import {LightningElement,api} from 'lwc';
export default class publicReactiveDemo extends LightningElement{
     myName = 'HITESH';
    changHandler(){
        this.myName = 'MARNI';
    }
}