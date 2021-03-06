import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from 'src/app/services/news-api.service';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {
  apiPayload: any = "loading";
  userData;
  allLikes = false;
  
  select: string = '';
  input: string = '';
  constructor(
    private api: NewsApiService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FirebaseService,
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("users"))[this.fb.id];

    this.route.url.subscribe(url => {
      const query = url[1].path;
      this.input = url[1].path;
      const category = url[2].path;
      this.select = url[2].path;
      const link = this.api.everythingEndpoint(query, category);
      this.http.get(link).subscribe(data => {
        this.apiPayload = data;
      });
    });
  }
  buildLink() {
    let inputOption = this.input == "" ? "usa" : this.input;
    let base = `/everything/${inputOption}/${this.select}`;
    return base;
  }

}
