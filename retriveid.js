// Function to get URL parameter from the hash
function getUrlParameter() {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    return hash;
}

// Function to populate the gallery with retrieved ID
const populateReal = async (retrid) => {
    try {
        const gallery = document.querySelector(".gallery");
        if (!gallery) {
            console.error("Gallery element not found.");
            return;
        }

        /*
            <meta id="imageid" property="og:image" content="">
            <meta id="urlid" property="og:url" content="">
        */
        gallery.id = retrid;

        const imao = await requesttoBackend('GET', `retirveone/${retrid}`);
        document.getElementById("imageid").content = imao.image[0].ima;
        document.getElementById("urlid").content = `https://abouvoiture.netlify.app/details_view#${retrid}`;
        document.getElementById("chatid").href = `https://wa.me/2250545400359?text=${encodeURIComponent('Bonjour M.Abou, puis-je avoir plus de détail concernant cet voiture?: ' + imao.image[0].ima)}`;

        gallery.innerHTML = `
            ${imao.image.map(img => `<a><img src="${img.ima}" alt="" width="600" height="400"></a>`).join('')}
        `;
    } catch (error) {
        console.error("Error populating gallery:", error);
    }
}

// Retrieve the ID from the hash
const retriva = getUrlParameter(); // Assuming the hash is something like '#id=lkndklnfvd4654'

if (!retriva || retriva.length < 5) {
    console.log(retriva);
    //window.location.href = "/";
} else {
    populateReal(retriva);
}
