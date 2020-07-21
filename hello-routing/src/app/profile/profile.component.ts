import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROCPService } from '../services/rocp.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentHero ='No Hero';

  // I am making a TS object version of my form that I will pair with the form that I create on the HTML page. This is
  // the reactive forms module
  todos = new FormGroup({
    title: new FormControl
  })

  constructor(private route: ActivatedRoute, private rocp: ROCPService) { }

  postTodosEC2(todoSub: FormGroup){
    //Stringifying values, due to the request body content-type being a JSON
    let form= JSON.stringify(todoSub.value)
    this.rocp.postTodos(form).subscribe(
      response => {
        console.log('success');
      }
    )
  }


  getTodosEC2(){
    this.rocp.getTodos().subscribe(
      response => {
        console.log(response);
      }
    )
  }
  getTodosByIdEC2(todoSub: FormGroup){
    let form= todoSub.get("title").value;
    this.rocp.getTodosById(form).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  deleteTodosEC2(todoSub: FormGroup){
  let form= todoSub.get("title").value;
    this.rocp.deleteTodos(form).subscribe(
      response => {
        console.log('success');
      }
    )

  }

  ngOnInit(): void {
    // this.currentHero = this.route.snapshot.paramMap.get('heroname');
  }

}
