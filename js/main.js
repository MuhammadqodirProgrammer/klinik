const doctorList = document.querySelector(".backendList");
const List2 = document.querySelector(".backendListOrder");
const getAsyncFunc = async (post_url) => {
	const res = await fetch(`http://localhost:3000/api/${post_url}`, {
		method: 'GET',
	});
	const data = (await res.json())?.data;
	return data;
};
const doctorRender = (arr, list = doctorList) => {
	list.innerHTML = '';
	arr.forEach(async (el) => {
		const clinic = (await getAsyncFunc(`clinics/${el?.doctor_clinic_address}`))
			?.clinic;

		list.innerHTML += `
    
    <a href="../pages/singleClinic.html" data-doctor-id="${el?._id}" class="card_box doctor_id">
    <div class="card_top doctor_id " data-doctor-id="${el?._id}">
<img class="card_top_img doctor_id" data-doctor-id="${el?._id}" src="http://localhost:3000/${el?.image}" alt="">
    </div>
    <div class="card_body doctor_id" data-doctor-id="${el?._id}" >
    <h4 class="card_body_title ">${el?.doctor_name} ${el?.doctor_lname}</h4>
    <p class="card_body_pr">Specialty:${el?.doctor_specialty}</p>
    <p class="card_body_pr">Floor:${el?.doctor_floor_no} ,room:${
			el?.doctor_room_no
		}</p>
<p class="card_body_pr">Qualification:${el?.doctor_qualification}</p>
<p class="card_body_pr">Work:${el?.doctor_working_day} ,${
			el?.doctor_working_time
		}</p>
<p class="card_body_pr">Working time:${el?.doctor_working_time}</p>
<p class="card_body_pr">Clinic:${clinic ? clinic?.clinic_name : ''}</p>
<p class="card_body_pr">Tell:${el?.doctor_phone_number}</p>

    </div>
    <div class="card_box_footer">
    
    </div>

  </a>


    `;
	});
};

const Deliveries = () => {
  fetch(`http://localhost:3000/api/doctors`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then(data =>{
      console.log(data.data);
      if(data?.data){
        doctorRender(data?.data)
      }
      // getClient2(data?.data, List2);
    })
    .catch((err) => console.log(err));
};



Deliveries();
// Deliveries2();
doctorList.addEventListener("click" ,(e)=>{

  if(e.target.matches(".doctor_id")){
    const doctor_id =e.target.dataset?.doctorId
    localStorage.setItem("doctor_id" ,doctor_id)
  }
})
