// This function is to open and close the Mobile Navigation
function mobileNav() {
    $(".v2-nav-mobile-trigger-btn").click(() => {
        $(".v2-nav-mobile-container").css("right", "0");
    });

    $(".v2-nav-mobile-exit-btn").click(() => {
        $(".v2-nav-mobile-container").css("right", "-265px");
    });


}

mobileNav();

// This function opens and closes the form modal when it passes max-width: 1224px
function formModal() {
    $(".v2-hero-request-quote-btn").click(() => {
        $(".v2-form-modal-container").css("display", "flex");
    });
    $(".v2-form-modal-exit-trigger").click(() => {
        $(".v2-form-modal-container").css("display", "none");
    });
}

formModal();


function videoModal() {
    var videoBox = document.getElementById("video-src");
    //This is the Play Button Section
    $("#vid-btn").click(() => {
        $(".video-wrapper").css("display", "flex");
        videoBox.play();
    });

    //This is the Pause and Hide the Modal with the exit button
    $(".video-exit-btn").click(() => {
        $(".video-wrapper").css("display", "none");
        videoBox.pause();
    });

    //This is the Pause and Hide the Modal with clicking outside the modal
    $(".video-wrapper").click(() => {
        $(".video-wrapper").css("display", "none");
        videoBox.pause();
    });
}
videoModal();


function scrollId() {
    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

    // Scroll certain amounts from current position 
    window.scrollBy({
        top: 100, // could be negative value
        left: 0,
        behavior: 'smooth'
    });

    // Scroll to a certain element
    document.querySelector('.hello').scrollIntoView({
        behavior: 'smooth'
    });
}

scrollId();