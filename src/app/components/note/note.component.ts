import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  animations: [
    trigger(
      'appearAnimation', 
      [
        transition(
          '* => *', 
          [ 
            style({ opacity: 0, transform: "scale(0,0)" }),
            animate('.2s ease-out', 
                    style({ opacity: 1, transform: "scale(1,1)" }))
          ]
        )        
      ]
    )
  ]
})
export class NoteComponent implements OnInit {

  @Input() noteText: string = "";
  @Input() noteAuthor: number = 0;    
  rotationStyle: string = "";
  colorBG: number = 0;  

  constructor() { }


  ngOnInit(): void {
    this.rotationStyle = "rotate(" + Math.floor(Math.random() * 20) + "deg)"
    this.colorBG = Math.floor(Math.random() * 4);    
  }  
}
