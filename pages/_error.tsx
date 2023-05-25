import { Component } from 'react'
import { NextPageContext } from 'next'
import Error from '@components/error'

class E extends Component<{ status: number }> {
  static getInitialProps({ res, err }: NextPageContext) {
    const status = res ? res.statusCode : err ? err.statusCode : null
    return { status }
  }

  render() {
    const { status } = this.props
    return <Error title={`${status}`} />
  }
}

export default E
