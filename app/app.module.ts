import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
    imports: [ BrowserModule, SwiperModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}