import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {plainToClass} from "class-transformer";
import {RepositoryResult} from "./../model/Model_RepositoryResult";

@Component({
  selector: 'search-handling',
  templateUrl: './search-handling.component.html',
  styleUrls: ['./search-handling.component.css']
})
export class SearchHandlingComponent implements OnInit {

repositoryResult: RepositoryResult;

  constructor (private http: HttpClient) {
  }

  search(term: string) {
    this.http
        .get("https://api.github.com/search/repositories?q=" + term)
        .map(response => {
            const repositoryResult = plainToClass(RepositoryResult, response.json() as Object);
            console.log("loaded and transformed repositories: ", repositoryResult);
            console.log("you can use class methods: ", repositoryResult.repositoryUrls);
            return repositoryResult;
        })
        .subscribe(repositoryResult => {
            this.repositoryResult = repositoryResult;
        });
  }

  ngOnInit() {
  }

}