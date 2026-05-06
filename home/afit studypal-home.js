document.addEventListener('DOMContentLoaded', () => {
    const mobile_hamburger = document.getElementById('mobile_hamburger_item');
    const mobile_nav = document.querySelector('.mobile_navigations');
    const backdrop = document.getElementById('backdrop');

    mobile_hamburger.addEventListener('click', () => {
        mobile_nav.style.display = 'flex';
        backdrop.style.display = 'block';
    });

    backdrop.addEventListener('click', () => {
        mobile_nav.style.display = 'none';
        backdrop.style.display = 'none';
    })
})


const profile = document.getElementById('profile');
const profile_container = document.querySelector('.profile_container');
const home = document.getElementById('home');
const right_container = document.querySelector('.right_container');
const browse = document.getElementById('browsePDFs');
const browse_container = document.querySelector('.browse_container');

//FOR MOBILE
const mobile_profile = document.getElementById('mobile_profile');
const mobile_home = document.getElementById('mobile_home');
const mobile_browse = document.getElementById('mobile_browsePDFs');

//SHOW HOME CONTAINER FUNCTION
const show_home_container = () => {
    profile_container.style.display = 'none';
    browse_container.style.display='none';
    if (right_container.style.display === 'none') {
        right_container.style.display = 'block';
        renderRandom(carouselData);
    }
}

//SHOW PROFILE CONTAINER FUNCTION
const show_profile_container = () => {
    right_container.style.display = 'none';
    browse_container.style.display = 'none';
    profile_container.style.display = 'block';
}

//SHOW BROWSE CONTAINER FUNCTION
const show_browse_container = () => {
    right_container.style.display = 'none';
    profile_container.style.display = 'none';
    browse_container.style.display = 'block';
}

home.addEventListener('click', show_home_container);
mobile_home.addEventListener('click', show_home_container);
profile.addEventListener('click', show_profile_container);
mobile_profile.addEventListener('click', show_profile_container);
browse.addEventListener('click', show_browse_container); 
mobile_browse.addEventListener('click', show_browse_container);

//LOGOUT FUNCTION
const logout = document.getElementById('logout');
const mobile_logout = document.getElementById('mobile_logout');
const logoutAnimation = document.getElementById('logout_animation');
const logoutFuntion = () => {
    localStorage.clear();
    logoutAnimation.style.display = 'flex';
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 2000);
};

logout.addEventListener('click', logoutFuntion);
mobile_logout.addEventListener('click', logoutFuntion);


// FOR LEFT CONTAINER
const header_item = document.querySelector('.header_item');
const search_wrapper = document.querySelector('.sidebar_search_wrapper');
const search_item = document.querySelectorAll('.sidebar_search_item');
const navigations = document.querySelectorAll('.nav_button');
//const extra_item = document.querySelector('.extra');
const body = document.body;
const hamburger = document.getElementById('hamburger');

// FOR RIGHT CONTAINER
const mobile_search_wrapper = document.querySelector('.mobile_search_wrapper');

//SVGs
const home_icon = `<svg viewBox='0 0 24 24' width='3rem' height='2.5rem'><path fill='#f5f8fa' d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>`;
const logout_icon = `<svg viewBox='0 0 24 24' width='3rem' height='2.5rem'><path d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z' fill='#f5f8fa'></path></svg>`;
const check = `<svg viewBox='0 0 24 24' width='3rem' height='2.5rem'><path d='M12 2c6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='#f5f8fa'/></svg>`;
const profile_icon = `<svg viewBox='0 0 24 24' width='3rem' height='2.5rem'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' fill='#f5f8fa'/></svg>`;
const browse_icon = `<svg viewBox='0 0 24 24' width='3rem' height='2.5rem'><path fill='#f5f8fa' d='M3 5H21V7H3zM3 11H21V13H3zM3 17H21V19H3z'></path></svg>`;

hamburger.addEventListener('click', () => {
    body.classList.toggle('collapsed');
    carousel.classList.toggle('expand');
    aetdCarousel.classList.toggle('expand');
    bamCarousel.classList.toggle('expand');
    CivilCarousel.classList.toggle('expand');
    eedCarousel.classList.toggle('expand');
    magedCarousel.classList.toggle('expand');
    Viewer.classList.toggle('expand');
    modal.classList.toggle('expand');

    if (body.classList.contains('collapsed')) {
        setTimeout(() => {
            header_item.style.display = 'none';
            search_wrapper.style.border = 'none';
            search_wrapper.style.height = '4.6%';
            search_item[0].style.display = 'none';
            search_item[1].style.display = 'none';
            navigations[0].innerHTML = `${home_icon}`;
            navigations[1].innerHTML = `${browse_icon}`;
            navigations[2].innerHTML = `${profile_icon}`;
            navigations[3].innerHTML = `${logout_icon}`;
            //mobile_search_wrapper.style.display = 'flex';
        }, 70);
    } else {
        setTimeout(() => {
            header_item.style.display = 'block';
            search_wrapper.style.border = '1px solid var(--airforce_white)';
            search_item[0].style.display = 'flex';
            search_item[1].style.display = 'flex';
            navigations[0].innerHTML = `${home_icon} Home`;
            navigations[1].innerHTML = `${browse_icon} Browse`;
            navigations[2].innerHTML = `${profile_icon} Profile`;
            navigations[3].innerHTML = `${logout_icon} Logout`;
        }, 250);
    }
});

// FOR DASHBOARD
const greetings = document.getElementById('greetings');
const notices = document.querySelectorAll('.notice');
const ProfileLetter = document.getElementById('profile_letter');
const storedUserData = JSON.parse(localStorage.getItem('userData'));
const NameMessage = document.getElementById('message');
const ProfileLetter2 = document.getElementById('profile_letter2');

greetings.textContent = 'Welcome,' + ' ' + storedUserData.Firstname.charAt(0).toUpperCase() + storedUserData.Firstname.slice(1).toLowerCase() + '.';
ProfileLetter.textContent = storedUserData.Firstname.slice(0, 1).toUpperCase();
NameMessage.textContent = 'Hello,' + ' ' + storedUserData.Firstname.charAt(0).toUpperCase() + storedUserData.Firstname.slice(1).toLowerCase() + '.';
ProfileLetter2.textContent = storedUserData.Firstname.slice(0, 1).toUpperCase();
notices[0].innerHTML = '✔';
notices[3].innerHTML = storedUserData.MatricNumber.toUpperCase();
notices[4].innerHTML = 'Coming Soon';
notices[5].innerHTML = 'Coming Soon';

const data=[
    {title:'MTH 201',course:'Logic and Linear Algebra',pdfUrl:'/Images/features3.jpeg'},
    {title:'PHY 201',course:'Physics',pdfUrl:`./Images/dashboard1.jpeg`},
    {title:'MEC 229',course:'Fluid Mechanics',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'AEC 209',course:'Aircraft Structure',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'GNS 241',course:'Introduction to Psychology',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'AEC 201',course:'Aircraft Powerplant 1',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'AEC 213',course:'Digital Electronics and Programming',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'ENT 216',course:'Enterpreneurship',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'AEC 207',course:'Communication Principles',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CAD & CAM',course:'Introduction to CAD & CAM',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'MEC 201',course:'Engineering Drawing',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'AEC 205',course:'Aircraft systems',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'AEC 203',course:'Aircraft Materials and Processes',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CEC 209',course:'Civil Engineering Drawing',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'GNS 201',course:'Communication Skills',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'MTH 112',course:'Trigonometry and Analytical Geometry',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 205',course:'Cost Accounting 1',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CEC 201',course:'Hyraulics and Hydrology',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 203',course:'Business Law',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 235',course:'Electrical/Electronics Instrument',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'MEC 217',course:'Technical Report Writing',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 209',course:'Electronics 2/PRACTICAL',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'SUG 208',course:'Engineering Surveying 1',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 211',course:'Principles of Management 1',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'MEC 215',course:'Foundry Tech and Forging Operation',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 237',course:'Telecommunication Engineering',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CEC 205',course:'Theory of Structure 1',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 201',course:'Business Statistics',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'MEC 213',course:'Thermodynamics',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 239',course:'Electrical Circuit Theory',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CEC 207',course:'Hydrogeology',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 213',course:'Office Management',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'MEC 212',course:'Engineering Measurement',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'ICT 201',course:'Introduction to C++ Programming',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CEC 211',course:'Civil Engineering Construction',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 215',course:'Information Technology 2',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 125',course:'Electrical Engineering Science',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 233',course:'Electrical Machine 2',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'ICT 201',course:'Introduction to Computing',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'BAM 217',course:'Research Methodology',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'EEC 231',course:'Electrical Power System 2/Practical',pdfUrl:`/Images/dashboard1.jpeg`},
    {title:'CEC 203',course:'Workshop Technology 2',pdfUrl:`/Images/dashboard1.jpeg`}
];

const list = document.getElementById('list');
const title = document.getElementById('title');
const course = document.getElementById('course');
const saveButton = document.getElementById('saveButton');
const error = document.getElementById('errorMessage');
const mobileSearchButton = document.getElementById('mobileSearchButton');
const searchButton = document.getElementById('sidebar_searchButton');
const sidebarSearch = document.getElementById('sidebar_searchBar');
const mobileSearch = document.getElementById('mobileSearchBar');

function render(arr){
    const shuffled = arr.sort(() => Math.random() - 0.5);
    list.innerHTML='';
    shuffled.forEach(i=>{
    list.innerHTML+=`<div class='card'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> <button class="view" data-pdf="${data.pdfUrl}">View</button> </div>`;
    });
}

render(data);

//For View and goback button
const ViewButton = document.querySelectorAll('.view');
const Viewer = document.getElementById('viewer');
const modal = document.getElementById('modal');
const goBack = document.getElementById('goBack');
const List = document.getElementById('list');

goBack.addEventListener('click', () => {
    modal.style.display = 'none';
})



List.addEventListener('click', function(e){
    if (e.target.classList.contains('view') || e.target.closest('.view')) {
        modal.style.display = 'block';
        const pdfUrl = e.currentTarget.dataset.pdf
        Viewer.src = pdfUrl;
        Viewer.style.display = 'block';
        Viewer.scrollIntoView({ behavior: 'smooth'});
        if (modal.style.display = 'block') {
            notices[2].innerHTML = viewCount++ + ' ' + 'resources';
        }
    }
})


const searched = document.getElementById('searched');

let searchedCount = 1;
let viewCount = 1;


//SIDEBAR SEARCH
searchButton.addEventListener('click', () => {
    if (sidebarSearch.value.length >= 1) {
        render(data.filter(i=>i.title.trim().toLowerCase() && i.course.trim().toLowerCase().includes(sidebarSearch .value.trim().toLowerCase())))
        notices[1].innerHTML = searchedCount++ + ' ' + 'resources';
    } else {
        return render(data);
    }
});


//MOBILE SEARCH BAR
mobileSearchButton.addEventListener('click', () => {
    if (mobileSearch.value.length >= 1) {
        render(data.filter(i=>i.title.trim().toLowerCase() && i.course.trim().toLowerCase().includes(mobileSearch.value.trim().toLowerCase())));
        notices[1].innerHTML = searchedCount++ + ' ' + 'resources';
    } else {
        return render(data);
    }
});

const carouselData=[
    {title:'MTH 201',course:'Logic and Linear Algebra'},
    {title:'PHY 201',course:'Physics'},
    {title:'MEC 229',course:'Fluid Mechanics'},
    {title:'AEC 209',course:'Aircraft Structure'},
    {title:'GNS 241',course:'Introduction to Psychology'},
    {title:'AEC 201',course:'Aircraft Powerplant 1'},
    {title:'AEC 213',course:'Digital Electronics'},
    {title:'ENT 216',course:'Enterpreneurship'},
    {title:'AEC 207',course:'Communication Principles'},
    {title:'CAD & CAM',course:'Introduction to CAD & CAM'},
    {title:'MEC 201',course:'Engineering Drawing'},
    {title:'AEC 205',course:'Aircraft systems'},
    {title:'AEC 203',course:'Aircraft Materials and Processes'},
    {title:'CEC 209',course:'Civil Engineering Drawing'},
    {title:'GNS 201',course:'Communication Skills'},
    {title:'MTH 112',course:'Trigonometry and Analytical Geometry'},
    {title:'BAM 205',course:'Cost Accounting 1'},
    {title:'CEC 201',course:'Hyraulics and Hydrology'},
    {title:'BAM 203',course:'Business Law'},
    {title:'EEC 235',course:'Electrical/Electronics Instrument'},
    {title:'MEC 217',course:'Technical Report Writing'},
    {title:'EEC 209',course:'Electronics 2/PRACTICAL'},
    {title:'SUG 208',course:'Engineering Surveying 1'},
    {title:'BAM 211',course:'Principles of Management 1'},
    {title:'MEC 215',course:'Foundry Tech and Forging Operation'},
    {title:'EEC 237',course:'Telecommunication Engineering'},
    {title:'CEC 205',course:'Theory of Structure 1'},
    {title:'BAM 201',course:'Business Statistics'},
    {title:'MEC 213',course:'Thermodynamics'},
    {title:'EEC 239',course:'Electrical Circuit Theory'},
    {title:'CEC 207',course:'Hydrogeology'},
    {title:'BAM 213',course:'Office Management'},
    {title:'MEC 212',course:'Engineering Measurement'},
    {title:'ICT 201',course:'Introduction to C++ Programming'},
    {title:'CEC 211',course:'Civil Engineering Construction'},
    {title:'BAM 215',course:'Information Technology 2'},
    {title:'EEC 125',course:'Electrical Engineering Science'},
    {title:'EEC 233',course:'Electrical Machine 2'},
    {title:'ICT 201',course:'Introduction to Computing'},
    {title:'BAM 217',course:'Research Methodology'},
    {title:'EEC 231',course:'Electrical Power System 2/Practical'},
    {title:'CEC 203',course:'Workshop Technology 2'}
];

const carousel = document.getElementById('carousel');

function renderRandom(arr){
    //shuffle Array
    const shuffledData = arr.sort(() => Math.random() - 0.5);
    carousel.innerHTML='';
    shuffledData.forEach(i=>{
    carousel.innerHTML+=`<div class='carouselCard'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> </div>`;
    });
}

renderRandom(carouselData);

//AIRCRAFT DEPARTMENT
const aetdCarouselData=[
    {title:'MTH 201',course:'Logic and Linear Algebra'},
    {title:'PHY 201',course:'Physics'},
    {title:'MEC 229',course:'Fluid Mechanics'},
    {title:'AEC 209',course:'Aircraft Structure'},
    {title:'GNS 241',course:'Introduction to Psychology'},
    {title:'AEC 201',course:'Aircraft Powerplant 1'},
    {title:'AEC 213',course:'Digital Electronics'},
    {title:'ENT 216',course:'Enterpreneurship'},
    {title:'AEC 207',course:'Communication Principles'},
    {title:'CAD & CAM',course:'Introduction to CAD & CAM'},
    {title:'MEC 201',course:'Engineering Drawing'},
    {title:'AEC 205',course:'Aircraft systems'},
    {title:'AEC 203',course:'Aircraft Materials and Processes'},
    {title:'AEC 109',course:'Basic Electronics'}
];
const aetdCarousel = document.getElementById('aetd');
function renderRandomAETD(arr){
    //shuffle Array
    const shuffledAETDData = arr.sort(() => Math.random() - 0.5);
    aetdCarousel.innerHTML='';
    shuffledAETDData.forEach(i=>{
    aetdCarousel.innerHTML+=`<div class='aetdCarouselCard'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> </div>`;
    });
}
renderRandomAETD(aetdCarouselData);

//BUSINESS ADMIN DEPARTMENT
const bamCarouselData=[
    {title:'BAM 205',course:'Cost Accounting 1'},
    {title:'GNS 201',course:'Communication Skills'},
    {title:'BAM 203',course:'Business Law'},
    {title:'BAM 211',course:'Principles of Management 1'},
    {title:'BAM 201',course:'Business Statistics'},
    {title:'BAM 213',course:'Office Management'},
    {title:'BAM 215',course:'Information Technology 2'},
    {title:'ENT 216',course:'Enterpreneurship'},
    {title:'BAM 217',course:'Research Methodology'}
];
const bamCarousel = document.getElementById('bam');
function renderRandomBAM(arr){
    //shuffle Array
    const shuffledBAMData = arr.sort(() => Math.random() - 0.5);
    bamCarousel.innerHTML='';
    shuffledBAMData.forEach(i=>{
    bamCarousel.innerHTML+=`<div class='bamCarouselCard'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> </div>`;
    });
}
renderRandomBAM(bamCarouselData);

//CIVIL DEPARTMENT
const CivilCarouselData=[
    {title:'CEC 209',course:'Civil Engineering Drawing'},
    {title:'MTH 112',course:'Trigonometry and Analytical Geometry'},
    {title:'CEC 201',course:'Hyraulics and Hydrology'},
    {title:'SUG 208',course:'Engineering Surveying 1'},
    {title:'CEC 205',course:'Theory of Structure 1'},
    {title:'CEC 207',course:'Hydrogeology'},
    {title:'ENT 216',course:'Enterpreneurship'},
    {title:'CEC 211',course:'Civil Engineering Construction'},
    {title:'ICT 201',course:'Introduction to Computing'},
    {title:'CEC 203',course:'Workshop Technology 2'}
];
const CivilCarousel = document.getElementById('civil');
function renderRandomCEED(arr){
    //shuffle Array
    const shuffledCEEDData = arr.sort(() => Math.random() - 0.5);
    CivilCarousel.innerHTML='';
    shuffledCEEDData.forEach(i=>{
    CivilCarousel.innerHTML+=`<div class='CivilCarouselCard'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> </div>`;
    });
}
renderRandomCEED(CivilCarouselData);

//ELECTRICAL DEPARTMENT
const eedCarouselData=[
    {title:'MTH 201',course:'Logic and Linear Algebra'},
    {title:'MEC 201',course:'Engineering Drawing'},
    {title:'ENT 216',course:'Enterpreneurship'},
    {title:'EEC 235',course:'Electrical/Electronics Instrument'},
    {title:'EEC 209',course:'Electronics 2/PRACTICAL'},
    {title:'EEC 237',course:'Telecommunication Engineering'},
    {title:'EEC 239',course:'Electrical Circuit Theory'},
    {title:'ICT 201',course:'Introduction to C++ Programming'},
    {title:'EEC 233',course:'Electrical Machine 2'},
    {title:'EEC 231',course:'Electrical Power System 2/Practical'}
];
const eedCarousel = document.getElementById('eed');
function renderRandomEED(arr){
    //shuffle Array
    const shuffledEEDData = arr.sort(() => Math.random() - 0.5);
    eedCarousel.innerHTML='';
    shuffledEEDData.forEach(i=>{
    eedCarousel.innerHTML+=`<div class='eedCarouselCard'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> </div>`;
    });
}
renderRandomEED(eedCarouselData);

//MECHANICAL DEPARTMENT
const magedCarouselData=[
    {title:'MTH 201',course:'Logic and Linear Algebra'},
    {title:'MEC 201',course:'Engineering Drawing'},
    {title:'ENT 216',course:'Enterpreneurship'},
    {title:'MEC 229',course:'Fluid Mechanics'},
    {title:'GNS 241',course:'Introduction to Psychology'},
    {title:'MEC 217',course:'Technical Report Writing'},
    {title:'CAD & CAM',course:'Introduction to CAD & CAM'},
    {title:'MEC 215',course:'Foundry Tech and Forging Operation'},
    {title:'MEC 213',course:'Thermodynamics'},
    {title:'MEC 212',course:'Engineering Measurement'},
    {title:'EEC 125',course:'Electrical Engineering Science'},
];
const magedCarousel = document.getElementById('maged');
function renderRandomMAGED(arr){
    //shuffle Array
    const shuffledMAGEDData = arr.sort(() => Math.random() - 0.5);
    magedCarousel.innerHTML='';
    shuffledMAGEDData.forEach(i=>{
    magedCarousel.innerHTML+=`<div class='magedCarouselCard'> 
                        <div> <div>${i.title}</div> 
                                <div>${i.course}</div> </div> </div>`;
    });
}
renderRandomMAGED(magedCarouselData);

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const aetdleftButton = document.getElementById('aetdleft');
const aetdrightButton = document.getElementById('aetdright');
const bamleftButton = document.getElementById('bamleft');
const bamrightButton = document.getElementById('bamright');
const ceedleftButton = document.getElementById('civilleft');
const ceedrightButton = document.getElementById('civilright');
const eedleftButton = document.getElementById('eedleft');
const eedrightButton = document.getElementById('eedright');
const magedleftButton = document.getElementById('magedleft');
const magedrightButton = document.getElementById('magedright');

let currentIndex = 0;

function getScrollAmount(){
    const card = carousel.querySelector('.carouselCard');
    if (!card) return 300;
    return card.offsetWidth + 20;
}

rightButton.onclick = () => {
    carousel.scrollBy({left: getScrollAmount(), behavior:'smooth'});
}

leftButton.onclick = () => {
    carousel.scrollBy({left: -getScrollAmount(), behavior:'smooth'});
}

aetdrightButton.onclick = () => {
    aetdCarousel.scrollBy({left: getScrollAmount(), behavior:'smooth'});
}

aetdleftButton.onclick = () => {
    aetdCarousel.scrollBy({left: -getScrollAmount(), behavior:'smooth'});
}

bamrightButton.onclick = () => {
    bamCarousel.scrollBy({left: getScrollAmount(), behavior:'smooth'});
}

bamleftButton.onclick = () => {
    bamCarousel.scrollBy({left: -getScrollAmount(), behavior:'smooth'});
}

ceedrightButton.onclick = () => {
    CivilCarousel.scrollBy({left: getScrollAmount(), behavior:'smooth'});
}

ceedleftButton.onclick = () => {
    CivilCarousel.scrollBy({left: -getScrollAmount(), behavior:'smooth'});
}

eedrightButton.onclick = () => {
    eedCarousel.scrollBy({left: getScrollAmount(), behavior:'smooth'});
}

eedleftButton.onclick = () => {
    eedCarousel.scrollBy({left: -getScrollAmount(), behavior:'smooth'});
}

magedrightButton.onclick = () => {
    magedCarousel.scrollBy({left: getScrollAmount(), behavior:'smooth'});
}

magedleftButton.onclick = () => {
    magedCarousel.scrollBy({left: -getScrollAmount(), behavior:'smooth'});
}

//Disable button at start or end
carousel.addEventListener('scroll', () => {
    leftButton.disabled = carousel.scrollLeft <= 0;
    rightButton.disabled = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 5;
});

aetdCarousel.addEventListener('scroll', () => {
    aetdleftButton.disabled = aetdCarousel.scrollLeft <= 0;
    aetdrightButton.disabled = aetdCarousel.scrollLeft >= aetdCarousel.scrollWidth - aetdCarousel.clientWidth - 5;
});

bamCarousel.addEventListener('scroll', () => {
    bamleftButton.disabled = bamCarousel.scrollLeft <= 0;
    bamrightButton.disabled = bamCarousel.scrollLeft >= bamCarousel.scrollWidth - bamCarousel.clientWidth - 5;
});

CivilCarousel.addEventListener('scroll', () => {
    ceedleftButton.disabled = CivilCarousel.scrollLeft <= 0;
    ceedrightButton.disabled = CivilCarousel.scrollLeft >= CivilCarousel.scrollWidth - CivilCarousel.clientWidth - 5;
});

eedCarousel.addEventListener('scroll', () => {
    eedleftButton.disabled = eedCarousel.scrollLeft <= 0;
    eedrightButton.disabled = eedCarousel.scrollLeft >= eedCarousel.scrollWidth - eedCarousel.clientWidth - 5;
});

magedCarousel.addEventListener('scroll', () => {
    magedleftButton.disabled = magedCarousel.scrollLeft <= 0;
    magedrightButton.disabled = magedCarousel.scrollLeft >= magedCarousel.scrollWidth - magedCarousel.clientWidth - 5;
});