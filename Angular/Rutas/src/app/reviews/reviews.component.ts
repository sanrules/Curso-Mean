import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      this.id = params.idCurso;
    });
  }

}
