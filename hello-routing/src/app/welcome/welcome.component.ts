import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private pokes: PokeService, private router: Router) { }

  swapView(){
    this.router.navigate(['/superheroes']);
  }
  pokemonButton1(){
    console.log('button 1 clicked');
    this.pokes.retrievePokemon().subscribe(
    response =>{
      const name = 'name';
      console.log(response);
      console.log(response[name]);
    }
    );
  }
  pokemonButton2(){
    this.pokes.retrievePokemon2().subscribe(
    response =>{
      console.log(response);
      console.log("This Pokemon's name is "+response.name);
      console.log("Its PokeDex number is "+response.id);
      console.log("Its base experience is "+response.base_experience);
    }
    );
  }

  ngOnInit(): void {
  }

}
