import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Company } from '../Model/company';

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	constructor(private http: HttpClient) {}

	search(keywords: string) {
		return this.http
			.get(`${environment.alphaVantageBaseUrl}&function=SYMBOL_SEARCH&keywords=${keywords}`)
			.toPromise()
			.then((data: any) => {
				let result: Array<Company> = [];
				data.bestMatches.forEach((company) => {
					let comp = new Company();

					comp.Symbol = company['1. symbol'];
					comp.Name = company['2. name'];
					comp.Type = company['3. type'];
					comp.Region = company['4. region'];
					comp.Currency = company['8. currency'];

					result.push(comp);
				});
				return result;
			});
	}
}
