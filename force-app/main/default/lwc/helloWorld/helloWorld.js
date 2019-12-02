import {LightningElement,track} from 'lwc';

export default class helloWorld extends LightningElement {
   @track greeting = 'Hitesh';
    handleChange(event){
        this.greeting = event.target.value
    }
}