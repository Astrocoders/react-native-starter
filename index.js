import { AppRegistry } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-BR')

import App from './App'

AppRegistry.registerComponent('rnStarter', () => App)
