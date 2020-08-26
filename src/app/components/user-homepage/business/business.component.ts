import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessId: number;
  business: Business;

  constructor(private route: ActivatedRoute, private businessService: BusinessService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.businessId = +params.get('businessId');
      this.business = this.businessService.getBusiness(this.businessId);
    });
  }
}
