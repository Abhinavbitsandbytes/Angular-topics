import { Component, OnInit } from '@angular/core';
import { concatMap, forkJoin, of, tap } from 'rxjs';
import { AppServiceService } from '../../app-service.service'
@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {
  constructor(private readonly appServiceService: AppServiceService) { }
  ngOnInit(): void {
    forkJoin([this.appServiceService.data1(), this.appServiceService.data2(),
       this.appServiceService.data3()])
    .subscribe((data: any)=>{
      console.log(data)
    })
  }
}
