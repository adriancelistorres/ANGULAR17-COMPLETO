import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebasservicesService } from './pruebasservices.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas';
  

  constructor( public PruebasservicesService : PruebasservicesService) { {
    this.PruebasservicesService.setToken();
  }

}
}
