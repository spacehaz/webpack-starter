import React from 'react'
import { actions, translate, platform, detectBrowser } from 'decorators'

@actions(({ user: { loading } }) => ({ loading }))
@platform()
@detectBrowser()
@translate('pages.main')
class Main extends React.Component {

  render () {
    return <div>Main</div>
  }
}

export default Main
