import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router,
    public _MessageService: MessageService) { }

  ngOnInit() {
  }

  onNotification() {
    alert('Esta funcionalidad no se encuentra disponible, por favor comunicarse al numero de telefono que se encuentra en el pie de la pagina');
    this.router.navigate(['/']);
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire({
        title: 'Formulario de contacto',
        text: 'Mensaje enviado correctamente',
        type: 'success',
        confirmButtonText: 'Cool'
      })
    });
     
  }

}
