import React, {Fragment} from 'react'
import Link from 'next/link'

const MainHeader = (props) => {
  return (
    <header>
      <div>
        <Link href="/">Next Events</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader