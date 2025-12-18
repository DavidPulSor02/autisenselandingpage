import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Navbar } from '../../components/navbar/navbar';
import { Inicio } from '../../components/inicio/inicio';
import { Sobrenosotros } from "../../components/sobrenosotros/sobrenosotros";
import { Footers } from '../../components/footers/footers';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Navbar, Inicio, Sobrenosotros,Footers],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
