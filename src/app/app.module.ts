import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ControlsComponent } from './Component/controls/controls.component';
import { SearchComponent } from './Component/search/search.component';

import { SearchService } from './Service/search.service';

@NgModule({
	declarations: [ AppComponent, HeaderComponent, ControlsComponent, SearchComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [ SearchService ],
	bootstrap: [ AppComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
