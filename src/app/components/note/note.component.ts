import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() noteText: string = "";
  @Input() noteAuthor: number = 0;    
  get rotationStyle() { return "rotate(" + Math.floor(Math.random() * 20) + "deg)" }
  get colorBG() { return Math.floor(Math.random() * 4) }

  constructor() { }

  ngOnInit(): void {
  }

}
