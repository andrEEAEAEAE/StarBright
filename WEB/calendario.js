const months = [
  "Enero","Febrero","Marzo","Abril",
  "Mayo","Junio","Julio","Agosto",
  "Septiembre","Octubre","Noviembre","Diciembre"
];

let currentDate = new Date(2026,2,15);
let events = JSON.parse(localStorage.getItem("calendarEvents")) || {};
function guardarEventos(){
    localStorage.setItem("calendarEvents", JSON.stringify(events));
}

function renderCalendar(){

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  document.getElementById("monthYear").innerText =
    `${months[month]} ${year}`;

  const calendar = document.getElementById("calendar");

  calendar.innerHTML = "";

  const firstDay =
    new Date(year,month,1).getDay();

  const lastDate =
    new Date(year,month+1,0).getDate();

  const prevLastDate =
    new Date(year,month,0).getDate();

  const totalCells = 35;

  for(let i = firstDay; i > 0; i--){

    const div = document.createElement("div");

    div.className = "day inactive";

    div.innerHTML = `
      <div class="day-number">
        ${prevLastDate - i + 1}
      </div>
    `;

    calendar.appendChild(div);

  }

  for(let day = 1; day <= lastDate; day++){

    const div = document.createElement("div");

    div.className = "day";

    const key = `${year}-${month+1}-${day}`;

    const hasEvent = events[key];

    if(
      day === currentDate.getDate() &&
      month === currentDate.getMonth()
    ){
      div.classList.add("selected");
    }

    div.innerHTML = `
      <div class="day-number">${day}</div>
      ${hasEvent ? '<div class="dot"></div>' : ''}
    `;

    div.addEventListener("click",()=>{

      currentDate =
        new Date(year,month,day);

      renderCalendar();
      updateEventCard();

    });

    calendar.appendChild(div);

  }

}

function updateEventCard(){

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  document.getElementById("selectedDateText").innerText =
    `${day} de ${months[month]}`;

  const key =
    `${year}-${month+1}-${day}`;

  const event = events[key];

  if(event){

    document.getElementById("eventName").innerText =
      event.title;

    document.getElementById("eventTime").innerText =
      event.time;

  }else{

    document.getElementById("eventName").innerText =
      "Sin clases programadas";

    document.getElementById("eventTime").innerText =
      "No hay eventos agendados";

  }

  updateSummary();

}


function updateSummary(){

  const total = Object.keys(events).length;

  document.getElementById("classesCount").innerText = total;
  document.getElementById("eventsCount").innerText = total;

}

document.getElementById("prevBtn")
.addEventListener("click",()=>{

  currentDate.setMonth(
    currentDate.getMonth() - 1
  );

  renderCalendar();
  updateEventCard();

});

document.getElementById("nextBtn")
.addEventListener("click",()=>{

  currentDate.setMonth(
    currentDate.getMonth() + 1
  );

  renderCalendar();
  updateEventCard();

});

document.getElementById("todayBtn")
.addEventListener("click",()=>{

  currentDate = new Date();

  renderCalendar();
  updateEventCard();

});

const modalOverlay =
  document.getElementById("modalOverlay");

const closeModal =
  document.getElementById("closeModal");

const saveEvent =
  document.getElementById("saveEvent");

const classNameInput =
  document.getElementById("classNameInput");

const classTimeInput =
  document.getElementById("classTimeInput");

document.getElementById("newClassBtn")
.addEventListener("click",()=>{

  modalOverlay.style.display = "flex";

});
closeModal.addEventListener("click",()=>{

  modalOverlay.style.display = "none";

});
modalOverlay.addEventListener("click",(e)=>{

  if(e.target === modalOverlay){

    modalOverlay.style.display = "none";

  }

});
saveEvent.addEventListener("click",()=>{

  const title = classNameInput.value.trim();
  const time = classTimeInput.value.trim();

  if(!title || !time) return;

  const key =
    `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

  events[key] = {
    title,
    time
  };

  
  guardarEventos();

  classNameInput.value = "";
  classTimeInput.value = "";

  modalOverlay.style.display = "none";

  renderCalendar();
  updateEventCard();

});



document.getElementById("deleteBtn")
.addEventListener("click",()=>{

  const key =
    `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;

  if(events[key]){
    delete events[key];

    // Actualizar localStorage
    guardarEventos();
  }

  renderCalendar();
  updateEventCard();

});
renderCalendar();
updateEventCard();