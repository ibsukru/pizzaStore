import './App.css'
import React from 'react'

import { Order } from './components'

import { store, client, Provider } from './reducers'

const App = () => (
  <Provider store={store} client={client}>
    <main>
      <Order />
    </main>
  </Provider>
)

export default App
