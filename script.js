function showBirthday() {
    const msg = document.getElementById('bdayMessage');
    const btn = document.getElementById('heartBtn');
    const maprang = document.getElementById('maprang');
    const nice = document.getElementById('nice');
    const heart = document.getElementById('heart');

    // Toggle visibility
    msg.style.display = (msg.style.display === 'none') ? 'block' : 'none';
    maprang.style.display = (msg.style.display === 'block') ? 'none' : 'block';
    nice.style.display = (msg.style.display === 'block') ? 'none' : 'block';
    heart.style.display = (msg.style.display === 'block') ? 'none' : 'block';
    document.getElementById('sec1').style.backgroundImage = "url('./pics/FB_IMG_1772272329227.jpg')";
    sec1.style.backgroundSize = "cover";
    sec1.style.backgroundPosition = "center";
    sec1.style.backgroundRepeat = "no-repeat";
    sec1.style.height = "60vh";
    sec1.style.backgroundPosition = "center 25%";
    // Quick pop animation
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
}


function changephoto() {
    const imgElement = document.querySelector('button[onclick="changephoto()"] img');
    
    const photos = [
        "./pics/IMG_20251030_215547_793.jpg",
        "./pics/IMG_20251115_025936_850.jpg",
        "./pics/kara.jpg",
        "./pics/IMG_20260331_102148_885.jpg",
        "./pics/IMG_20260331_102148_886.jpg"

    ];

    // STEP 1: Fade out
    imgElement.style.opacity = '0';

    // STEP 2: Wait for the fade-out to finish (300ms matches the CSS transition)
    setTimeout(() => {
        let newPhoto;
        
        // Pick a random photo that isn't the current one
        do {
            newPhoto = photos[Math.floor(Math.random() * photos.length)];
        } while (imgElement.src.includes(newPhoto.split('/').pop()));

        // STEP 3: Change the source while it is invisible
        imgElement.src = newPhoto;

        // STEP 4: Fade back in
        imgElement.style.opacity = '1';
    }, 300); 
}


function changephoto2() {
    const imgElement = document.querySelector('button[onclick="changephoto2()"] img');
    
    const photos = [
        "./pics/1763739277994.jpg",
        "./pics/1763739260848.jpg",
        "./pics/1763739260848(3).jpg",
        "./pics/1763739278592.jpg",
        "./pics/1763739283679.jpg",
        "./pics/1763739278891.jpg",
        "./pics/20251121_172003.jpg"
    ];

    // STEP 1: Fade out
    imgElement.style.opacity = '0';

    // STEP 2: Wait for the fade-out to finish (300ms matches the CSS transition)
    setTimeout(() => {
        let newPhoto;
        
        // Pick a random photo that isn't the current one
        do {
            newPhoto = photos[Math.floor(Math.random() * photos.length)];
        } while (imgElement.src.includes(newPhoto.split('/').pop()));

        // STEP 3: Change the source while it is invisible
        imgElement.src = newPhoto;

        // STEP 4: Fade back in
        imgElement.style.opacity = '1';
    }, 300); 
}
