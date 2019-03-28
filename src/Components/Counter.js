import { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  updateCount = val => this.setState({ count: val })

  render() {
    const stateTools = {
      count: this.state.count,
      updateCount: this.updateCount
    }

    const { children } = this.props

    return children(stateTools)
  }
}

export default Counter