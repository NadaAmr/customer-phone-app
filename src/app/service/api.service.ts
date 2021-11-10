import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders,HttpParams  } from '@angular/common/http';
import { CustomerPhonePage } from '../model/customerphonePage';
import { Observable ,of} from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
  params: new HttpParams({})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	

	private SERVER_URL = "http://localhost:8080";

  	constructor(private httpClient: HttpClient) { }

	public getPhoneNumbers(endpointName :string, params:HttpParams): Observable<any>{  
		httpOptions["params"]=params;
		return this.httpClient.get<CustomerPhonePage>
		 (this.SERVER_URL+endpointName,httpOptions);  
	} 
 
}
