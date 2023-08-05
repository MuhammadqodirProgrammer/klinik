const elNavStatistic = document.querySelector('.statistic_nav');
const elNavClinick = document.querySelector('.clinic_nav');
const elNavDoctor = document.querySelector('.doctor_nav');
const elNavServise = document.querySelector('.service_nav');
const StatisticsBox = document.querySelector('.statistics_box');
const clinicBox = document.querySelector('.clinic_box');
const doctorBox = document.querySelector('.doctor_box');
const servicesBox = document.querySelector('.service_box');
// modals el
const token =localStorage.getItem("token")

const owerlayClinic = document.querySelector('.owerlay_clinic');
const editClinicModal = document.querySelector('.edit_owerlay_clinic');
const doctorModal = document.querySelector('.owerlay_doctor');
const editDoctorModal = document.querySelector('.edit_owerlay_doctor');
const modalService = document.querySelector('.owerlay_service');
const editModalService= document.querySelector('.edit_owerlay_service');

const loginForm =document.querySelector(".login_form")
const owerlay_login =document.querySelector(".owerlay_login")
const login_close =document.querySelector(".login_close")
const admin_name =document.getElementById("admin_name")
const admin_pass =document.getElementById("admin_pass")
if(!token) {
    owerlay_login.classList.add("active")
}

login_close.addEventListener("click" ,()=>location.replace("../index.html"))
loginForm.addEventListener("submit" ,(e) =>{
    e.preventDefault()
    const data ={
        username :admin_name.value,
        password:admin_pass.value
    }
    console.log(data);
	fetch(`http://localhost:3000/api/adminlogin`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data?.token) {
                owerlay_login.classList.remove("active")
localStorage.setItem("token" ,data?.token)
            }
		});
    
})




const activefunc = (addActive) => {
	StatisticsBox.classList.remove('active_section');
	clinicBox.classList.remove('active_section');
	doctorBox.classList.remove('active_section');
	servicesBox.classList.remove('active_section');
	StatisticsBox.classList.add('not_active_section');
	addActive.classList.add('active_section');
};

const activeModal = (addActive) => {
	editClinicModal.classList.remove('active');
	doctorModal.classList.remove('active');
	modalService.classList.remove('active');
	editModalService.classList.remove('active');
	editDoctorModal.classList.remove('active');
	addActive.classList.add('active');
};

elNavClinick.addEventListener('click', () => activefunc(clinicBox));
elNavDoctor.addEventListener('click', () => activefunc(doctorBox));
elNavServise.addEventListener('click', () => activefunc(servicesBox));
elNavStatistic.addEventListener('click', () => activefunc(StatisticsBox));
// Lists
const clinicList = document.querySelector('.clinic_list');
const doctorList = document.querySelector('.doctor_list');
const serviceList = document.querySelector('.service_list');
// add and close btn start
const elCloseClinic = document.querySelector('.clinic_close');
const elCloseDoctor = document.querySelector('.doctor_close');
const elCloseService = document.querySelector('.edit_service_close');
const elEditCloseDoctor = document.querySelector('.edit_doctor_close');
const addClinic = document.querySelector('.add_clinic');
const addDoctor = document.querySelector('.add_doctor');
const addServise = document.querySelector('.add_servise');
const addEditDoctor = document.querySelector('.edit_doctor_send');
const createClinicForm = document.querySelector('.clinic_form');
const createDoctorForm = document.querySelector('.doctor_form');
const createServiceForm = document.querySelector('.service_form');
const editDoctorForm = document.querySelector('.edit_doctor_form');
const editServiceForm = document.querySelector('.edit_service_form');


//  inputs list
const elClinicList = document.querySelector('.clinic_list');
// create
const clinic_name = document.getElementById('clinic_name');
const clinic_address = document.getElementById('clinic_address');
const call_center = document.getElementById('call_center');
const clinic_image = document.getElementById('clinic_image');
const clinic_about = document.getElementById('clinic_about');
// edit
const elEditClinicForm = document.querySelector('.edit_clinic');
const edit_clinic_name = document.getElementById('edit_clinic_name');
const edit_clinic_address = document.getElementById('edit_clinic_address');
const edit_call_center = document.getElementById('edit_call_center');
const edit_clinic_image = document.getElementById('edit_clinic_image');
const edit_clinic_about = document.getElementById('edit_clinic_about');
const editClose = document.querySelector('.edit_clinic_close');
// create doctor
const doctor_name = document.getElementById('doctor_name');
const doctor_lname = document.getElementById('doctor_lname');
const doctor_phone_number = document.getElementById('doctor_phone_number');
const doctor_specialty = document.getElementById('doctor_specialty');
const doctor_working_time = document.getElementById('doctor_working_time');
const doctor_working_day = document.getElementById('doctor_working_day');
const doctor_floor_no = document.getElementById('doctor_floor_no');
const doctor_room_no = document.getElementById('doctor_room_no');
const doctor_qualification = document.getElementById('doctor_qualification');
const doctor_clinic_address = document.getElementById('doctor_clinic_address');
const doctor_image = document.getElementById('doctor_image');

// edit doctor
const edit_doctor_name = document.getElementById('edit_doctor_name');
const edit_doctor_lname = document.getElementById('edit_doctor_lname');
const edit_doctor_phone_number = document.getElementById(
	'edit_doctor_phone_number'
);
const edit_doctor_specialty = document.getElementById('edit_doctor_specialty');
const edit_doctor_working_time = document.getElementById(
	'edit_doctor_working_time'
);
const edit_doctor_working_day = document.getElementById(
	'edit_doctor_working_day'
);
const edit_doctor_floor_no = document.getElementById('edit_doctor_floor_no');
const edit_doctor_room_no = document.getElementById('edit_doctor_room_no');
const edit_doctor_qualification = document.getElementById(
	'edit_doctor_qualification'
);
const edit_doctor_clinic_address = document.getElementById(
	'edit_doctor_clinic_address'
);
const edit_doctor_image = document.getElementById('edit_doctor_image');

editClose.addEventListener('click', () =>
	editClinicModal.classList.remove('active')
);

// create service
const service_name = document.getElementById('service_name');
const service_price = document.getElementById('service_price');
const service_clinic_address = document.getElementById('service_clinic_address');

// edit service
const edit_service_name = document.getElementById('edit_service_name');
const edit_service_price = document.getElementById('edit_service_price');
const edit_service_clinic_address = document.getElementById('edit_service_clinic_address');
// search
const clinic_search = document.querySelector(".clinic_search")
const doctor_search = document.querySelector(".doctor_search")
const service_search = document.querySelector(".service_search")
// statistic
const count_clincs =document.querySelector(".count_clincs")
const doctor_count =document.querySelector(".doctor_count")
const service_count =document.querySelector(".service_count")
const service_statistic = document.getElementById('service_statistic');
console.log(token);
// FUNCTIONS

const doctorRender = (arr, list = doctorList) => {
	list.innerHTML = '';
    doctor_count.innerHTML =arr?.length
	arr.forEach(async (el) => {
		const clinic = (await getAsyncFunc(`clinics/${el?.doctor_clinic_address}`))
			?.clinic;

		list.innerHTML += `
    
    <div class="card_box">
    <div class="card_top">
<img class="card_top_img" src="http://localhost:3000/${el?.image}" alt="">
    </div>
    <div class="card_body">
    <h4 class="card_body_title">${el?.doctor_name} ${el?.doctor_lname}</h4>
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
      <button class="general_btn doctor_edit" data-doctor-id="${
				el?._id
			}">Edit</button>
      <button type="button" data-doctor-id="${
				el?._id
			}" class="general_btn   doctor_delete" >Delete</button>
    </div>

  </div>


    `;
	});
};

const getFunc = (post_url, renderFunc) => {
	fetch(`http://localhost:3000/api/${post_url}`, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
            console.log(data?.data ,"get");
			renderFunc(data?.data);
		});
};

const cteateFunc = (post_url, data) => {
	fetch(`http://localhost:3000/api/${post_url}`, {
		method: 'POST',
		headers: {
			"Authorization": `Bearer ${token}`,
		},
		body: data,
	})
		.then((res) => res.json())
		.then((data) => {
			if (data?.message) {
				// getFunc('doctors', doctorRender);
			}
		});
};

const updatedFunc = (post_url, data) => {
	fetch(`http://localhost:3000/api/${post_url}`, {
		method: 'PUT',
		headers: {
			"Authorization": `Bearer ${token}`,
		},
		body: data,
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};

const clinicRender = (arr, list = clinicList) => {
	list.innerHTML = '';
    count_clincs.innerHTML =arr?.length
	doctor_clinic_address.innerHTML = `<option value="" disabled selected >Select Clinic </option>`;
	service_clinic_address.innerHTML = `<option value="" disabled selected >Select Clinic </option>`;
	edit_doctor_clinic_address.innerHTML = `<option value="" disabled selected >Select Clinic </option>`;
	edit_service_clinic_address.innerHTML = `<option value="" disabled selected >Select Clinic </option>`;

	arr.forEach((el) => {
		list.innerHTML += `
    
    <div class="card_box">
    <div class="card_top">
<img class="card_top_img" src="http://localhost:3000/${el.image}" alt="">
    </div>
    <div class="card_body">
<h4 class="card_body_title">${el?.clinic_name}</h4>
<p class="card_body_pr">Adress:${el?.clinic_address}</p>
<p class="card_body_pr">Tell:${el?.call_center}</p>
<p class="card_body_pr">About:${el?.clinic_about}</p>

    </div>
    <div class="card_box_footer">
      <button class="general_btn clinic_edit" data-clinic-id="${el?._id}">Edit</button>
      <button type="button" data-clinic-id="${el?._id}" class="general_btn   clinic_delete" >Delete</button>
    </div>

  </div>


    `;
		doctor_clinic_address.innerHTML += `<option value="${el?._id}">${el?.clinic_name}</option>`;
		edit_doctor_clinic_address.innerHTML += `<option value="${el?._id}">${el?.clinic_name}</option>`;
        service_clinic_address.innerHTML += `<option value="${el?._id}">${el?.clinic_name}</option>`;
        edit_service_clinic_address.innerHTML += `<option value="${el?._id}">${el?.clinic_name}</option>`;
    });
};
const ServiceRender = (arr, list = serviceList) => {
	list.innerHTML = '';
    service_count.innerHTML =arr?.length
    
	arr.forEach(async (el) => {
        const clinic = (await getAsyncFunc(`clinics/${el?.clinic_address}`))
			?.clinic;
        console.log(clinic ,"clinic");
		list.innerHTML += `
    
    <div class=" service_card_box">
    
<h5 >Service name: ${el?.service_name}</h5>
<p class="">Service price:${el?.service_price}</p>
<p class="">Tell:${clinic?.clinic_name}</p>
<div class="card_box_footer service_footer">
  <button class="general_btn service_edit" data-service-id="${el?._id}">Edit</button>
  <button type="button" data-service-id="${el?._id}" class="general_btn   service_delete" >Delete</button>
</div>

  </div>


    `;
	});

    const top = arr.slice(0, 4);
    top.forEach(async (el) => {
        service_statistic.innerHTML =""
		service_statistic.innerHTML += `
    
        <div class="d-flex flex-between-center mb-1">
        <div class="d-flex align-items-center">
          <span class="dot bg-primary"></span><span class="fw-semi-bold">${el?.service_name}</span>
        </div>
      </div>


    `;
	});


};

const getAsyncFunc = async (post_url) => {
	const res = await fetch(`http://localhost:3000/api/${post_url}`, {
		method: 'GET',
	});
	const data = (await res.json())?.data;
	return data;
};
const editClinic = (id) => {
	fetch(`http://localhost:3000/api/clinics/${id}`, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
			const d = data?.data.clinic;
			if (d) {
				edit_clinic_name.value = d?.clinic_name;
				edit_clinic_address.value = d?.clinic_address;
				edit_call_center.value = d?.call_center;
				edit_clinic_about.value = d?.clinic_about;
				activeModal(editClinicModal);

				elEditClinicForm.addEventListener('submit', (evt) => {
					evt.preventDefault();
					const formData = new FormData();
					formData.append('clinic_name', edit_clinic_name.value);
					formData.append('clinic_address', edit_clinic_address.value);
					formData.append('call_center', edit_call_center.value);
					formData.append('image', edit_clinic_image.files[0] || null);
					formData.append('clinic_about', edit_clinic_about.value);
					updatedFunc(`clinics/${id}`, formData);
					setTimeout(() => {
						getFunc('clinics', clinicRender);
					}, 500);
					editClinicModal.classList.remove('active');
				});
			}
		});
};

const deleteClinicFunc = (id) => {
	fetch(`http://localhost:3000/api/clinics/${id}`, {
        method: 'DELETE',
        headers: {
			"Authorization": `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data, 'delete data');
			if (data) {
				getFunc('clinics', clinicRender);
			}
		});
};

const deleteDoctorFunc = (id) => {
	console.log(id);
	fetch(`http://localhost:3000/api/doctor/${id}`, {
		method: 'DELETE',
        headers: {
			"Authorization": `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data, 'delete data');
			if (data) {
				getFunc('doctors', doctorRender);
			}
		});
};
const deleteServiceFunc = (id) => {
	console.log(id);
	fetch(`http://localhost:3000/api/service/${id}`, {
		method: 'DELETE',
        headers: {
			"Authorization": `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data, 'delete data');
			if (data) {
				getFunc('service', ServiceRender);
			}
		});
};
const editDoctor = (id) => {
	fetch(`http://localhost:3000/api/doctor/${id}`, {
		method: 'GET',
        headers: {
			"Authorization": `Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			const d = data?.data?.doctor;
			activeModal(editDoctorModal);
			if (d) {
				edit_doctor_name.value = d?.doctor_name;
				edit_doctor_lname.value = d?.doctor_lname;
				edit_doctor_phone_number.value = d?.doctor_phone_number;
				edit_doctor_specialty.value = d?.doctor_specialty;
				edit_doctor_working_time.value = d?.doctor_working_time;
				edit_doctor_working_day.value = d?.doctor_working_day;
				edit_doctor_floor_no.value = d?.doctor_floor_no;
				edit_doctor_room_no.value = d?.doctor_room_no;
				edit_doctor_qualification.value = d?.doctor_qualification;

				editDoctorForm.addEventListener('submit', (evt) => {
					evt.preventDefault();
					const formData = new FormData();
					formData.append('doctor_name', edit_doctor_name.value);
					formData.append('doctor_lname', edit_doctor_lname.value);
					formData.append(
						'doctor_phone_number',
						edit_doctor_phone_number.value.toString()
					);
					formData.append('doctor_specialty', edit_doctor_specialty.value);
					formData.append(
						'doctor_working_time',
						edit_doctor_working_time.value
					);
					formData.append('doctor_working_day', edit_doctor_working_day.value);
					formData.append('doctor_floor_no', +edit_doctor_floor_no.value);
					formData.append('doctor_room_no', +edit_doctor_room_no.value);
					formData.append(
						'doctor_qualification',
						edit_doctor_qualification.value
					);
					if (edit_doctor_clinic_address.value) {
						formData.append(
							'doctor_clinic_address',
							edit_doctor_clinic_address.value
						);
					} else {
						formData.append('doctor_clinic_address', null);
					}
					formData.append('image', edit_doctor_image.files[0]);
					console.log(id);
					fetch(`http://localhost:3000/api/doctor/${id}`, {
						method: 'PUT',
						// headers: {
						// 	"Authorization": `Bearer ${token}`,
						// },
						body: formData,
					})
						.then((res) => res.json())
						.then((data) => console.log(data, 'edit data'));
					setTimeout(() => {
						getFunc('doctors', doctorRender);
					}, 1000);
					editDoctorModal.classList.remove('active');
				});
			}
		});
};


getFunc('clinics', clinicRender);

const editService = (id) => {
	fetch(`http://localhost:3000/api/service/${id}`, {
		method: 'GET',

	})
		.then((res) => res.json())
		.then((data) => {
			const d = data?.data;
            console.log(d ,"data") ;
			if (d) {
               edit_service_name.value= d?.service_name
                edit_service_price.value= d?.service_price
                // service_clinic_address.value= d
				activeModal(editModalService);

				editServiceForm.addEventListener('submit', (evt) => {
					evt.preventDefault();
                    console.log(52063);
					const formData = new FormData();
                    formData.append('service_name', edit_service_name.value);
                    formData.append('service_price', +edit_service_price.value);
                    formData.append('clinic_address', edit_service_clinic_address.value);
					updatedFunc(`service/${id}`, formData);
					setTimeout(() => {
						getFunc('service', ServiceRender);
					}, 500);
					editModalService.classList.remove('active');
				});
			}
		});
};
// clinic events
addClinic.addEventListener('click', () =>
	owerlayClinic.classList.add('active')
);
elCloseClinic.addEventListener('click', () =>
	owerlayClinic.classList.remove('active')
);
elCloseService.addEventListener('click', () =>
editModalService.classList.remove('active')
);
// doctor evetns

addDoctor.addEventListener('click', () => doctorModal.classList.add('active'));
addServise.addEventListener('click', () => modalService.classList.add('active'));
elEditCloseDoctor.addEventListener('click', () =>
	editDoctorModal.classList.remove('active')
);
elEditCloseDoctor.addEventListener('click', () =>
	doctorModal.classList.remove('active')
);
// get doctors
getFunc('doctors', doctorRender);

createDoctorForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const formData = new FormData();

	formData.append('doctor_name', doctor_name.value);
	formData.append('doctor_lname', doctor_lname.value);
	formData.append('doctor_phone_number', doctor_phone_number.value.toString());
	formData.append('doctor_specialty', doctor_specialty.value);
	formData.append('doctor_working_time', doctor_working_time.value);
	formData.append('doctor_working_day', doctor_working_day.value);
	formData.append('doctor_floor_no', +doctor_floor_no.value);
	formData.append('doctor_room_no', +doctor_room_no.value);
	formData.append('doctor_qualification', doctor_qualification.value);
	formData.append('doctor_clinic_address', doctor_clinic_address.value);
	formData.append('image', doctor_image.files[0]);

	cteateFunc('doctors', formData);
	setTimeout(() => {
		getFunc('doctors', doctorRender);
	}, 1000);

	doctorModal.classList.remove('active');
});
doctorList.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.matches('.doctor_edit')) {
		const id = e.target?.dataset?.doctorId;
		editDoctor(id);
	}
	if (e.target.matches('.doctor_delete')) {
		const id = e.target?.dataset?.doctorId;
		deleteDoctorFunc(id);
	}
});

createClinicForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const formData = new FormData();
    console.log(call_center.value);
	formData.append('clinic_name', clinic_name.value);
	formData.append('clinic_address', clinic_address.value);
	formData.append('call_center', call_center.value);
	formData.append('image', clinic_image.files[0]);
	formData.append('clinic_about', clinic_about.value);
	cteateFunc('clinics', formData);
	setTimeout(() => {
		getFunc('clinics', clinicRender);
	}, 700);
	owerlayClinic.classList.remove('active');
    clinic_name.value=""
clinic_address.value=""
call_center.value=""
clinic_about.value=""
});
// edit delite clinic

elClinicList.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.matches('.clinic_edit')) {
		const id = e.target?.dataset?.clinicId;
		editClinic(id);
	}
	if (e.target.matches('.clinic_delete')) {
		const id = e.target?.dataset?.clinicId;
		deleteClinicFunc(id);
	}
});
// edit delite doctor

// servise

getFunc('service', ServiceRender);

createServiceForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const formData = new FormData();
	formData.append('service_name', service_name.value);
	formData.append('service_price', +service_price.value);
	formData.append('clinic_address', service_clinic_address.value);
	cteateFunc('service', formData);
	setTimeout(() => {
		getFunc('service', ServiceRender);
	}, 700);
	modalService.classList.remove('active');
    service_name.value =""
service_price.value =""
service_clinic_address.value =""
});

serviceList.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.matches('.service_edit')) {
		const id = e.target?.dataset?.serviceId;
        editService(id)
	}
	if (e.target.matches('.service_delete')) {
		const id = e.target?.dataset?.serviceId;
		deleteServiceFunc(id);
	}
});



clinic_search.addEventListener("input" , (e)=>{
    const text =clinic_search.value
    fetch(`http://localhost:3000/api/clinics/search/${text}`, {
    method: 'GET',
    headers:{
        "Content-Type" :"appliocation/json"
    }
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data ,"data" );
        console.log(data?.clinics );
        clinicRender(data?.clinics)
    });
   

    // getFunc(`clinics/search/${e.target.value}`, clinicRender);
})

doctor_search.addEventListener("input" , (e)=>{
    const text =doctor_search.value
    fetch(`http://localhost:3000/api/doctors/search/${text}`, {
    method: 'GET',
    headers:{
        "Content-Type" :"appliocation/json"
    }
})
    .then((res) => res.json())
    .then((data) => {
        if(data?.doctor){
            doctorRender(data?.doctor)
        }
       
    });
   
})


service_search.addEventListener("input" , (e)=>{
    const text =service_search.value
    fetch(`http://localhost:3000/api/service/search/${text}`, {
    method: 'GET',
    headers:{
        "Content-Type" :"appliocation/json"
    }
})
    .then((res) => res.json())
    .then((data) => {
        if(data?.service){
            ServiceRender(data?.service)
        }
       
    });
})

// rustam brat



