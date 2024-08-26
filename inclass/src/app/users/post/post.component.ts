import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title = '';
  constructor(private ar: ActivatedRoute) {}
  ngOnInit() {
    this.ar.data.subscribe(data => {
      this.title = data['title']
    }
    )
  }

}
