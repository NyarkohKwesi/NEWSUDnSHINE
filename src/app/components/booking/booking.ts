import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.html',
  styles: ''
})
export class BookingComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    location: '',
    package: '',
    date: '',
    time: '',
    message: ''
  };

  onSubmit() {
    alert('Booking submitted! We will contact you soon. Thank you for choosing Suds and Shine.');
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      phone: '',
      location: '',
      package: '',
      date: '',
      time: '',
      message: ''
    };
  }
}