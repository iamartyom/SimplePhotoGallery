import { Component } from '@angular/core';

@Component({
    selector: 'gallery',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
    };

    images: string[] = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
}