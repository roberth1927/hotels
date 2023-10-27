import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';


interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input()images: carouselImage[] = []
  @Input() indicators = true
  @Input() controls = true
  @Input() autoSlide = false
  @Input() slideinterval = 7000

  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages()
    }

  }

  autoSlideImages(){
    setInterval(() => {
      this.onNextClick();
    }, this.slideinterval)
  }

  selectedImage(index: number): void {
     this.selectedIndex = index

  }

  onPrevClick(): void {
    if (this.selectedIndex ===0) {
      this.selectedIndex = this.images.length -1;
    } else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

}
