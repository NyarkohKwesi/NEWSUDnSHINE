import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, RouterLink],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('SudsNShine');
}
