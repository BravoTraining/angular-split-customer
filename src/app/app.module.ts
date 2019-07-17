import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';
import { BravoSplitComponent } from './controller/BravoComponent/bravo-split.component';
import { BravoAreaDirective } from './controller/bravo-area.directive';

@NgModule({
  declarations: [
    AppComponent,
    SplitAreaDirective,
    BravoSplitComponent,
    BravoAreaDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
