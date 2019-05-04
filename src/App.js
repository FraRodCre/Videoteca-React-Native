import React, {Component} from 'react'
import { Stack, Router, Scene, Actions } from 'react-native-router-flux'
import { configureAxios } from './webservices'
import { Provider } from 'react-redux'
import { store } from './config/redux'
import { Movies, Movie, Rating } from './sections'

export default class App extends Component {
  constructor(props) {
    super(props)
    configureAxios()
}

  render() {
    return (
      <Provider store={store}>
      <Router>
          <Stack key={'root'}>
              <Scene key={'Movies'} component={Movies} title={'Películas'} initial />
              <Scene key={'Movie'} component={Movie} title={'Película'} rightTitle={'Calificar'} onRight={ _ => Actions.Rating({ movie: store.getState().movies.selectedMovie }) }/>
              <Scene key={'Rating'} component={Rating} title={'Calificación'}/>
          </Stack>
      </Router>
  </Provider>
    )
  }
}

