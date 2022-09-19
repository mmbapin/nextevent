import React, {Fragment} from 'react'
import MainHeader from './MainHeader'
const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout