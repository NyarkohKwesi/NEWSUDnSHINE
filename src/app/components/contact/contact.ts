import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.html',
  styles: ``
})
export class Contact {
  whatsapp_icon = faWhatsapp;
}