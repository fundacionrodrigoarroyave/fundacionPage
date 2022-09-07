import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(numero:number){
  
    if(numero/2 != 0){
      let button = <HTMLButtonElement> document.getElementById('btnSend');
      button.disabled= false;
    }else{
      let button = <HTMLButtonElement> document.getElementById('btnSend');
      button.disabled = true;  
     
    }    
    
  }

}
