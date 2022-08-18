import { Component } from 'react'
import { NextPageContext } from 'next'
import Error from '@components/error'

interface Props {
  status: Number
}

class E extends Component<Props> {
  static getInitialProps({ res, err }: NextPageContext) {
    const status = res ? res.statusCode : err ? err.statusCode : null
    return { status }
  }

  render() {
    const { status } = this.props
    return <Error status={status} />
  }
}

export default E
