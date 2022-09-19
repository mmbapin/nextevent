import React from 'react'
import { useRouter } from 'next/router'
import { getAllEvents } from "../../dummy-data"
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents()
  const findEventHandler = (year, month) => {
    console.log("click");
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

export default AllEventsPage