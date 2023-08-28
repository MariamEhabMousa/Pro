const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
      })
    }
  }
  showMenu('header-toggle','nav-menu')

  /*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Json data fetching
let url = "./index.json";

fetch(url).then( (res) =>{
  return res.json();
}).then( (data) =>{
  const obj = data;

  // navigation portion
  document.querySelector("#navLogo1").src = obj.logo;
  document.querySelector("#navLogo2").src = obj.logo;
  document.querySelector("#item_1").innerHTML = obj.nav_item_1;
  document.querySelector("#item_2").innerHTML = obj.nav_item_2;
  document.querySelector("#item_3").innerHTML = obj.nav_item_3;
  document.querySelector("#item_4").innerHTML = obj.nav_item_4;
  document.querySelector("#item_5").innerHTML = obj.nav_item_5;

  // Parallax section
  document.querySelector("#heading").innerHTML = obj.parallax_heading;
  document.querySelector("#para").innerHTML = obj.parallax_subHeading;

  // Service portion
  document.querySelector("#serviceHeading").innerHTML = obj.service_title;
  document.querySelector("#content1").innerHTML = obj.service_heading;
  document.querySelector("#contentpara").innerHTML = obj.service_para;
  document.querySelector("#pdr_head_1").innerHTML = obj.pdr_head_1;
  document.querySelector("#pdr_para_1").innerHTML = obj.pdr_para_1;
  document.querySelector("#pdr_head_2").innerHTML = obj.pdr_head_2;
  document.querySelector("#pdr_para_2").innerHTML = obj.pdr_para_2;
  document.querySelector("#pdr_head_3").innerHTML = obj.pdr_head_3;
  document.querySelector("#pdr_para_3").innerHTML = obj.pdr_para_3;
  document.querySelector("#pdr_head_4").innerHTML = obj.pdr_head_4;
  document.querySelector("#pdr_para_4").innerHTML = obj.pdr_para_4;
  document.querySelector("#pdr_head_5").innerHTML = obj.pdr_head_5;
  document.querySelector("#pdr_para_5").innerHTML = obj.pdr_para_5;
  document.querySelector("#pdr_head_6").innerHTML = obj.pdr_head_6;
  document.querySelector("#pdr_para_6").innerHTML = obj.pdr_para_6;

  // About Section
  document.querySelector("#aboutHead").innerHTML = obj.about_title;
  document.querySelector("#aboutPara").innerHTML = obj.about_subTitle;
  document.querySelector(".aboutbodyHead").innerHTML = obj.about_body_head;
  document.querySelector("#bdy_h_1").innerHTML = obj.about_bdy_h_1;
  document.querySelector("#bdy2").innerHTML = obj.about_bdy2;
  document.querySelector("#bdy_h_2").innerHTML = obj.about_bdy_h_2;
  document.querySelector("#bdy_p_1").innerHTML = obj.about_bdy_p_1;
  document.querySelector("#bdy_h_3").innerHTML = obj.about_bdy_h_3;
  document.querySelector("#bdy_p_2").innerHTML = obj.about_bdy_p_2;

  // gallery portion
  document.querySelector("#galleryHeading").innerHTML = obj.gallery;
  document.querySelector("#Img1").src = obj.Img_1;
  document.querySelector("#Img2").src = obj.Img_2;
  document.querySelector("#Img3").src = obj.Img_3;
  document.querySelector("#Img4").src = obj.Img_4;
  document.querySelector("#Img5").src = obj.Img_5;
  document.querySelector("#Img6").src = obj.Img_6;
  document.querySelector("#Img7").src = obj.Img_7;
  document.querySelector("#Img8").src = obj.Img_8;
  document.querySelector("#Img9").src = obj.Img_9;

  // Contact portion
  document.querySelector("#contact_title").innerHTML = obj.contact;
  document.querySelector("#contact_heading").innerHTML = obj.contact_heading;
  document.querySelector("#address").innerHTML = obj.contact_address;
  document.querySelector("#mail").innerHTML = obj.contact_mail;
  document.querySelector("#mail").href = obj.contact_mail_id;
  document.querySelector("#tel").innerHTML = obj.contact_tel;
  document.querySelector("#tel").href = obj.contact_tel_no;
  document.querySelector("#facebook").href = obj.fb_id;
  document.querySelector("#tweeter").href = obj.tweeter_id;
  document.querySelector("#instagram").href = obj.insta_id;
  document.querySelector("#whatapp").href = obj.whatapp_id;
  document.querySelector(".mapBox").src = obj.map_add; 
})