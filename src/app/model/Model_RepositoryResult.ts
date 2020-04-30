import {Type} from "class-transformer";
import {Repository} from "./Model_Repository";
import { SBService } from "./../services/subject-behavior-service";

export class RepositoryResult {
  
  optionSelected: Repository;

  constructor(private srvSubject:SBService) {
     this.srvSubject.updateStatus.subscribe(message => this.optionSelected = message)
  }

  @Type(() => Repository) // providing a Type is required.
  items: Repository[];
  
  total_count: number;
  
  get repositoryUrls() {
    return this.items.map(item => this.optionSelected);
  }
  
}