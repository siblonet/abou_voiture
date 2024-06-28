// Function to get URL parameter from the hash
function getUrlParameter(param) {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    const params = new URLSearchParams(hash);
    return params.get(param);
}

// Function to populate the gallery with retrieved ID
const populateReal = async (retrid) => {
    try {
        const gallery = document.querySelector(".gallery");
        if (!gallery) {
            console.error("Gallery element not found.");
            return;
        }
        
        gallery.id = retrid;

        const imao = await requesttoBackend('GET', `retirveone/${retrid}`);

        gallery.innerHTML = `
            ${imao.image.map(img => `<a><img src="${img.ima}" alt="" width="600" height="400"></a>`).join('')}
        `;
    } catch (error) {
        console.error("Error populating gallery:", error);
    }
}

// Retrieve the ID from the hash
const retriva = getUrlParameter('id'); // Assuming the hash is something like '#id=lkndklnfvd4654'

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}
