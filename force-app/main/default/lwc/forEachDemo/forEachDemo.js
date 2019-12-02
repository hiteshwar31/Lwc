import {LightningElement,wire} from 'lwc';
/* eslint-disable no-console */
 /* eslint-disable no-alert */
import apxMethod from '@salesforce/apex/hitesh31.getContactList.getContLst';
export default class foEchCls extends LightningElement{
    @wire(apxMethod)contList;
    
    
}