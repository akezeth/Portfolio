// ============================= toggle hamburger icon ===========================
const menuIcon = document.querySelector('#menuIcon');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('uil-multiply');
  navbar.classList.toggle('active');
  logo.classList.toggle('active');
};

// ========= remove toggle icon and navbar when user click navbar link (scroll) =========
window.onscroll = () => {
  menuIcon.classList.remove('uil-multiply');
  navbar.classList.remove('active');
  logo.classList.remove('active');
};

// ===========Create project object for the top project
const topProjectObj = {
  id: 'p-1',
  title: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.",
  image: '../images/1-image.png',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://akezeth.github.io/Portfolio/',
  sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
};

// ========== Create Project Array for other project ===============
const otherProjects = [
  {
    id: 1,
    backgroundImgId: 'card-1',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: '../images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    id: 2,
    backgroundImgId: 'card-2',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: '../images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    id: 3,
    backgroundImgId: 'card-3',
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: '../images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    id: 4,
    backgroundImgId: 'card-4',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: '../images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    id: 5,
    backgroundImgId: 'card-5',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: '../images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    id: 6,
    backgroundImgId: 'card-6',
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: '../images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
];

// fuction to add element given tag name and class name
const createElement = (tag, className) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};

// function to creat ul and li elements given an array of items and class name of the ul element
const createList = (items, className) => {
  const ul = createElement('ul', className);
  items.forEach((item) => {
    const li = createElement('li', `${className}-item`);
    li.innerText = item;
    ul.appendChild(li);
  });
  return ul;
};

// fuction to create button element given the class name, id and text content of the button
const createButton = (className, id, text) => {
  const btn = createElement('button', className);
  btn.id = id;
  btn.innerText = text;
  return btn;
};

const projectContainer = document.getElementById('projectContainer');

const createtopProjectCon = (project1) => {
  const topProjectEl = createElement('div', project1);

  const project1Image = createElement('div', 'project1Image');
  topProjectEl.appendChild(project1Image);

  const image1 = createElement('img', 'image1');
  image1.src = topProjectObj.image;
  project1Image.appendChild(image1);

  const project1Info = createElement('div', 'project1Info');
  topProjectEl.appendChild(project1Info);

  const project1Title = createElement('h3', 'project1Title');
  project1Title.innerHTML = topProjectObj.title;
  project1Info.appendChild(project1Title);

  const project1Description = createElement('p', 'project1Description');
  project1Description.innerText = topProjectObj.description;
  project1Info.appendChild(project1Description);

  const project1Languages = createList(topProjectObj.technologies, 'project1Languages');
  project1Info.appendChild(project1Languages);

  const project1LinkBtn = createButton('toppopupBtn', topProjectObj.id, 'See Project');
  project1Info.appendChild(project1LinkBtn);

  return topProjectEl;
};

const createOtherProject = (otherProject) => {
  const otherProjectEl = createElement('div', 'otherProject');
  otherProjectEl.id = otherProject.backgroundImgId;

  const otherProjectInfo = createElement('div', 'otherProjectInfo');
  otherProjectEl.appendChild(otherProjectInfo);

  const otherProjectTitle = createElement('h3', 'otherProjectTitle');
  otherProjectTitle.innerHTML = otherProject.title;
  otherProjectInfo.appendChild(otherProjectTitle);

  const otherProjectDescription = createElement('p', 'otherProjectDescription');
  otherProjectDescription.innerText = otherProject.description;
  otherProjectInfo.appendChild(otherProjectDescription);

  const otherProjectLanguages = createList(otherProject.technologies, 'otherProjectLanguages');
  otherProjectInfo.appendChild(otherProjectLanguages);

  const otherProjectLink = createElement('div', 'otherProjectLink');
  otherProjectEl.appendChild(otherProjectLink);

  const otherProjectLinkBtn = createButton('popupBtn', otherProject.id, 'See Project');
  otherProjectLink.appendChild(otherProjectLinkBtn);

  return otherProjectEl;
};

const popupTopProject = (topProjectPopup) => {
  const popupTopProjectEl = createElement('div', topProjectPopup);

  const popupHeader = createElement('div', 'popupHeader');
  popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
  popupTopProjectEl.appendChild(popupHeader);

  const popupTitle = createElement('h3', 'popupTitle');
  popupTitle.innerHTML = topProjectObj.title;
  popupHeader.appendChild(popupTitle);

  const popupLanguages = createList(topProjectObj.technologies, 'popupLanguages');
  popupHeader.appendChild(popupLanguages);

  const popupBody = createElement('div', 'popupBody');
  popupTopProjectEl.appendChild(popupBody);

  const popupImgContainer = createElement('div', 'popupImgContainer');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = topProjectObj.image;
  popupImgContainer.appendChild(popupImg);

  const popupTextContainer = createElement('div', 'popupTextContainer');
  popupBody.appendChild(popupTextContainer);

  const popupDescription = createElement('p', 'popupDescription');
  popupDescription.innerText = topProjectObj.description;
  popupTextContainer.appendChild(popupDescription);

  const popupLinkContainer = createElement('div', 'popupLinkContainer');
  popupTextContainer.appendChild(popupLinkContainer);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
  liveLink.href = topProjectObj.liveLink;
  popupLinkContainer.appendChild(liveLink);

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
  sourceLink.href = topProjectObj.sourceLink;
  popupLinkContainer.appendChild(sourceLink);

  return popupTopProjectEl;
};

const popupOtherProject = (otherProject) => {
  const popupOthersProjectEl = createElement('div', 'projectPopup');

  const popupHeader = createElement('div', 'popupHeader');
  popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
  popupOthersProjectEl.appendChild(popupHeader);

  const popupTitle = createElement('h3', 'popupTitle');
  popupTitle.innerHTML = otherProject.title;
  popupHeader.appendChild(popupTitle);

  const popupLanguages = createList(otherProject.technologies, 'popupLanguages');
  popupHeader.appendChild(popupLanguages);

  const popupBody = createElement('div', 'popupBody');
  popupOthersProjectEl.appendChild(popupBody);

  const popupImgContainer = createElement('div', 'popupImgContainer');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = otherProject.image;
  popupImgContainer.appendChild(popupImg);

  const popupTextContainer = createElement('div', 'popupTextContainer');
  popupBody.appendChild(popupTextContainer);

  const popupDescription = createElement('p', 'popupDescription');
  popupDescription.innerText = otherProject.description;
  popupTextContainer.appendChild(popupDescription);

  const popupLinkContainer = createElement('div', 'popupLinkContainer');
  popupTextContainer.appendChild(popupLinkContainer);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
  liveLink.href = otherProject.liveLink;
  popupLinkContainer.appendChild(liveLink);

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
  sourceLink.href = otherProject.sourceLink;
  popupLinkContainer.appendChild(sourceLink);

  return popupOthersProjectEl;
};

const topProjectCon = createElement('div', 'topProjectCon');
projectContainer.appendChild(topProjectCon);
topProjectCon.appendChild(createtopProjectCon('project1'));

const otherProjectsCon = createElement('div', 'otherProjectsCon');
projectContainer.appendChild(otherProjectsCon);
otherProjects.forEach((otherProject) => {
  otherProjectsCon.appendChild(createOtherProject(otherProject));
});

const portfolio = document.getElementById('portfolio');
const popuptopContainer = createElement('div', 'popuptopContainer');
portfolio.appendChild(popuptopContainer);

// popup window for the top project
const topProjectBtn = document.getElementById('p-1');

topProjectBtn.addEventListener('click', () => {
  popuptopContainer.appendChild(popupTopProject('topProjectPopup'));

  popuptopContainer.style.display = 'block';
  document.querySelector('.header').style.filter = 'blur(10px)';
  projectContainer.style.filter = 'blur(10px)';
  document.getElementById('headline').style.filter = 'blur(10px)';
  document.getElementById('about-me').style.filter = 'blur(10px)';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.onclick = () => {
    popuptopContainer.style.display = 'none';
    document.querySelector('.header').style.filter = 'blur(0)';
    projectContainer.style.filter = 'blur(0)';
    document.getElementById('headline').style.filter = 'blur(0)';
    document.getElementById('about-me').style.filter = 'blur(0)';
  };
});

// popup window for other projects
const popupotherContainer = createElement('div', 'popupotherContainer');
portfolio.appendChild(popupotherContainer);
const otherProjectBtn = document.querySelectorAll('.popupBtn');
otherProjectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const otherproject = otherProjects.find((otherproject) => otherproject.id === +btn.id);
    popupotherContainer.appendChild(popupOtherProject(otherproject));
    popupotherContainer.style.display = 'block';
    document.querySelector('.header').style.filter = 'blur(10px)';
    projectContainer.style.filter = 'blur(10px)';
    document.getElementById('headline').style.filter = 'blur(10px)';
    document.getElementById('about-me').style.filter = 'blur(10px)';

    const closeBtn = document.getElementById('closeBtn');
    closeBtn.onclick = () => {
      popupotherContainer.style.display = 'none';
      document.querySelector('.header').style.filter = 'blur(0)';
      projectContainer.style.filter = 'blur(0)';
      document.getElementById('headline').style.filter = 'blur(0)';
      document.getElementById('about-me').style.filter = 'blur(0)';
    };
  });
});
