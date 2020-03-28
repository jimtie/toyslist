console.log('edit existing profiles');
const profileId = window.location.pathname.split('/')[2];
const toyId = window.location.pathname.split('/')[4];
const profileForm = document.getElementById('editProfile');

// get post
// get specific toy at url/api/v1/profile/profile_id/toy/toy_id
fetch(`/api/v1/profile/${profileId}`)
    .then((stream) => stream.json())
    .then(res => updateForm(res))
    .catch((err) => console.log(err));

// populate data into form
function updateForm(existing) {
    document.getElementById('nameInput').value = existing.name;
    document.getElementById('emailInput').value = existing.email;
    document.getElementById('phoneInput').value = existing.phone;
    document.getElementById('zipcodeInput').value = existing.zipcode;
};


profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(profileForm);

    const name = document.getElementById('nameInput').value;
    // const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const zipcode = document.getElementById('zipcodeInput').value;

    const updatedPost = {
        name,
        // email,
        phone,
        zipcode,
    };
    // console.log(newPost);

    fetch(`/api/v1/profile/${profileId}`, {
        // fetch(`/api/v1/profile/${profileId}/toy/${toyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(updatedPost),
    })
        .then((stream) => stream.json())
        .then((res) => {
            console.log(res);
            
            window.location = `/profile/${profileId}`;
            
          })
        .catch((err) => console.log(err));
});
