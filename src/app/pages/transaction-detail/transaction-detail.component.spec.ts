import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BsModalService, ModalModule, TabsetConfig, TabsModule, TooltipModule } from 'ngx-bootstrap'
import { MomentModule } from 'ngx-moment'
import { Store } from '@ngrx/store'
import { Actions } from '@ngrx/effects'
import { ToastrModule, ToastrService } from 'ngx-toastr'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { EMPTY } from 'rxjs'

import { storeMock } from 'test-config/mocks'
import { IdenticonComponent } from 'src/app/components/identicon/identicon'
import { TabbedTableComponent } from 'src/app/components/tabbed-table/tabbed-table.component'
import { TezblockTableComponent } from 'src/app/components/tezblock-table/tezblock-table.component'
import { TransactionItemComponent } from 'src/app/components/transaction-item/transaction-item.component'
import { UnitHelper } from 'test-config/unit-test-helper'
import { LoadingSkeletonComponent } from 'src/app/components/loading-skeleton/loading-skeleton.component'
import { TransactionDetailWrapperComponent } from 'src/app/components/transaction-detail-wrapper/transaction-detail-wrapper.component'
import { AddressItemComponent } from './../../components/address-item/address-item.component'
import { AmountConverterPipe } from './../../pipes/amount-converter/amount-converter.pipe'
import { TransactionDetailComponent } from './transaction-detail.component'
import { AddressCellComponent } from 'src/app/components/tezblock-table/address-cell/address-cell.component'
import { AmountCellComponent } from 'src/app/components/tezblock-table/amount-cell/amount-cell.component'

describe('TransactionDetailComponent', () => {
  let component: TransactionDetailComponent
  let fixture: ComponentFixture<TransactionDetailComponent>

  let unitHelper: UnitHelper
  beforeEach(() => {
    unitHelper = new UnitHelper()

    TestBed.configureTestingModule(
      unitHelper.testBed({
        providers: [
          AmountConverterPipe,
          TabsetConfig,
          BsModalService,
          ToastrService,
          { provide: Store, useValue: storeMock },
          { provide: Actions, useValue: EMPTY }
        ],
        imports: [
          MomentModule,
          FontAwesomeModule,
          TabsModule,
          TooltipModule,
          ModalModule.forRoot(),
          ToastrModule.forRoot(),
          PaginationModule
        ],
        declarations: [
          TransactionDetailComponent,
          TabbedTableComponent,
          TezblockTableComponent,
          TransactionItemComponent,
          AddressItemComponent,
          AddressCellComponent,
          IdenticonComponent,
          AmountCellComponent,
          TransactionDetailWrapperComponent,
          LoadingSkeletonComponent
        ]
      })
    )
      .compileComponents()
      .catch(console.error)
    fixture = TestBed.createComponent(TransactionDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
