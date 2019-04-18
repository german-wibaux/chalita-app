import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { OperationService } from 'src/app/services/operation.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  kindOperation = 'Operación';
  kindProperty = 'Propiedad';
  location = 'Localidad';
  code = 'Codigo';
  operations;

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private authService: AuthService,
    private operationService: OperationService) { }

  ngOnInit() {
    this.operationService.getOperations().subscribe( operations => {
      this.operations = operations;
    } );
  }

  onSetKindOperation(operation) {
    this.kindOperation = operation;
  }

  onSetKindProperty(property) {
    this.kindProperty = property;
  }

  onSetLocation(location) {
    this.location = location;
  }

  onSetCode(code) {
    this.code = code;
  }

  searchProperty() {
    this.router.navigate(['/result', this.kindOperation, this.kindProperty, this.location]);
    this.resetParameters();
  }

  resetParameters() {
    this.kindOperation = 'Operación';
    this.kindProperty = 'Propiedad';
    this.location = 'Localidad';
  }

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )      
      if ( element ) element.scrollIntoView ( )
    });
        
  }

  onAlertClick() {
    alert('Esta seccion todavia no se encuentra disponible');
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    //console.log('entro');
  }

  searchPropertyForm() {
    //A implementar
  }

}
