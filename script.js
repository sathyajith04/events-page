// Enhanced particle system
            const canvas = document.getElementById("bg");
            const ctx = canvas.getContext("2d");
            let w, h, particles = [];

            function resize() {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            }
            window.addEventListener("resize", resize);
            resize();

            // Create particles (reduced for performance)
            for (let i = 0; i < 40; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.2
                });
            }

            function animate() {
                ctx.clearRect(0, 0, w, h);

                // Draw connections (optimized)
                ctx.strokeStyle = "rgba(230, 126, 34, 0.1)";
                ctx.lineWidth = 0.5;

                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = dx * dx + dy * dy; // Skip sqrt for performance

                        if (distance < 10000) { // 100px squared
                            ctx.globalAlpha = (10000 - distance) / 10000 * 0.2;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }

                // Draw particles (simplified)
                particles.forEach(p => {
                    ctx.globalAlpha = p.opacity;
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Update position
                    p.x += p.vx;
                    p.y += p.vy;

                    // Boundary bounce
                    if (p.x < 0 || p.x > w) p.vx *= -1;
                    if (p.y < 0 || p.y > h) p.vy *= -1;

                    // Keep particles in bounds
                    p.x = Math.max(0, Math.min(w, p.x));
                    p.y = Math.max(0, Math.min(h, p.y));
                });

                requestAnimationFrame(animate);
            }
            animate();


        document.addEventListener('DOMContentLoaded', function () {
            // --- Event Data Structure ---
            const eventsData = {
                flagship: {
                    title: "Flagship Events",
                    themeClass: "pink",
                    events: [
                        {
                            id: 1,
                            name: "InnovateX",
                            desc: "A national level project competition where innovative ideas come to life.",
                            details: {
                                description: "InnovateX is the premier event for showcasing groundbreaking projects. Participants will present their solutions to real-world problems, judged by industry experts.",
                                generalRules: "Participants must adhere to the code of conduct. Plagiarism is strictly prohibited. All projects must be original.",
                                eventRules: "Projects will be judged on innovation, feasibility, impact, and presentation. Teams must submit a detailed report and a working prototype.",
                                teamSize: "1-4 members",
                                dateTime: "Day 1: 10:00 AM - 05:00 PM",
                                contact: "John Doe: +91 98765 43210"
                            }
                        },
                        {
                            id: 2,
                            name: "Code Sprint",
                            desc: "A 24-hour hackathon to test your coding prowess.",
                            details: {
                                description: "Code Sprint challenges participants to develop innovative software solutions within a tight deadline. Collaborate, innovate, and bring your ideas to code.",
                                generalRules: "Teams must register in advance. No pre-written code allowed, only libraries. Fair play is expected.",
                                eventRules: "Solutions will be evaluated on functionality, creativity, technical complexity, and presentation. Teams will have 15 minutes for demo and Q&A.",
                                teamSize: "2-3 members",
                                dateTime: "Day 2: 09:00 AM - Day 3: 09:00 AM",
                                contact: "Jane Smith: +91 87654 32109"
                            }
                        },
                        { id: 3, name: "Flagship 3", desc: "Exciting event description.", details: { description: "Details for Flagship 3", generalRules: "Rules for Flagship 3", eventRules: "Specific rules for Flagship 3", teamSize: "1-2", dateTime: "TBD", contact: "Contact 3" } },
                        { id: 4, name: "Flagship 4", desc: "Exciting event description.", details: { description: "Details for Flagship 4", generalRules: "Rules for Flagship 4", eventRules: "Specific rules for Flagship 4", teamSize: "1-2", dateTime: "TBD", contact: "Contact 4" } },
                        { id: 5, name: "Flagship 5", desc: "Exciting event description.", details: { description: "Details for Flagship 5", generalRules: "Rules for Flagship 5", eventRules: "Specific rules for Flagship 5", teamSize: "1-2", dateTime: "TBD", contact: "Contact 5" } },
                        { id: 6, name: "Flagship 6", desc: "Exciting event description.", details: { description: "Details for Flagship 6", generalRules: "Rules for Flagship 6", eventRules: "Specific rules for Flagship 6", teamSize: "1-2", dateTime: "TBD", contact: "Contact 6" } }
                    ]
                },
                workshop: {
                    title: "Workshops",
                    themeClass: "blue",
                    events: [
                        {
                            id: 1,
                            name: "AI & ML Workshop",
                            desc: "Hands-on session with TensorFlow and Keras.",
                            details: {
                                description: "Learn the fundamentals of Artificial Intelligence and Machine Learning through practical examples and coding exercises using popular frameworks.",
                                generalRules: "Bring your own laptop. Software pre-installation instructions will be provided.",
                                eventRules: "Interactive session with Q&A. Certificates will be provided upon completion.",
                                teamSize: "Individual",
                                dateTime: "Day 1: 02:00 PM - 05:00 PM",
                                contact: "Alice Green: +91 78901 23456"
                            }
                        },
                        { id: 2, name: "Workshop 2", desc: "Exciting event description.", details: { description: "Details for Workshop 2", generalRules: "Rules for Workshop 2", eventRules: "Specific rules for Workshop 2", teamSize: "1-2", dateTime: "TBD", contact: "Contact W2" } },
                        { id: 3, name: "Workshop 3", desc: "Exciting event description.", details: { description: "Details for Workshop 3", generalRules: "Rules for Workshop 3", eventRules: "Specific rules for Workshop 3", teamSize: "1-2", dateTime: "TBD", contact: "Contact W3" } },
                        { id: 4, name: "Workshop 4", desc: "Exciting event description.", details: { description: "Details for Workshop 4", generalRules: "Rules for Workshop 4", eventRules: "Specific rules for Workshop 4", teamSize: "1-2", dateTime: "TBD", contact: "Contact W4" } },
                        { id: 5, name: "Workshop 5", desc: "Exciting event description.", details: { description: "Details for Workshop 5", generalRules: "Rules for Workshop 5", eventRules: "Specific rules for Workshop 5", teamSize: "1-2", dateTime: "TBD", contact: "Contact W5" } },
                        { id: 6, name: "Workshop 6", desc: "Exciting event description.", details: { description: "Details for Workshop 6", generalRules: "Rules for Workshop 6", eventRules: "Specific rules for Workshop 6", teamSize: "1-2", dateTime: "TBD", contact: "Contact W6" } }
                    ]
                },
                paper: {
                    title: "Paper Presentation",
                    themeClass: "paper",
                    events: [
                        {
                            id: 1,
                            name: "Tech Thesis",
                            desc: "Present your cutting-edge research and ideas.",
                            details: {
                                description: "Tech Thesis provides a platform for students to present their original research papers on various technical topics. Best papers will be awarded.",
                                generalRules: "Papers must be original and unpublished. Submission guidelines must be followed. Presentations will be timed.",
                                eventRules: "Papers will be peer-reviewed. Presentations will be followed by a Q&A session with judges.",
                                teamSize: "1-2 members",
                                dateTime: "Day 2: 10:00 AM - 04:00 PM",
                                contact: "Bob White: +91 67890 12345"
                            }
                        },
                        { id: 2, name: "Paper 2", desc: "Exciting event description.", details: { description: "Details for Paper 2", generalRules: "Rules for Paper 2", eventRules: "Specific rules for Paper 2", teamSize: "1-2", dateTime: "TBD", contact: "Contact P2" } },
                        { id: 3, name: "Paper 3", desc: "Exciting event description.", details: { description: "Details for Paper 3", generalRules: "Rules for Paper 3", eventRules: "Specific rules for Paper 3", teamSize: "1-2", dateTime: "TBD", contact: "Contact P3" } },
                        { id: 4, name: "Paper 4", desc: "Exciting event description.", details: { description: "Details for Paper 4", generalRules: "Rules for Paper 4", eventRules: "Specific rules for Paper 4", teamSize: "1-2", dateTime: "TBD", contact: "Contact P4" } },
                        { id: 5, name: "Paper 5", desc: "Exciting event description.", details: { description: "Details for Paper 5", generalRules: "Rules for Paper 5", eventRules: "Specific rules for Paper 5", teamSize: "1-2", dateTime: "TBD", contact: "Contact P5" } },
                        { id: 6, name: "Paper 6", desc: "Exciting event description.", details: { description: "Details for Paper 6", generalRules: "Rules for Paper 6", eventRules: "Specific rules for Paper 6", teamSize: "1-2", dateTime: "TBD", contact: "Contact P6" } }
                    ]
                },
                technical: {
                    title: "Technical Events",
                    themeClass: "teal",
                    events: [
                        {
                            id: 1,
                            name: "Circuit Debug",
                            desc: "Identify and fix errors in electronic circuits.",
                            details: {
                                description: "A challenge for electronics enthusiasts to quickly diagnose and repair faults in various circuit configurations.",
                                generalRules: "Tools will be provided. Time limits apply. No external notes allowed.",
                                eventRules: "Multiple rounds with increasing difficulty. Fastest and most accurate debuggers win.",
                                teamSize: "Individual",
                                dateTime: "Day 1: 11:00 AM - 01:00 PM",
                                contact: "Charlie Brown: +91 99887 76655"
                            }
                        },
                        { id: 2, name: "Tech Event 2", desc: "Exciting event description.", details: { description: "Details for Tech Event 2", generalRules: "Rules for Tech Event 2", eventRules: "Specific rules for Tech Event 2", teamSize: "1-2", dateTime: "TBD", contact: "Contact T2" } },
                        { id: 3, name: "Tech Event 3", desc: "Exciting event description.", details: { description: "Details for Tech Event 3", generalRules: "Rules for Tech Event 3", eventRules: "Specific rules for Tech Event 3", teamSize: "1-2", dateTime: "TBD", contact: "Contact T3" } },
                        { id: 4, name: "Tech Event 4", desc: "Exciting event description.", details: { description: "Details for Tech Event 4", generalRules: "Rules for Tech Event 4", eventRules: "Specific rules for Tech Event 4", teamSize: "1-2", dateTime: "TBD", contact: "Contact T4" } },
                        { id: 5, name: "Tech Event 5", desc: "Exciting event description.", details: { description: "Details for Tech Event 5", generalRules: "Rules for Tech Event 5", eventRules: "Specific rules for Tech Event 5", teamSize: "1-2", dateTime: "TBD", contact: "Contact T5" } },
                        { id: 6, name: "Tech Event 6", desc: "Exciting event description.", details: { description: "Details for Tech Event 6", generalRules: "Rules for Tech Event 6", eventRules: "Specific rules for Tech Event 6", teamSize: "1-2", dateTime: "TBD", contact: "Contact T6" } }
                    ]
                },
                'non-technical': {
                    title: "Non-Technical Events",
                    themeClass: "orange",
                    events: [
                        {
                            id: 1,
                            name: "Tech Charades",
                            desc: "Act out technology-related terms without speaking.",
                            details: {
                                description: "A fun and engaging event where teams guess technology-related terms based on their teammates' actions. No speaking allowed!",
                                generalRules: "Teams of 3-5. No verbal cues. Time limit per round.",
                                eventRules: "Points awarded for correct guesses. Penalties for rule violations. Multiple rounds with varying difficulty.",
                                teamSize: "3-5 members",
                                dateTime: "Day 1: 03:00 PM - 04:30 PM",
                                contact: "Diana Prince: +91 54321 09876"
                            }
                        },
                        { id: 2, name: "Non-Tech 2", desc: "Exciting event description.", details: { description: "Details for Non-Tech 2", generalRules: "Rules for Non-Tech 2", eventRules: "Specific rules for Non-Tech 2", teamSize: "1-2", dateTime: "TBD", contact: "Contact NT2" } },
                        { id: 3, name: "Non-Tech 3", desc: "Exciting event description.", details: { description: "Details for Non-Tech 3", generalRules: "Rules for Non-Tech 3", eventRules: "Specific rules for Non-Tech 3", teamSize: "1-2", dateTime: "TBD", contact: "Contact NT3" } },
                        { id: 4, name: "Non-Tech 4", desc: "Exciting event description.", details: { description: "Details for Non-Tech 4", generalRules: "Rules for Non-Tech 4", eventRules: "Specific rules for Non-Tech 4", teamSize: "1-2", dateTime: "TBD", contact: "Contact NT4" } },
                        { id: 5, name: "Non-Tech 5", desc: "Exciting event description.", details: { description: "Details for Non-Tech 5", generalRules: "Rules for Non-Tech 5", eventRules: "Specific rules for Non-Tech 5", teamSize: "1-2", dateTime: "TBD", contact: "Contact NT5" } },
                        { id: 6, name: "Non-Tech 6", desc: "Exciting event description.", details: { description: "Details for Non-Tech 6", generalRules: "Rules for Non-Tech 6", eventRules: "Specific rules for Non-Tech 6", teamSize: "1-2", dateTime: "TBD", contact: "Contact NT6" } }
                    ]
                },
                gaming: {
                    title: "Gaming Events",
                    themeClass: "violet",
                    events: [
                        {
                            id: 1,
                            name: "Valorant Tournament",
                            desc: "5v5 tactical shooter competition.",
                            details: {
                                description: "Team up and compete in an intense Valorant tournament. Show off your tactical skills and aim to claim victory!",
                                generalRules: "Teams must be pre-registered. Standard competitive rules apply. No cheating or exploits.",
                                eventRules: "Double-elimination bracket. Best of 3 matches. Specific map pool will be announced.",
                                teamSize: "5 members",
                                dateTime: "Day 2: 10:00 AM - 06:00 PM",
                                contact: "Eve Adams: +91 12345 67890"
                            }
                        },
                        { id: 2, name: "Game 2", desc: "Exciting event description.", details: { description: "Details for Game 2", generalRules: "Rules for Game 2", eventRules: "Specific rules for Game 2", teamSize: "1-2", dateTime: "TBD", contact: "Contact G2" } },
                        { id: 3, name: "Game 3", desc: "Exciting event description.", details: { description: "Details for Game 3", generalRules: "Rules for Game 3", eventRules: "Specific rules for Game 3", teamSize: "1-2", dateTime: "TBD", contact: "Contact G3" } },
                        { id: 4, name: "Game 4", desc: "Exciting event description.", details: { description: "Details for Game 4", generalRules: "Rules for Game 4", eventRules: "Specific rules for Game 4", teamSize: "1-2", dateTime: "TBD", contact: "Contact G4" } },
                        { id: 5, name: "Game 5", desc: "Exciting event description.", details: { description: "Details for Game 5", generalRules: "Rules for Game 5", eventRules: "Specific rules for Game 5", teamSize: "1-2", dateTime: "TBD", contact: "Contact G5" } },
                        { id: 6, name: "Game 6", desc: "Exciting event description.", details: { description: "Details for Game 6", generalRules: "Rules for Game 6", eventRules: "Specific rules for Game 6", teamSize: "1-2", dateTime: "TBD", contact: "Contact G6" } }
                    ]
                }
            };

            const eventSectionsContainer = document.getElementById('event-sections-container');
            const eventsHeader = document.querySelector('.events-header'); // Get the header
            const sectionTitle = document.getElementById('current-section-title');
            const backToCubeBtn = document.getElementById('back-to-cube-btn');

            const eventsView = document.getElementById('events-view'); // Ensure this variable is accessible

            // Handle "Back to Cube" button click
            backToCubeBtn.addEventListener('click', () => {
                // Start the fade-out animation for the events view
                eventsView.classList.add('is-closing');

                // After the fade-out animation completes (0.5 seconds),
                // remove the 'show-events' class from body and clean up the 'is-closing' class.
                setTimeout(() => {
                    document.body.classList.remove('show-events');
                    eventsView.classList.remove('is-closing');
                    // Optional: Remove theme class from header when going back to cube view
                    eventsHeader.classList.remove('pink-theme', 'blue-theme', 'paper-theme', 'teal-theme', 'orange-theme', 'violet-theme');
                }, 500); // Match the animation duration (0.5s = 500ms)
            });
            
            // Function to create accordion item HTML
            function createAccordionItemHTML(title, content) {
                return `
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <span>${title}</span>
                            <svg class="accordion-icon" viewBox="0 0 24 24">
                                <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" fill="none" />
                            </svg>
                        </div>
                        <div class="accordion-body-wrapper">
                            <div class="accordion-body">${content}</div>
                        </div>
                    </div>
                `;
            }

            // Function to create card HTML
            function createCardHTML(category, event, themeClass) {
                return `
                    <div class="card-effect open-modal" data-modal-id="modal-${category}-${event.id}" data-category="${category}">
                        <div class="card-inner ${themeClass}">
                            <div class="card__liquid"></div>
                            <div class="card__shine"></div>
                            <div class="card__glow"></div>
                            <div class="card__content">
                                <div class="card__badge">EXPLORE</div>
                                <div class="card__image" style="--bg-color: var(--theme-color);"></div>
                                <div class="card__text">
                                    <p class="card__title">${event.name}</p>
                                    <p class="card__description">${event.desc}</p>
                                </div>
                                <div class="card__button">View Details</div>
                            </div>
                        </div>
                    </div>`;
            }

            // Function to create modal HTML
            function createModalHTML(category, event, themeClass) {
                const accordionContent = `
                    ${createAccordionItemHTML('Description', event.details.description)}
                    ${createAccordionItemHTML('General Rules', event.details.generalRules)}
                    ${createAccordionItemHTML('Event Rules', event.details.eventRules)}
                    ${createAccordionItemHTML('Team Size', event.details.teamSize)}
                    ${createAccordionItemHTML('Date & Time', event.details.dateTime)}
                    ${createAccordionItemHTML('Contact', event.details.contact)}
                `;

                return `
                    <div class="modal" id="modal-${category}-${event.id}">
                        <div class="modal-box ${themeClass}-theme">
                            <span class="modal-close">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </span>
                            <h2 class="modal-title">${event.name}</h2>
                            <div class="accordion">
                                ${accordionContent}
                            </div>
                            <button class="modal-register-btn">Register</button>
                        </div>
                    </div>`;
            }

            // Dynamically generate all event sections and modals
            let allModalsHTML = '';
            for (const categoryKey in eventsData) {
                const categoryData = eventsData[categoryKey];
                const sectionId = categoryKey;
                const themeClass = categoryData.themeClass;

                // Create the section element. Removed redundant h2 here.
                const sectionElement = document.createElement('section');
                sectionElement.id = sectionId;
                sectionElement.classList.add('event-section', themeClass);
                sectionElement.innerHTML = `<div class="grid"></div>`; // Grid will contain cards
                eventSectionsContainer.appendChild(sectionElement);

                const grid = sectionElement.querySelector('.grid');
                let cardsHTML = '';
                categoryData.events.forEach(event => {
                    cardsHTML += createCardHTML(sectionId, event, themeClass);
                    allModalsHTML += createModalHTML(sectionId, event, themeClass);
                });
                grid.innerHTML = cardsHTML;
            }

            // Append all modals to the body
            document.body.insertAdjacentHTML('beforeend', allModalsHTML);

            // --- Cube and View Switching Logic ---
            const cube = document.querySelector('.cube');
            let rotateX = -20, rotateY = -30;

            // Function to update cube rotation transform
            function updateRotation() {
                cube.style.transform = `translateZ(calc(-1 * var(--half-cube-size))) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
            updateRotation(); // Apply initial rotation

            // Cube rotation controls
            document.getElementById('rotate-up').addEventListener('click', () => { rotateX -= 90; updateRotation(); });
            document.getElementById('rotate-down').addEventListener('click', () => { rotateX += 90; updateRotation(); });
            document.getElementById('rotate-left').addEventListener('click', () => { rotateY -= 90; updateRotation(); });
            document.getElementById('rotate-right').addEventListener('click', () => { rotateY += 90; updateRotation(); });

            // Handle clicking on cube faces to switch to event view
            document.querySelectorAll('.cube__face').forEach(face => {
                face.addEventListener('click', () => {
                    const targetId = face.dataset.target;
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        // Remove active class from all event sections
                        document.querySelectorAll('.event-section').forEach(sec => sec.classList.remove('active'));
                        // Add active class to the selected section
                        targetSection.classList.add('active');

                        // Update header title and apply theme class to events-header
                        sectionTitle.textContent = eventsData[targetId].title;
                        // Remove previous theme classes from events-header
                        eventsHeader.classList.remove('pink-theme', 'blue-theme', 'paper-theme', 'teal-theme', 'orange-theme', 'violet-theme');
                        // Add the new theme class
                        eventsHeader.classList.add(eventsData[targetId].themeClass + '-theme');

                        // Show the events view
                        document.body.classList.add('show-events');
                    }
                });
            });

            // Handle "Back to Cube" button click
            backToCubeBtn.addEventListener('click', () => {
                document.body.classList.remove('show-events');
                // Optional: Remove theme class from header when going back to cube view
                eventsHeader.classList.remove('pink-theme', 'blue-theme', 'paper-theme', 'teal-theme', 'orange-theme', 'violet-theme');
            });

            // --- Modal Logic ---
            // Function to set up modal close behavior
            function setupModal(modal) {
                const closeModalButton = modal.querySelector(".modal-close");
                closeModalButton.addEventListener("click", () => { modal.style.display = "none"; });
                modal.addEventListener("click", (event) => {
                    if (event.target === modal) { modal.style.display = "none"; }
                });
            }
            // Apply setup to all dynamically created modal elements
            document.querySelectorAll('.modal').forEach(setupModal);

            // --- Accordion Logic ---
            // Handle accordion header clicks to expand/collapse content
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.addEventListener('click', () => {
                    const item = header.closest('.accordion-item');
                    const bodyWrapper = item.querySelector('.accordion-body-wrapper');

                    // Close other open accordions in the same modal
                    item.closest('.accordion').querySelectorAll('.accordion-item.open').forEach(openItem => {
                        if (openItem !== item) {
                            openItem.classList.remove('open');
                            openItem.querySelector('.accordion-body-wrapper').style.maxHeight = 0;
                        }
                    });

                    // Toggle current accordion
                    item.classList.toggle('open');
                    if (item.classList.contains('open')) {
                        bodyWrapper.style.maxHeight = bodyWrapper.scrollHeight + "px";
                    } else {
                        bodyWrapper.style.maxHeight = 0;
                    }
                });
            });

            // Set up event listeners for "View Details" cards to open modals
            document.querySelectorAll(".open-modal").forEach(card => {
                card.addEventListener("click", () => {
                    const modalId = card.getAttribute("data-modal-id");
                    const modal = document.getElementById(modalId);
                    if (modal) {
                        modal.style.display = "flex";
                        // Optionally add a class for animation if needed: modal.classList.add('is-opening');
                    }
                });
            });
        });