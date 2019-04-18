import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { PropertyInterface } from '../../models/propiedadInterface';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property: PropertyInterface = null;
  images: String[] = [];
  slides = [];
  activeSlideIndex = 0;
  url: SafeResourceUrl;

  constructor(private propertyService: PropertyService , 
              private route: ActivatedRoute,
              public sanitizer:DomSanitizer) { }

  ngOnInit() { 
   // this.propertyService.getProperty()
   this.route.params.subscribe( result => {
     this.propertyService.getProperty(result['id']).subscribe( resultProp => {
      this.property = resultProp;
      this.images = this.property.images;
      for (let i = 0; i < this.images.length; i++) {
        this.slides.push({
          image: this.images[i]
        });
      }
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.property.geolocation);  
            
     })
   });
  }

  
    
  }
