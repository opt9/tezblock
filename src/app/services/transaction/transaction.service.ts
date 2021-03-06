import { Injectable } from '@angular/core'
import { combineLatest } from 'rxjs'
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators'

import { Transaction } from '../../interfaces/Transaction'
import { ApiService } from '../api/api.service'
import { distinctPagination, distinctTransactionArray, Facade, Pagination } from '../facade/facade'

interface TransactionServiceState {
  transactions: Transaction[]
  kindList: Array<string>
  pagination: Pagination
  loading: boolean
}

const initialState: TransactionServiceState = {
  transactions: [],
  kindList: ['transaction'],
  pagination: {
    currentPage: 1,
    selectedSize: 6,
    pageSizes: [5, 10, 20, 50]
  },
  loading: true
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends Facade<TransactionServiceState> {
  public list$ = this.state$.pipe(
    map(state => state.transactions),
    distinctUntilChanged(distinctTransactionArray)
  )
  public kindList$ = this.state$.pipe(
    map(state => state.kindList),
    distinctUntilChanged()
  )
  public pagination$ = this.state$.pipe(
    map(state => state.pagination),
    distinctUntilChanged(distinctPagination)
  )
  public loading$ = this.state$.pipe(map(state => state.loading))

  constructor(private readonly apiService: ApiService) {
    super(initialState)

    combineLatest([this.pagination$, this.kindList$, this.timer$])
      .pipe(
        switchMap(([pagination, kindList, _]) => {
          return this.apiService.getLatestTransactions(pagination.selectedSize * pagination.currentPage, kindList)
        })
      )
      .subscribe(transactions => {
        this.updateState({ ...this._state, transactions, loading: false })
      })
  }

  public updateKind(kindList: Array<string>) {
    this.updateState({ ...this._state, kindList, loading: true })
  }

  public loadMore() {
    const pagination = { ...this._state.pagination, currentPage: this._state.pagination.currentPage + 1 }

    this.updateState({ ...this._state, pagination, loading: true })
  }

  public setPageSize(selectedSize: number) {
    const pagination = { ...this._state.pagination, selectedSize }
    this.updateState({ ...this._state, pagination, loading: true })
  }
}
