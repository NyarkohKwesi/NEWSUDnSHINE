import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  package: string;
  date: string;
  time: string;
  message: string;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.html',
  styles: [``]
})
export class Booking {
  formData: BookingForm = {
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
    alert(
      `Booking submitted!\n\nThank you ${this.formData.name}, we’ll contact you soon.`
    );

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
