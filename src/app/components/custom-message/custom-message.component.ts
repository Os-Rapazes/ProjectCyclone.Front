import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core'
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-custom-message',
  templateUrl: './custom-message.component.html',
  styleUrls: ['./custom-message.component.scss']
})
export class CustomMessageComponent implements OnInit {

  public message : string = ''
  
  constructor(@Inject(MAT_SNACK_BAR_DATA) private data : any) {
    this.message = data
   }

  ngOnInit(): void {
  }

}
