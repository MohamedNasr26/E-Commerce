import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  sliderImages:string[] = [
    './assets/imges/home/slider1.webp',
    './assets/imges/home/slider2.webp',
    './assets/imges/home/slider3.webp',
    './assets/imges/home/slider4.avif',
    './assets/imges/home/slider5.avif',
    './assets/imges/home/slider6.webp',
    './assets/imges/home/slider7.webp',
    './assets/imges/home/slider8.webp'
  ]
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
}
