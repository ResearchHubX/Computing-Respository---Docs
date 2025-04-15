'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


document.body.classList.add('dark-mode');
/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");





/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);




// Smooth Scroll Animations
// Smooth Scroll Animations
// TEAM SECTION INTERACTIONS
// DARK MODE TOGGLE FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('dm-toggle');

  // Check for saved preference
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'disabled') {
    document.body.classList.remove('dark-mode');
  } else {
    // Default to dark mode
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save default preference
  }

  // Toggle functionality
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
          });
        }
      }
    });
  });  

  // LinkedIn Icon Hover Effect
  const teamCards = document.querySelectorAll('.dm-card-inner');
  
  teamCards.forEach(card => {
    const linkedinIcon = document.createElement('div');
    linkedinIcon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#4E6BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 9H2V21H6V9Z" stroke="#4E6BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#4E6BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    linkedinIcon.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 2;
    `;
    card.appendChild(linkedinIcon);
    
    card.addEventListener('mouseenter', () => {
      linkedinIcon.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      linkedinIcon.style.opacity = '0';
    });
  });

  // Smooth hover effects for cards
  const cards = document.querySelectorAll('.dm-card-inner');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});


  
  
  

// FAQ ACCORDION FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
  const faqCards = document.querySelectorAll('.dm-faq-card');
  
  faqCards.forEach(card => {
    const question = card.querySelector('.dm-faq-question');
    
    question.addEventListener('click', () => {
      // Close all other cards
      faqCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
        }
      });
      
      // Toggle current card
      card.classList.toggle('active');
    });
  });

  
});

// PORTFOLIO FILTER FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
  // Filter buttons
  const filterButtons = document.querySelectorAll('.dm-filter-btn');
  const portfolioItems = document.querySelectorAll('.dm-portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items
      const filterValue = button.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Reflow animation
      setTimeout(() => {
        portfolioItems.forEach(item => {
          if (item.style.display === 'block') {
            item.style.opacity = '0';
            item.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 50);
          }
        });
      }, 10);
    });
  });

  // Initialize AOS animations
  
});
document.getElementById("year").textContent = new Date().getFullYear();