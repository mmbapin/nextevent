import React from 'react'
import { useRouter } from 'next/router'
import { getAllEvents } from "../../helpers/api-util"
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()
  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}

export default AllEventsPage