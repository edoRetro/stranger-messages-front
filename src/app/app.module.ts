import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { NoteComponent } from './components/note/note.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NoteComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    NgbModalModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
