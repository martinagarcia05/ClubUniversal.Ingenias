 document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.querySelector("#calendar")
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'listWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'listDay,listWeek,dayGridMonth'
      },
      events: 
      [
  { title: 'Cancelación de Actividades', start: '2025-07-30T14:00:00' },
  { title: 'Vóley - Partido Sub 21', start: '2025-08-01T15:00:00' },
  { title: 'Básquet - Partido Sub 12', start: '2025-08-01T20:30:00' },
  { title: 'Tenis - Partido 5ta B', start: '2025-08-02T10:25:00' },
  { title: 'Fútbol - Partido 2005', start: '2025-08-02T13:45:00' },
  { title: 'Natación - Torneo Juvenil', start: '2025-08-03T09:00:00' },
  { title: 'Fútbol Femenino - Entrenamiento', start: '2025-08-03T18:30:00' },
  { title: 'Charla Nutricional Deportiva', start: '2025-08-04T17:00:00' },
  { title: 'Vóley - Entrenamiento Sub 18', start: '2025-08-04T19:00:00' },
  { title: 'Yoga - Clase Abierta', start: '2025-08-05T08:00:00' },
  { title: 'Fútbol - Partido Libre', start: '2025-08-05T21:00:00' },
  { title: 'Básquet - Partido Sub 17', start: '2025-08-06T19:30:00' },
  { title: 'Tenis - Entrenamiento General', start: '2025-08-06T16:00:00' },
  { title: 'Fútbol - Partido Amistoso', start: '2025-08-07T14:15:00' },
  { title: 'Reunión Técnica de Árbitros', start: '2025-08-07T20:00:00' },
  { title: 'Gimnasia - Clase Infantil', start: '2025-08-08T09:30:00' },
  { title: 'Atletismo - Evaluación Mensual', start: '2025-08-08T11:00:00' },
  { title: 'Taller de Psicología Deportiva', start: '2025-08-09T18:00:00' },
  { title: 'Fútbol - Partido Sub 17', start: '2025-08-09T19:45:00' },
  { title: 'Fiesta del Club - Abierta a Familias', start: '2025-08-10T20:00:00' }
]

    });

    calendar.render();
  });