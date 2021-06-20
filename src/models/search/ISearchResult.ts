export interface ISearchResult<T> {
  page?: number;
  total_results?: number;
  total_pages?: number;
  results?: T[];
}

export class SearchResult<T> implements ISearchResult<T> {
  constructor(public page?: number, public total_results?: number, public total_pages?: number, public results?: T[]) {}
}
