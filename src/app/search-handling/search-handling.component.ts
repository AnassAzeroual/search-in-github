import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { plainToClass } from "class-transformer";
import { RepositoryResult } from "./../model/Model_RepositoryResult";
import { Repository } from "../model/Model_Repository";
import { SBService } from "./../services/subject-behavior-service";

@Component({
  selector: "search-handling",
  templateUrl: "./search-handling.component.html",
  styleUrls: ["./search-handling.component.css"]
})
export class SearchHandlingComponent implements OnInit {
  selectedType: Repository;
  repositoryResult: RepositoryResult;

  types = [
    {
      value: "git_url"
    },
    {
      value: "id"
    },
    {
      value: "name"
    },
    {
      value: "full_name"
    },
    {
      value: "owner"
    },
    {
      value: "private"
    },
    {
      value: "html_url"
    },
    {
      value: "description"
    },
    {
      value: "fork"
    },
    {
      value: "url"
    },
    {
      value: "forks_url"
    },
    {
      value: "keys_url"
    },
    {
      value: "collaborators_url"
    },
    {
      value: "teams_url"
    },
    {
      value: "hooks_url"
    },
    {
      value: "issue_events_url"
    },
    {
      value: "events_url"
    },
    {
      value: "assignees_url"
    },
    {
      value: "branches_url"
    },
    {
      value: "tags_url"
    },
    {
      value: "blobs_url"
    },
    {
      value: "git_tags_url"
    },
    {
      value: "git_refs_url"
    },
    {
      value: "trees_url"
    },
    {
      value: "statuses_url"
    },
    {
      value: "languages_url"
    },
    {
      value: "stargazers_url"
    },
    {
      value: "contributors_url"
    },
    {
      value: "subscribers_url"
    },
    {
      value: "subscription_url"
    },
    {
      value: "commits_url"
    },
    {
      value: "git_commits_url"
    },
    {
      value: "comments_url"
    },
    {
      value: "issue_comment_url"
    },
    {
      value: "contents_url"
    },
    {
      value: "compare_url"
    },
    {
      value: "merges_url"
    },
    {
      value: "archive_url"
    },
    {
      value: "downloads_url"
    },
    {
      value: "issues_url"
    },
    {
      value: "pulls_url"
    },
    {
      value: "milestones_url"
    },
    {
      value: "notifications_url"
    },
    {
      value: "labels_url"
    },
    {
      value: "releases_url"
    },
    {
      value: "deployments_url"
    },
    {
      value: "created_at"
    },
    {
      value: "updated_at"
    },
    {
      value: "pushed_at"
    },
    {
      value: "ssh_url"
    },
    {
      value: "clone_url"
    },
    {
      value: "svn_url"
    },
    {
      value: "homepage"
    },
    {
      value: "size"
    },
    {
      value: "stargazers_count"
    },
    {
      value: "watchers_count"
    },
    {
      value: "language"
    },
    {
      value: "has_issues"
    },
    {
      value: "has_downloads"
    },
    {
      value: "has_wiki"
    },
    {
      value: "has_pages"
    },
    {
      value: "forks_count"
    },
    {
      value: "mirror_url"
    },
    {
      value: "open_issues_count"
    },
    {
      value: "forks"
    },
    {
      value: "open_issues"
    },
    {
      value: "watchers"
    },
    {
      value: "default_branch"
    },
    {
      value: "score"
    }];

  
  
  constructor(private http: HttpClient, private srvSubject:SBService) {
     this.srvSubject.updateStatus.subscribe(message => this.selectedType = message)
  }

  search(term: string) {
    this.http
      .get("https://api.github.com/search/repositories?q=" + term)
      .map(response => {
        // console.log("after",response)
        const repositoryResult = plainToClass(
          RepositoryResult,
          response as Object
        );
        // console.log("loaded and transformed repositories: ", repositoryResult);
        // console.log("you can use class methods: ",
        //  repositoryResult.total_count);
        return repositoryResult;
      })
      .subscribe(repositoryResult => {
        this.repositoryResult = repositoryResult;
      });
  }

  ngOnInit() {}

  getSelectedType(item){ this.srvSubject.changeStatusValue(item) }
}
