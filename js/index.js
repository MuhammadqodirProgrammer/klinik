const clinicList = document.querySelector(".clinic_list")
const doctorList = document.querySelector(".doctor_list")


const doctorRender = (arr, list = doctorList) => {
	list.innerHTML = '';
  const topDoctor = arr.slice(0, 4);
  console.log(topDoctor);

	topDoctor.forEach(async (el) => {
		
console.log(el ,"doctor");
		list.innerHTML += `
    <div
    class="elementor-element elementor-element-5db38d71 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box"
    data-id="5db38d71" data-element_type="widget" data-widget_type="image-box.default">
    <div class="elementor-widget-container">
      <div class="doctor_frapper">
          <img width="100" height="180"
            src="http://localhost:3000/${el?.image}"
            class="" alt="" loading="lazy" />

        <div class="elementor-image-box-content">
          <h4 class="elementor-image-box-title">
          ${el?.doctor_name + " " + el?.doctor_lname}
          </h4>
          <p class="elementor-image-box-description">
          qualification: ${el?.doctor_qualification}
          </p>
          <p class="elementor-image-box-description">
          tell: ${el?.doctor_phone_number}
         </p>
        </div>
      </div>
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
            console.log(data?.data);
			renderFunc(data?.data);
		});
};
const clinicRender = (arr, list = clinicList) => {
	list.innerHTML = '';
	arr.forEach((el) => {
		list.innerHTML += `
    
    <div class="card_box">
    <div class="card_top">
<img class="card_top_img_index" src="http://localhost:3000/${el.image}" alt="">
    </div>
    <div class="card_body">
<h4 class="card_body_title">${el?.clinic_name}</h4>
<p class="card_body_pr">Adress:${el?.clinic_address}</p>
<p class="card_body_pr">Tell:${el?.call_center}</p>
<p class="card_body_pr">About:${el?.clinic_about}</p>

    </div>
  </div>


    `;
	
    });
};
console.log(8520895620);
getFunc('clinics', clinicRender);
getFunc('doctors', doctorRender);