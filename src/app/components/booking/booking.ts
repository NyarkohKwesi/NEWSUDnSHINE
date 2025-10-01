import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.html',
  styles: [``]
})


export class Booking {
  booking_form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    phone: new FormControl('', { nonNullable: true }),
    location: new FormControl('', { nonNullable: true }),
    package: new FormControl('Choose a package', { nonNullable: true }),
    date: new FormControl('', { nonNullable: true }),
    time: new FormControl('', { nonNullable: true }),
    message: new FormControl('', { nonNullable: false })
  });

  onSubmit() {
    // Alert
    alert(
      `Booking submitted!\n\nThank you ${this.booking_form.get('name')?.value}, we’ll contact you soon.`
    );

    // Log to console
    console.log(this.booking_form.getRawValue());

    // Reset form after submission
    this.booking_form.reset({});
  }
}
