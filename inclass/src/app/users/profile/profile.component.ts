import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User;
  constructor(private ar: ActivatedRoute) {}
  ngOnInit() {
    // Retrieve path parameter
    this.ar.paramMap.subscribe((paramMap) => {
      const userId = paramMap.get('id')?.toString() ?? '0';
      console.log("paraMap",userId);
    });
    // this.ar.params.subscribe((params)=>{
    //   console.log("params",params)
    // })

    // Retrive a query parameter
    this.ar.queryParamMap.subscribe((param) =>{
      const userId = param.get('userId')?.toString() ?? '0';
      console.log('query paramter: ', userId)
    });

    // Retrive data from resolver
    this.user = this.ar.snapshot.data['userData'];
    console.log("In profile component,", this.user)
  }
}
