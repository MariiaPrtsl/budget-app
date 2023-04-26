import {getFromStorage} from '../../utils/sessionStorage';
import { THEMES } from '../themes/themeList';
import { LOCALES } from '../i18n/constans';

export default{
    currency:'UAH',
    themeName: getFromStorage('themeName') || THEMES.LIGHT,
    locale: getFromStorage('locale') || LOCALES.ENGLISH
}