import { Component, OnInit, Input } from '@angular/core';
import { Breed } from '../breed';


@Component({
  selector: 'app-image-detail-breed',
  templateUrl: './image-detail-breed.component.html',
  styleUrls: ['./image-detail-breed.component.css']
})
export class ImageDetailBreedComponent implements OnInit {

  @Input() breed: Breed;;

  constructor() { }

  ngOnInit() {
  }

}
