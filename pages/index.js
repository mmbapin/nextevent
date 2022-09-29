import React from 'react'
import Head from 'next/head'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'
// import EventSearch from "../components/events/EventSearch"

const Home = (props) => {
  const { events } = props
  return (
    <div>
      <Head>
        <title>Next Js Event</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
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