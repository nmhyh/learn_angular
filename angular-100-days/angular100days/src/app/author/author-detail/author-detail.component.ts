import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/author.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
