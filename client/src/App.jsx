// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Outlet } from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'

const client = new ApolloClient({ 
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  
  return (
    <ApolloProvider client={client} >
      <Nav  />
      <Outlet />
    </ApolloProvider>
  )
}

export default App;
