import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink], //Para las rutas el RouterLink
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
