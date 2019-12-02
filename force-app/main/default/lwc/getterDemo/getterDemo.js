import {LightningElement,track } from 'lwc';
export default class getrCls extends LightningElement{
    @track fName='';
    @track lName='';
    changeHandler(event){
    const field = event.target.name;
    if(field === 'FName'){
        this.fName = event.target.value;
    }else{
        this.lName = event.target.value;
    }
    }
    get displayFullName(){
        return `${this.fName}${this.lName}`;
    }
   

}