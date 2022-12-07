$(function () {
  $('.cycler').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: true
  });

  $('#partners').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // setting the active page
  var url = window.location.href;
  $('.drop-ul li.nav-item a.nav-link[href="' + url + '"]').addClass('active');

  var txt = document.getElementById('text');
  var hero = document.getElementById('hero');
  // about page
  if (url.endsWith('about.php')) {
    txt.innerHTML = 'About Us';
  }
  // products page
  if (url.endsWith('products.php')) {
    txt.innerHTML = 'Products & Services';
    hero.style.backgroundImage = 'url("assets/img/Cassava.jpg")';
  }

  // partners
  if (url.endsWith('partners.php')) {
    txt.innerHTML = 'Our Partners';
    hero.style.backgroundImage = 'url("assets/img/partners.jpeg")';
  }
  
  // social impact
  if (url.endsWith('social-impact.php')) {
    txt.innerHTML = 'Social Impact';
    hero.style.backgroundImage = 'url("assets/img/community.jpg")';
  }

  // Join us
  if (url.endsWith('join-us.php')) {
    txt.innerHTML = 'Join Us';
    hero.style.backgroundImage = 'url("assets/img/join.jpg")';
  }



  // team page
  if (url.endsWith('our-team.php')) {
    txt.innerHTML = 'Meet Our Team';
    hero.style.backgroundImage = 'url("assets/img/team.jpg")';
  }

  // why choose us page
  if (url.endsWith('why-choose-us.php')) {
    txt.innerHTML = 'Why Choose Us';
    hero.style.backgroundImage = 'url("assets/img/plantation.jpg")';

    var more = 'We in the process of certifying our products and operations to Local and international industry benchmarks including the ISO - International Organization for Standardization 9001; 45001, 14001 standards and the Standards Organization of Nigeria (SON) MANCAP certification scheme. We consider sustainability to be critical part of long-term strategy. We work towards creating value through our operations making positive impact on the communities where we operate. Our cooperate Social Responsibility (CSR) strategy enlist critical areas and development needs in our communities that we hope to affect these include Educational Support, Provision of Portable Water, and assistance with capital and Infrastructural work including road and classroom rehabilitation. We assure all our stakeholders of our commitment to ethical operations we commit to full compliance with all applicable and legal for operations.';

    const el = document.getElementById('why-us-more');
    $('#read').click(() => {
      el.innerHTML = more;
      $('#read').hide();
    })


    // more for ESG
    var esgTxt = '<h6 class="mt-3 text-primary-color text-bold ">Health and Safety</h6> <hr style="width: 50px; border: 2px solid #7aa354; margin-left: 0" /> <p class="why-us-text">We believe health and safety is critical to our long-term success, we are therefore committed to protecting all our employees, subcontractors, vendors, site visitors and the general public. We strive toward the goal of zero incidents, adopting international best safety practices including ISO 45001 to guide our operations. We are pro-active about safety building a safety system with a culture that includes proper training; planning and tasking of work; implementation of safe work practices; prompt investigation of “near misses”; and the desire for continuous improvement.</p> <h6 class="mt-3 text-primary-color text-bold">Corporate Social Responsibility</h6> <hr style="width: 50px; border: 2px solid #7aa354; margin-left: 0" /> <p class="why-us-text">At Crest Agro Products Limited we strive to be good corporate citizens prompting shared values in the communities where we operate. We recognise the value of good understanding and cooperation with our host communities for sustained business success and work continuously to engage and relate with our various communities building mutual trust. We consider the development of our host communities to be part of the shared values from our activities. We commit resources to achieving our Corporate Social Responsibility (CSR) plan which is aimed at promoting development through educational support, capacity building in Agro business, provision of potable water and other strategic needs.</p>';

    const esg = document.getElementById('why-us');
    $('#readMore').click(() => {
      esg.innerHTML = esgTxt;
      $('#readMore').hide();
    })

  }

  var txt = 'Our vision is "To be the leading producer of food grade cassava starch for industrial users in Nigeria and the broader West Africa sub-region”. Our mission is “To be the preferred supplier of food grade cassava starch, and select derivatives, to the multinational and indigenous commercial users of the product(s) that are operational in Nigeria and the broader West and Central African region”. CAP currently runs a fully automated processing plant with a capacity of 21600MT/annum of High Quality Cassava Starch (HQCS) located on a 70 hectare land at Achabo, Kogi Local Government Area in Kogi State. At full scale, CAP will operate at a capacity to produce up to 100,000 metric tonnes of starch per annum and create employment for over 3,500 people across the entire cassava value chain. In order to have a sustainable raw material to feed her factory, CAP is establishing an integrated cassava farm on 13,000 hectares of farmland in Adavi/Lokoja Local Government Areas and developing a sustainable outgrowers programme in 8 Local Governments in Kogi State.';

  const el = document.getElementById('more');
  $('#read-more').click(() => {
    el.innerHTML = txt;
    $('#read-more').hide();
  })
});