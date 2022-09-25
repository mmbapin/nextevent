import React from 'react'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'
// import EventSearch from "../components/events/EventSearch"

const Home = (props) => {
  const { events } = props
  return (
    <div>
      {/* <EventSearch /> */}
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 300
  }
}

export default Home