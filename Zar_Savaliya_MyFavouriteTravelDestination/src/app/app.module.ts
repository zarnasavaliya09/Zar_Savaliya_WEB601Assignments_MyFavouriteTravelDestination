import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
