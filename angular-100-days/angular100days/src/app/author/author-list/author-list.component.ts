import { Component, OnInit } from '@angular/core';
import { Author, authors } from 'src/app/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(id: number) {
    if (!id) return;
    this.authors = this.authors.filter(author => author.id !== id);
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
