import { Component, OnInit } from '@angular/core';
import { ApiAlejandroService } from '../../services/api-alejandro.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private api: ApiAlejandroService) {}
  ngOnInit(): void {
    this.api.getTopHeadLines().subscribe( resp =>
      {console.log(resp);}
      );
  }

}
