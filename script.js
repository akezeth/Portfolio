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


//========== Add work section using JS code ===============
const work1 = document.getElementById('work1');
const otherWorks = document.getElementById('otherWorks');

const workObj = {
  work1: {
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.",
    languageUsed: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    link: "https://github.com/akezeth/Portfolio-setup-and-mobile-first"
  },
  works: {
    title: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    languageUsed: ['HTML', 'Bootstrap', 'Ruby'],
    link: "https://github.com/akezeth/Portfolio-setup-and-mobile-first"
  }
};

//========function to add language used for each projects=====
const addli = (workNum, ulclass) => {
  //let ulclassName = document.querySelector(ulclass);
  for (let i = 0; i < workObj[workNum].languageUsed.length; i++) {
    const el = document.createElement('li');
    el.innerHTML = workObj[workNum].languageUsed[i];
    ulclass.appendChild(el);
  }
};

//  ======= function to add html element of the first project =======
const addWork1 = () => {
  const work1Image = document.createElement('div');
  work1Image.classList.add('work1Image');
    const image1 = document.createElement('img');
    image1.classList.add('image1');
    image1.src = "images/Img Placeholder.png";
  
    work1Image.appendChild(image1);
  work1.appendChild(work1Image);

  const work1Info = document.createElement('div');
  work1Info.classList.add('work1Info');
    const work1Title = document.createElement('h3');
    work1Title.classList.add('work1Title');
    work1Title.innerHTML = workObj.work1.title;
    const work1Description = document.createElement('p');
    work1Description.classList.add('work1Description');
    work1Description.innerText = workObj.work1.description;
    const work1Languages = document.createElement('ul');
    work1Languages.classList.add('work1Languages');
    addli('work1',work1Languages);
    const work1Link = document.createElement('a');
    work1Link.classList.add('work1Link');
    work1Link.innerHTML = 'See Project';
    work1Link.href = workObj.work1.link;
  
    work1Info.appendChild(work1Title);
    work1Info.appendChild(work1Description);
    work1Info.appendChild(work1Languages);
    work1Info.appendChild(work1Link);
  work1.appendChild(work1Info);
};

//  ======= function to add html element of the remaining projects =======
const addOtherWorks = () => { 
    for (let i = 1; i <= 6; i++) {
      const works = document.createElement('div');
      works.classList.add('works');    
      otherWorks.appendChild(works);

        const worksInfo = document.createElement('div');
        worksInfo.classList.add('worksInfo');
          const worksTitle = document.createElement('h3');
          worksTitle.classList.add('worksTitle');
          worksTitle.innerHTML = workObj.works.title;
          const worksDescription = document.createElement('p');
          worksDescription.classList.add('worksDescription');
          worksDescription.innerText = workObj.works.description;
          const worksLanguages = document.createElement('ul');
          worksLanguages.classList.add('worksLanguages');
          addli('works',worksLanguages);
          const projectLink = document.createElement('div');
          projectLink.classList.add('projectLink');
            const worksLink = document.createElement('a');
            worksLink.classList.add('worksLink');
            worksLink.innerHTML = 'See Project';
            worksLink.href = workObj.works.link;
        
            projectLink.appendChild(worksLink);
          worksInfo.appendChild(worksTitle);
          worksInfo.appendChild(worksDescription);
          worksInfo.appendChild(worksLanguages);
          worksInfo.appendChild(projectLink);
        works.appendChild(worksInfo);
    }
};

addWork1();
addOtherWorks();