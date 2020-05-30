import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Service/search.service';
import { Company } from '../../Model/company';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit {
	public searchResults: Array<Company> = [];
	public loading: boolean = false;
	private searchInput: Subject<string> = new Subject<string>();
	constructor(private searchService: SearchService) {
		this.searchInput.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((text: string) => {
			this.loading = true;
			this.searchService.search(text).then((companies: Array<Company>) => {
				this.searchResults = companies;
				this.loading = false;
			});
		});
	}

	ngOnInit(): void {}

	onSearch(text: string): void {
		this.searchInput.next(text);
	}
}
