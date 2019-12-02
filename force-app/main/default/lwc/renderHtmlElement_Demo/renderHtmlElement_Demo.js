/* eslint-disable no-unused-vars */
import {LightningElement,track} from 'lwc';
import tmpltOne from './helloWorld.html';
export default class rendrHtmlEle extends LightningElement{
    @track showDetails = false;
    changeHandler(event){
        this.showDetails = event.target.checked;
    }
}