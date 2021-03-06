import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Block } from 'src/app/interfaces/Block'
import { CurrencyInfo } from 'src/app/services/crypto-prices/crypto-prices.service'

@Component({
  selector: 'block-detail-wrapper',
  templateUrl: './block-detail-wrapper.component.html',
  styleUrls: ['./block-detail-wrapper.component.scss']
})
export class BlockDetailWrapperComponent implements OnInit {
  public isCollapsed = true

  @Input()
  public wrapperBlock$: Observable<Block> | undefined

  @Input()
  public fiatInfo$: Observable<CurrencyInfo> | undefined

  @Input()
  public endorsements$: Observable<number> | undefined

  @Input()
  public confirmations$: Observable<number> | undefined

  @Input()
  public blockLoading$: Observable<boolean> | undefined

  @Input()
  public isMainnet: boolean = true

  constructor(private readonly route: ActivatedRoute) {}

  public ngOnInit() {}
}
