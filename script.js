var experienceCount = 1;
// Function to add a new experience block with the four fields
document.getElementById('addExperienceBtn').addEventListener('click', function () {
    var experienceContainer = document.getElementById('experienceContainer');
    var experienceDiv = document.createElement('div');
    // Experience Title
    var titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', "experienceTitle-".concat(experienceCount));
    titleLabel.innerText = 'Designation:';
    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = "experienceTitle-".concat(experienceCount);
    titleInput.name = 'experienceTitle';
    titleInput.required = true;
    // Location
    var locationLabel = document.createElement('label');
    locationLabel.setAttribute('for', "experienceLocation-".concat(experienceCount));
    locationLabel.innerText = 'Firm Name:';
    var locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.id = "experienceLocation-".concat(experienceCount);
    locationInput.name = 'experienceLocation';
    locationInput.required = true;
    // Start Date
    var startDateLabel = document.createElement('label');
    startDateLabel.setAttribute('for', "experienceStartDate-".concat(experienceCount));
    startDateLabel.innerText = 'Start Date:';
    var startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.id = "experienceStartDate-".concat(experienceCount);
    startDateInput.name = 'experienceStartDate';
    startDateInput.required = true;
    // End Date
    var endDateLabel = document.createElement('label');
    endDateLabel.setAttribute('for', "experienceEndDate-".concat(experienceCount));
    endDateLabel.innerText = 'End Date:';
    var endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.id = "experienceEndDate-".concat(experienceCount);
    endDateInput.name = 'experienceEndDate';
    endDateInput.required = true;
    // Description
    var descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', "experienceDescription-".concat(experienceCount));
    descriptionLabel.innerText = 'Description:';
    var descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.id = "experienceDescription-".concat(experienceCount);
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
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var summary = document.getElementById('summary').value;
    // Collect experiences
    var experiences = [];
    for (var i = 0; i < experienceCount; i++) {
        var experienceTitle = document.getElementById("experienceTitle-".concat(i)).value;
        var experienceLocation = document.getElementById("experienceLocation-".concat(i)).value;
        var experienceStartDate = document.getElementById("experienceStartDate-".concat(i)).value;
        var experienceEndDate = document.getElementById("experienceEndDate-".concat(i)).value;
        var experienceDescription = document.getElementById("experienceDescription-".concat(i)).value;
        experiences.push({
            title: experienceTitle,
            location: experienceLocation,
            startDate: experienceStartDate,
            endDate: experienceEndDate,
            description: experienceDescription
        });
    }
    var skills = document.getElementById('skills').value;
    var language = document.getElementById('language').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
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
