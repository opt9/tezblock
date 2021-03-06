import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faMedium, faTelegram, faTwitter, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons'
import {
  faBell,
  faBoxBallot,
  faCopy,
  faExchangeAlt,
  faEye,
  faHandHoldingSeedling,
  faHandReceiving,
  faLevelDownAlt,
  faLevelUpAlt,
  faLink,
  faLongArrowAltDown,
  faQrcode,
  faSearch,
  faStamp,
  faGlobe,
  faLaptop,
  faCaretUp,
  faCaretDown,
  faBreadLoaf,
  faCoin,
  faCoins,
  faHatChef,
  faListAlt
} from '@fortawesome/pro-light-svg-icons'

export const addFontAwesome = () => {
  library.add(
    faBell,
    faCopy,
    faLevelDownAlt,
    faLevelUpAlt,
    faLongArrowAltDown,
    faQrcode,
    faSearch,
    faExchangeAlt,
    faHandReceiving,
    faLink,
    faStamp,
    faBoxBallot,
    faHandHoldingSeedling,
    faEye,
    faGithub,
    faMedium,
    faTelegram,
    faTwitter,
    faApple,
    faAndroid,
    faLaptop,
    faGlobe,
    faCaretUp,
    faCaretDown,
    faBreadLoaf,
    faCoin,
    faCoins,
    faHatChef,
    faListAlt
  )
}
