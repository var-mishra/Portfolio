function toggleMenu() {
    const nav = document.querySelector('.nav-cont ul');
    nav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function () {
    const addSkillBtn = document.querySelector('.add-skill');
    const modal = document.getElementById('addSkillModal');
    const closeBtn = document.querySelector('.close');
    const submitSkillBtn = document.getElementById('submitSkill');
    const cancelSkillBtn = document.getElementById('cancelSkill');
    const skillsGrid = document.getElementById('skills-grid');

    // Open modal when Add Skill button is clicked
    addSkillBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Close modal when close button or cancel is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    cancelSkillBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Add new skills to the grid when submitted
    submitSkillBtn.addEventListener('click', function () {
        const domain = document.getElementById('domain').value;
        const skillRows = document.querySelectorAll('.skills-row');
        
        if (!domain) {
            alert("Please enter a domain.");
            return;
        }
    
        let existingDomainCard = document.querySelector(`.skill-card[data-domain="${domain}"]`);
    
        if (!existingDomainCard) {
            // If no existing domain card, create a new one
            existingDomainCard = document.createElement('div');
            existingDomainCard.classList.add('skill-card');
            existingDomainCard.setAttribute('data-domain', domain);
            
            existingDomainCard.innerHTML = `
                <h3>${domain}</h3>
                <div class="skills-list"></div>
            `;
            skillsGrid.appendChild(existingDomainCard);
        }
    
        const skillsList = existingDomainCard.querySelector('.skills-list');
    
        skillRows.forEach(row => {
            const skillInput = row.querySelector('input[type="text"]').value;
            const proficiencyInput = row.querySelector('input[type="number"]').value;
    
            if (skillInput && proficiencyInput) {
                const newSkill = document.createElement('div');
                newSkill.innerHTML = `
                    <p>${skillInput} <span class="percentage">${proficiencyInput}%</span></p>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${proficiencyInput}%;"></div>
                    </div>
                `;
                skillsList.appendChild(newSkill);
            }
        });
    
        modal.style.display = 'none'; // Close modal after adding skills
    });
    

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});
// Get the form, button, and message elements
const form = document.querySelector('.info-form');
const submitButton = document.querySelector('.info-form-sub');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add event listener to the form on submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the values from the input fields
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Log the input values to the console
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Show the confirmation message next to the button
  confirmationMessage.style.display = 'inline'; // Display message inline

  // Optionally, clear the form fields after submission
  form.reset();

  // Remove the message after 5 seconds
  setTimeout(() => {
    confirmationMessage.style.display = 'none'; // Hide the message
  }, 5000); // Message disappears after 5 seconds
});

