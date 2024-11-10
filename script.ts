let experienceCount = 1;

// Function to add a new experience block with the four fields
document.getElementById('addExperienceBtn')!.addEventListener('click', () => {
  const experienceContainer = document.getElementById('experienceContainer')!;

  const experienceDiv = document.createElement('div');

  // Experience Title
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', `experienceTitle-${experienceCount}`);
  titleLabel.innerText = 'Designation:';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = `experienceTitle-${experienceCount}`;
  titleInput.name = 'experienceTitle';
  titleInput.required = true;

   // Location
  const locationLabel = document.createElement('label');
  locationLabel.setAttribute('for', `experienceLocation-${experienceCount}`);
  locationLabel.innerText = 'Firm Name:';
  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.id = `experienceLocation-${experienceCount}`;
  locationInput.name = 'experienceLocation';
  locationInput.required = true;

  // Start Date
  const startDateLabel = document.createElement('label');
  startDateLabel.setAttribute('for', `experienceStartDate-${experienceCount}`);
  startDateLabel.innerText = 'Start Date:';
  const startDateInput = document.createElement('input');
  startDateInput.type = 'date';
  startDateInput.id = `experienceStartDate-${experienceCount}`;
  startDateInput.name = 'experienceStartDate';
  startDateInput.required = true;

  // End Date
  const endDateLabel = document.createElement('label');
  endDateLabel.setAttribute('for', `experienceEndDate-${experienceCount}`);
  endDateLabel.innerText = 'End Date:';
  const endDateInput = document.createElement('input');
  endDateInput.type = 'date';
  endDateInput.id = `experienceEndDate-${experienceCount}`;
  endDateInput.name = 'experienceEndDate';
  endDateInput.required = true;

  // Description
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', `experienceDescription-${experienceCount}`);
  descriptionLabel.innerText = 'Description:';
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = `experienceDescription-${experienceCount}`;
  descriptionTextarea.name = 'experienceDescription';
  descriptionTextarea.rows = 4;
  descriptionTextarea.required = true;

  // Append all fields to the experienceDiv
  experienceDiv.appendChild(titleLabel);
  experienceDiv.appendChild(titleInput);
  experienceDiv.appendChild(locationLabel);
  experienceDiv.appendChild(locationInput);
  experienceDiv.appendChild(startDateLabel);
  experienceDiv.appendChild(startDateInput);
  experienceDiv.appendChild(endDateLabel);
  experienceDiv.appendChild(endDateInput);
  experienceDiv.appendChild(descriptionLabel);
  experienceDiv.appendChild(descriptionTextarea);

  // Append the experienceDiv to the container
  experienceContainer.appendChild(experienceDiv);

  experienceCount++;
});

// Save form data to localStorage
document.getElementById('resumeForm')!.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;

  // Collect experiences
  const experiences: Array<{ title: string, location: string, startDate: string, endDate: string, description: string }> = [];

  for (let i = 0; i < experienceCount; i++) {
    const experienceTitle = (document.getElementById(`experienceTitle-${i}`) as HTMLInputElement).value;
    const experienceLocation = (document.getElementById(`experienceLocation-${i}`) as HTMLInputElement).value;
    const experienceStartDate = (document.getElementById(`experienceStartDate-${i}`) as HTMLInputElement).value;
    const experienceEndDate = (document.getElementById(`experienceEndDate-${i}`) as HTMLInputElement).value;
    const experienceDescription = (document.getElementById(`experienceDescription-${i}`) as HTMLTextAreaElement).value;

    experiences.push({
      title: experienceTitle,
      location: experienceLocation,
      startDate: experienceStartDate,
      endDate: experienceEndDate,
      description: experienceDescription
    });
  }

  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const language = (document.getElementById('language') as HTMLInputElement).value;
  const contact = (document.getElementById('contact') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;

  // Store data in localStorage
  localStorage.setItem('resumeName', name);
  localStorage.setItem('resumeTitle', title);
  localStorage.setItem('resumeSummary', summary);
  localStorage.setItem('resumeExperiences', JSON.stringify(experiences));
  localStorage.setItem('resumeSkills', skills);
  localStorage.setItem('resumeLanguage', language);
  localStorage.setItem('resumeContact', contact);
  localStorage.setItem('resumeEmail', email);

  window.location.href = 'resume.html';
});
