import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    value:any;
    allowCustomValue:boolean = false;
    comboConstants:Array<Object> = [
        {id: 'value1', text: 'value1'},
        {id: 'value2', text: 'value2'},
        {id: 'value3', text: 'value3'},
        {id: 'value4', text: 'value4'},
        {id: 'value5', text: 'value5'},
        {id: 'value6', text: 'value6'}
    ];
}