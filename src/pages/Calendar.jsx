import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';
import { Breadcrumbs } from '../components/Breadcrumbs'
import { scheduleData } from '../data/dummy';
export const Calendar = () => {
  const eventSettings = {dataSource: scheduleData}

  return (
    <main className='mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white '>
      <Breadcrumbs title='App' subtitle='Calender'/>
      <ScheduleComponent
        height='700px'
        eventSettings={eventSettings}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}/>
      </ScheduleComponent>
    </main>
  )
}