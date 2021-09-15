import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsApiService } from 'src/app/services/news-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {
  apiPayload: any = "loading";

  constructor(
    private api: NewsApiService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe( url => {
      const query = url[1].path;
      const category = url[2].path;
      const link = this.api.everythingEndpoint(query,category);
      // this.http.get(link).subscribe(data => {
      //   this.apiPayload = data;
      // });
      this.apiPayload = link;
    });
  }


}
