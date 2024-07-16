document.addEventListener('DOMContentLoaded', () => {
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const membersContainer = document.getElementById('members-container');

    // Fetch and display members
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => displayMembers(data))
        .catch(error => console.error('Error fetching members:', error));

    function displayMembers(members) {
        membersContainer.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `).join('');
    }

    // Toggle between grid and list views
    gridViewButton.addEventListener('click', () => {
        membersContainer.classList.remove('list-view');
        membersContainer.classList.add('grid-view');
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.classList.remove('grid-view');
        membersContainer.classList.add('list-view');
    });
});
