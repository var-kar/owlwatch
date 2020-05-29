import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ControlsComponent } from './Component/controls/controls.component';
import { SearchComponent } from './Component/search/search.component';

@NgModule({
	declarations: [ AppComponent, HeaderComponent, ControlsComponent, SearchComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
