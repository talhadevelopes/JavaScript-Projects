function fetchProfile() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Enter a GitHub Account');
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response is not OK');
            }
            return response.json();
        })
        .then(data => {
            displayProfile(data);
        })
        .catch(err => {
            console.error('There was a problem with the Fetch operation', err);
        });
}
function displayProfile(profileData) {
    const profileElement = document.getElementById('js-profile');
    profileElement.innerHTML = `
        <h2>${profileData.login}</h2>
        <img src="${profileData.avatar_url}" style="width: 100px; height: 100px; border-radius: 50%;" />
        <p><strong>Name:</strong> ${profileData.name || 'Not available'}</p>
        <p><strong>Bio:</strong> ${profileData.bio || 'Not available'}</p>
        <p><strong>Public Repos:</strong> ${profileData.public_repos}</p>
        <p><strong>Followers:</strong> ${profileData.followers}</p>
        <p><strong>Following:</strong> ${profileData.following}</p>
        <p><strong>Location:</strong> ${profileData.location || 'Not available'}</p>
        <p><strong>Company:</strong> ${profileData.company || 'Not available'}</p>
        <p><strong>Blog:</strong> <a href="${profileData.blog}" target="_blank">${profileData.blog || 'Not available'}</a></p>
    `;
}
