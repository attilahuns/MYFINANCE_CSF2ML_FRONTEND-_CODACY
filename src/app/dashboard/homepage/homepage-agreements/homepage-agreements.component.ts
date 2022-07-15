import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'f2ml-homepage-agreements',
  templateUrl: './homepage-agreements.component.html',
  styleUrls: ['./homepage-agreements.component.scss']
})
export class HomepageAgreementsComponent implements OnInit {

  slideIndex: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n:number) {
    this.showSlides(this.slideIndex = n);
  }

 showSlides(n: number) {
    let slides = document.getElementsByClassName("home__agreements__slider__slide") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("home__agreements__slider__dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }
}
