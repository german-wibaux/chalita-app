import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationInterface } from './models/locationInterface';
import { OperationInterface } from './models/operationInterface';
import { LocationService } from './services/location.service';
import { OperationService } from './services/operation.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PropertyService } from './services/property.service';
import { AuthService } from './services/auth.service';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('propertySearchInput', {static: true}) propertySearchInput!: ElementRef;

  @ViewChild('autocompleteForm', {static: true}) autocompleteForm!: ElementRef;

  @HostListener('document:click', ['$event']) 
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.autocompleteForm.nativeElement;
    const clickedInside: boolean = nativeElement.contains(event.target);
    if (!clickedInside && this.showSearches) {
      this.showSearches = false;
      this.propertySearchInput.nativeElement.value = '';
    }
  }

  title = 'chalita-app-v15';

  kindOperation = 'Operación';
  kindProperty = 'Propiedad';
  location = 'Localidad';
  operations: OperationInterface[];
  locations: LocationInterface[] = [];
  search = '1.5';
  faSearch = faSearch;
  properties_id: [{ id: '', code: '' }] = [{ id: '', code: '' }];
  propertyCodes: string[] = [];
  searchStr: any | undefined;

  isSearching: boolean = false;
  showSearches: boolean = false;
  searchedProperties: any = [];

  propertySearchInputValue = '';

  showClearButton: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private operationService: OperationService,
    private locationService: LocationService,
    private propertiesService: PropertyService,
    private authService: AuthService
  ) {
    this.operations = [];
    this.propertiesService.getProperties().subscribe(properties => {
      /** List every properties */
      properties.forEach((element: any) => {
        if (element.available) {
          // console.log(element)
          this.propertyCodes.push(element.code);
          this.properties_id.push({ id: element.id, code: element.code });
        }

      });

      this.locationService.getLocations().subscribe(locations => {

        this.locations = locations.sort((a, b) => (a.name! < b.name! ? -1 : 1));
      });

    });
  }

  ngOnInit() {
    this.operationService.getOperations()?.subscribe(operations => {
      this.operations = operations;
    });
    this.locationService.getLocations()?.subscribe(locations => {
      this.locations = locations.sort((a, b) => (a.name! < b.name! ? -1 : 1));
    });
    this.codeSearch();
  }

  codeSearch() {

    // Adding keyup Event Listerner on input field
    const search$ = fromEvent(this.propertySearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        // this.isSearching = true
        this.showClearButton = true
      }),
      switchMap((term) => term ? this.getCodes(term) : of<any>(this.propertyCodes)),
      tap(() => {
        this.isSearching = false,
          this.showSearches = true;
      }));

    search$.subscribe(data => {
      
      this.isSearching = false;
      console.log(data);
      this.searchedProperties = data;
    })
  }

  getCodes(name: string): Observable<string[]> {
    //Here we perrform the simple call to filter function. You can also call to API here for the desired result.

    return of(this.filterCodes(name)) //used `of` to convert array to Observable
    //return this.http.post("url", data, {headers})  //to get the result from API use this line
  }

  filterCodes(name: string) {
    return this.propertyCodes.filter((val) => val.toLowerCase().includes(name.toLowerCase()) == true)
  }

  onSetKindOperation(operation: any) {
    this.kindOperation = operation.innerText;
  }

  onSetKindProperty(property: any) {
    if (property.innerText === 'Terreno' || property.innerText === 'Lote') {
      this.kindProperty = 'Terreno/Lote'
    } else if (property.innerText === 'Loteo') {
      this.kindProperty = 'Loteo'
    } else {
      this.kindProperty = property.innerText;
    }
    
  }

  onSetLocation(location: any) {
    this.location = location.innerText;
  }

  onAnchorClick() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    });
  }

  onAnchorClickSeted(fragment: string) {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + fragment)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    });
  }

  searchProperty() {
    this.router.navigate(['/result', this.kindOperation, this.kindProperty, this.location]);
    this.resetParameters();
    this.search = '1.5';
    this.onAnchorClickSeted('acces');
  }

  resetParameters() {
    this.kindOperation = 'Operación';
    this.kindProperty = 'Propiedad';
    this.location = 'Localidad';
  }

  searchCode(codeSearching: string) {
    //Funcion para buscar elementos en un array
    let id = this.properties_id.filter(x => x.code == codeSearching)[0];
    //let id = this.properties_id.indexOf({id:,code:this.searchStr});
    let url = 'details/' + id.id;
    //console.log(url);
    // this.search1 = '1.5';
    this.router.navigateByUrl(url);
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + 'acces')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        this.showSearches = false;
        this.propertySearchInputValue= codeSearching;
      }
    });
  }

  removeValueInput() {    
    this.propertySearchInput.nativeElement.value = '';
    this.showClearButton = false;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

}
