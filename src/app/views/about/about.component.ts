import { Participant, participants } from './../../models/participants.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public participants : Participant[] = participants

  constructor() { }

  ngOnInit(): void {
  }


}
