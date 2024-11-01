import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullCalendar';

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date(), end: new Date('2024-11-01T14:00:00')},
      {
        title: 'Meeting Litos',
        start: new Date('2024-11-10T10:00:00'), // Definimos una fecha y hora específica
      },
      {
        title: 'Meeting Litos',
        start: new Date('2024-11-01T10:00:00'), // Definimos una fecha y hora específica
        end: new Date('2024-11-01T12:00:00')     // Opcional: fecha de fin si el evento tiene duración
      }
    ]
  };

  addEvent(){
    console.log('Evcent add');
    alert('addevent')
  }

}
