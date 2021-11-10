import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { HttpParams } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { CustomerPhonePage } from '../../model/customerphonePage';
import { FilterObject } from '../../model/filterObject';
import { CustomerPhone } from '../../model/customerphone';


@Component({
	selector: 'app-customer-phone-page',
	templateUrl: './customer-phone-page.component.html',
	styleUrls: ['./customer-phone-page.component.css']
})
export class CustomerPhonePageComponent implements OnInit {
	
	@ViewChild
	(MatPaginator) paginator: MatPaginator;

	private endpoint: string = "/api/customer/phone";
	public customerPhones: MatTableDataSource<CustomerPhone> = new MatTableDataSource();
	private phonePages: CustomerPhonePage;
	public displayedColumns: string[] = ['phoneNumber', 'country', 'countryCode', 'state'];
	public pageSize: number = 10;
	public totalPages: number = 0;

	filterSelectObj: FilterObject[] = [];
	filterValues: { [filter: string]: string } = { country: "", state: "" };

	constructor(private apiService: ApiService) {
		const countryFilterObject = new FilterObject("Country", "country", ["Morocco", "Uganda", "Ethiopia", "Cameroon", "Mozambique"]);
		const stateFilterObject = new FilterObject("State", "state", ["Valid", "Not_Valid"]);

		this.filterSelectObj.push(countryFilterObject);
		this.filterSelectObj.push(stateFilterObject);

	}

	ngOnInit() {

		this.retrieveCustomerPhoneNumbers('', '');
	}

	private retrieveCustomerPhoneNumbers(country: string, state: string) {

		let params = new HttpParams();
		if (country.length > 0) {
			params = params.append('country', country);
		}
		if (state.length > 0) {
			params = params.append('state', state);
		}
		this.apiService.getPhoneNumbers(this.endpoint, params).subscribe(data => {
			if (data != null) {
				this.phonePages = data;
				this.customerPhones.data = this.phonePages.customerPhoneList;
				if (this.phonePages.customerPhoneList.length > 0) {
					this.totalPages = this.phonePages.customerPhoneList.length;
				}
				
				this.customerPhones.paginator=this.paginator;
			}

		});

	}


	filterChange(filter: FilterObject, event: any) {
		let column: string = filter.columnProp;
		this.filterValues[column] = event.target.value.trim().toLowerCase();
		this.retrieveCustomerPhoneNumbers(this.filterValues["country"], this.filterValues["state"]);
	}


}
