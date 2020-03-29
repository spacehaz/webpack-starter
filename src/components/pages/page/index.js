import React from 'react'
import { Header, Footer } from 'components/common'
import styles from './styles.module'
import { translate } from 'decorators'
import text from 'texts'

@translate('pages.page')
class Page extends React.Component {
  render () {
    return <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        {this.props.children}
      </div>
      <Footer />
    </div>
  }
}

export default Page
