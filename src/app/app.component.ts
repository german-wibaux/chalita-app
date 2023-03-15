import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationInterface } from './models/locationInterface';
import { OperationInterface } from './models/operationInterface';
import { LocationService } from './services/location.service';
import { OperationService } from './services/operation.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chalita-app-v15';

  kindOperation = 'Operación';
  kindProperty = 'Propiedad';
  location = 'Localidad';
  operations: OperationInterface[];
  locations: LocationInterface[] = [];
  search = '1.5';
  faSearch = faSearch;

  constructor(
    private router: Router,
    route: ActivatedRoute,
    private operationService: OperationService,
    private locationService: LocationService
  ){
    this.operations = [];
  }

  ngOnInit() {
    this.operationService.getOperations()?.subscribe( operations => {
      this.operations = operations;
    });
    this.locationService.getLocations()?.subscribe(locations => {          
      this.locations = locations.sort((a, b) => (a.name! < b.name! ? -1 : 1));
    });
  }

  onSetKindOperation(operation: any) {
    this.kindOperation = operation.innerText;
  }

  onSetKindProperty(property: any) {
    this.kindProperty = property.innerText;
  }

  onSetLocation(location: any) {
    this.location = location.innerText;
  }

  onAnchorClick ( ) {
    alert("On anchor click")        
  }

  searchProperty() {
    this.router.navigate(['/result', this.kindOperation, this.kindProperty, this.location]);
    this.resetParameters();
    this.search = '1.5';
  }

  resetParameters() {
    this.kindOperation = 'Operación';
    this.kindProperty = 'Propiedad';
    this.location = 'Localidad';
  }

}
