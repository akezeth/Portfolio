const bodyTag = document.querySelector('body');
const projectContainer = document.getElementById('projectContainer');

// ===========Create project object for the top project
const topProjectObj = {
  title: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.",
  image: './images/1-image.png',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  dataset: 0,
};

// ========== Create Project Array for other project ===============
const otherProjects = [
  {
    backgroundImgId: 'card-1',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 1,
  },
  {
    backgroundImgId: 'card-2',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 2,
  },
  {
    backgroundImgId: 'card-3',
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 3,
  },
  {
    backgroundImgId: 'card-4',
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 4,
  },
  {
    backgroundImgId: 'card-5',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 5,
  },
  {
    backgroundImgId: 'card-6',
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    dataset: 6,
  },
];

// ========== Create Project Array for other project ===============
const modalProjects = [
  {
    title: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/1-image.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://akezeth.github.io/Portfolio/',
    sourceLink: 'https://github.com/akezeth/Portfolio-setup-and-mobile-first',
  },
];

// function to add element given tag name and class name
const createElement = (tag, className) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};

// function to create ul and li elements given an array of items & the class name of the ul element
const createList = (items, className) => {
  const ul = createElement('ul', className);
  items.forEach((item) => {
    const li = createElement('li', `${className}-item`);
    li.innerText = item;
    ul.appendChild(li);
  });
  return ul;
};

// function to create a button element given the class name, id and text content of the button
const createButton = (className, dataset, text) => {
  const btn = createElement('button', className);
  btn.innerText = text;
  btn.setAttribute('data-projectbtn', dataset);
  return btn;
};

// function expression to add the top project
const createtopProjectCon = () => {
  const topProjectEl = createElement('div', 'project1');

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

  const project1LinkBtn = createButton('project-btn', topProjectObj.dataset, 'See Project');
  project1Info.appendChild(project1LinkBtn);

  return topProjectEl;
};

// Add topProject into index.html using the projectContianer div class.
const topProjectCon = createElement('div', 'topProjectCon');
projectContainer.appendChild(topProjectCon);
topProjectCon.appendChild(createtopProjectCon());

// function expression for add other projects
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

  const otherProjectLinkBtn = createButton('project-btn', otherProject.dataset, 'See Project');
  otherProjectLink.appendChild(otherProjectLinkBtn);

  return otherProjectEl;
};

// Add other projects into index.html using the projectContianer div class.
const otherProjectsCon = createElement('div', 'otherProjectsCon');
projectContainer.appendChild(otherProjectsCon);
otherProjects.forEach((otherProject) => {
  otherProjectsCon.appendChild(createOtherProject(otherProject));
});

// Function statement to add popup window
function projectModal(e) {
  const docFragment = document.createDocumentFragment();
  const projectCardInfo = modalProjects[parseInt(e.target.dataset.projectbtn, 10)];

  const popupContainer = createElement('div', 'popupContainer');

  const projectPopup = document.createElement('div');
  projectPopup.classList.add('projectPopup', 'project-card');

  const popupHeader = createElement('div', 'popupHeader');
  popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
  docFragment.appendChild(popupHeader);

  const popupTitle = createElement('h3', 'popupTitle');
  popupTitle.innerHTML = projectCardInfo.title;
  popupHeader.appendChild(popupTitle);

  const popupLanguages = createList(projectCardInfo.technologies, 'popupLanguages');
  popupHeader.appendChild(popupLanguages);

  const popupBody = createElement('div', 'popupBody');
  docFragment.appendChild(popupBody);

  const popupImgContainer = createElement('div', 'popupImgContainer');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = projectCardInfo.image;
  popupImgContainer.appendChild(popupImg);

  const popupTextContainer = createElement('div', 'popupTextContainer');
  popupBody.appendChild(popupTextContainer);

  const popupDescription = createElement('p', 'popupDescription');
  popupDescription.innerText = projectCardInfo.description;
  popupTextContainer.appendChild(popupDescription);

  const popupLinkContainer = createElement('div', 'popupLinkContainer');
  popupTextContainer.appendChild(popupLinkContainer);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
  liveLink.href = projectCardInfo.liveLink;
  popupLinkContainer.appendChild(liveLink);

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
  sourceLink.href = projectCardInfo.sourceLink;
  popupLinkContainer.appendChild(sourceLink);

  projectPopup.appendChild(docFragment);
  popupContainer.appendChild(projectPopup);
  bodyTag.appendChild(popupContainer);

  document.querySelector('.header').style.filter = 'blur(10px)';
  projectContainer.style.filter = 'blur(10px)';
  document.getElementById('headline').style.filter = 'blur(10px)';
  document.getElementById('about-me').style.filter = 'blur(10px)';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(popupContainer);
    document.querySelector('.header').style.filter = 'blur(0)';
    projectContainer.style.filter = 'blur(0)';
    document.getElementById('headline').style.filter = 'blur(0)';
    document.getElementById('about-me').style.filter = 'blur(0)';
  });
}

const projectsBtn = document.querySelectorAll('.project-btn');
projectsBtn.forEach((btn) => btn.addEventListener('click', projectModal));
