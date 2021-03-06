export interface BakingBadResponse {
  address?: string
  balance?: number
  config?: Config
  estimatedRoi?: number
  logo?: string
  name?: string
  rating?: Rating
  site?: string
  stakingBalance?: number
  stakingCapacity?: number
}

export interface Config {
  address: string
  fee: number
  minBalance: number
  minPayout: number
  payoutDelay: number
  payoutFee: number
  payoutPeriod: number
  payoutRatio: number
  rewardStruct: number
}

export interface Rating {
  actualRoi: number
  address: string
  avgRolls: number
  delegator: string
  fromCycle: number
  prevRoi: number
  sharedConfig: string
  status: number
  toCycle: number
}
