export default interface PagedEntity<T> {
  pageCount: number,
  totalItemCount: number,
  pageNumber: number,
  pageSize: number,
  hasPreviousPage: boolean,
  hasNextPage: boolean,
  isFirstPage: boolean,
  isLastPage: boolean,
  firstItemOnPage: number,
  lastItemOnPage: number,
  items: Array<T>
}
