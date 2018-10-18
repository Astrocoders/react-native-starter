import React from 'react'
import { View, Text } from 'react-native'
import { ApolloProvider } from 'react-apollo'

import { app as StackRouter } from './re/App.bs'

export default class App extends React.Component {
  state = {
    hasError: false,
  }

  componentDidCatch = () => {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Error!</Text>
        </View>
      )
    }

    return (
      <ApolloProvider client={apolloClient}>
        <StackRouter />
      </ApolloProvider>
    )
  }
}
