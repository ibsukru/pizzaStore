import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'

import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'

import basketReducer from './basketReducer'
import pizzaReducer from './pizzaReducer'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://core-graphql.dev.waldo.photos/pizza'
  })
})

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
    pizza: pizzaReducer,
    basket: basketReducer
  }),
  {},
  compose(applyMiddleware(client.middleware()))
)

const Provider = ApolloProvider

export { store, client, Provider }
