import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  @Input() titleFlip: string;
  @Input() textFlip: string;
  @Input() groupImg: string;

  groupImg1:any[] = [
    {
      "url" : "image1"
    },
    {
      "url" : "image2"
    },
    {
      "url" : "image3"
    },
    {
      "url" : "image4"
    },
    {
      "url" : "image5"
    },
    {
      "url" : "image6"
    },
    {
      "url" : "image7"
    },
    {
      "url" : "image8"
    },
    {
      "url" : "image9"
    },
    {
      "url" : "image10"
    },
  ];

  groupImg2:any[] = [
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
  ];

  groupImg3:any[] = [
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
  ];

  groupImg4:any[] = [
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
  ];

  groupImg5:any[] = [
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
    {
      "url" : ""
    },
  ];

  constructor() { }

  ngOnInit() {}

}
