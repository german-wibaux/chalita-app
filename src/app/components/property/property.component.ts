import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { PropertyInterface } from '../../models/propiedadInterface';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property!: PropertyInterface | undefined;
  images = [] as any;
  slides = [] as any;
  activeSlideIndex = 0;
  url: SafeResourceUrl | undefined;

  constructor(private propertyService: PropertyService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.propertyService.getProperty()
    this.route.params.subscribe(result => {
      this.propertyService.getProperty(result['id']).subscribe(resultProp => {
        this.property = resultProp;
        this.slides = this.property.images?.filter((item) => item !== 'borrado');
        // console.log(this.property.images);
        // this.slides = [];
        // if (this.images.length > 0) {
        //   for (let i = 0; i < this.images.length; i++) {
        //     if (this.images[i] !== 'borrado') {
        //       this.slides.push({
        //         image: this.images[i]
        //       });
        //     }
        //   }
        // }

        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.property.geolocation || '');

      })
    });
  }



}
