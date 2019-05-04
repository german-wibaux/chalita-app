import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-modal-tasaciones',
  templateUrl: './modal-tasaciones.component.html',
  styleUrls: ['./modal-tasaciones.component.css']
})
export class ModalTasacionesComponent implements OnInit {

  constructor(private _message:MessageService ) { }

  ngOnInit() {
  }

  tasaForm(form) {
    this._message.sendMessage(form);
  }

}
