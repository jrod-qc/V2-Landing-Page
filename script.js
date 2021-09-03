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

}

scrollId();

function tabSection() {
    $(".whf-1").on("click", function() {
        $(".content-whf-1").css("display", "block");
        $(".whf-1").css("backgroundColor", "#c10909");
        $(".whf-2").css("backgroundColor", "#ea252c");
        $(".whf-3").css("backgroundColor", "#ea252c");
        $(".content-whf-2").css("display", "none");
        $(".content-whf-3").css("display", "none");
    });

    $(".whf-2").on("click", function() {
        $(".content-whf-1").css("display", "none");
        $(".content-whf-2").css("display", "block");
        $(".whf-2").css("backgroundColor", "#c10909");
        $(".whf-1").css("backgroundColor", "#ea252c");
        $(".whf-3").css("backgroundColor", "#ea252c");
        $(".content-whf-3").css("display", "none");
    });

    $(".whf-3").on("click", function() {
        $(".content-whf-1").css("display", "none");
        $(".content-whf-2").css("display", "none");
        $(".content-whf-3").css("display", "block");
        $(".whf-1").css("backgroundColor", "#ea252c");
        $(".whf-2").css("backgroundColor", "#ea252c");
        $(".whf-3").css("backgroundColor", "#c10909");
    });
}

tabSection();




// This is the Calculator Section

var sliderHoursRange = document.getElementById("slider-hours-range");
var sliderHoursRangeResults = document.getElementById("slider-hours-results");
var sliderDayRangeResults = document.getElementById("slider-day-results");
var sliderMonthResults = document.getElementById("slider-month-results");
var sliderYearResults = document.getElementById("slider-year-results");
document.getElementById("stealth-models").value = "4.8";
document.getElementById("fan-selection").value = "stealth";

// This is the Template for the fan Object

function fan(model, watts, kwh, kwhPrice) {
    this.model = model;
    this.watts = watts;
    this.kwh = kwh;
    this.kwhPrice = kwhPrice;
}

// this is the Fan Selection
function onFanSelect() {
    var fanSelection = document.getElementById("fan-selection").value;
    if (fanSelection == "trident") {
        document.getElementById("trident-models").style.display = "block";
        document.getElementById("stealth-models").style.display = "none";
        document.getElementById("slider-and-results-wrapper").style.display = "none";
    } else if (fanSelection == "stealth") {
        document.getElementById("trident-models").style.display = "none";
        document.getElementById("stealth-models").style.display = "block";
        document.getElementById("slider-and-results-wrapper").style.display = "none";
    } else {
        alert("Please Select a Fan");
        document.getElementById("trident-models").style.display = "none";
        document.getElementById("stealth-models").style.display = "none";
    }
}

onFanSelect();

// This is the Trident Selection
function onTridentSelect() {
    // This is the Model 1.5
    var tridentSelection = document.getElementById("trident-models").value;
    if (tridentSelection == "1.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(1.5, 115, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };
        // This is the Model 2.5
    } else if (tridentSelection == "2.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(2.5, 244, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };
        // This is the Model 3.3
    } else if (tridentSelection == "3.3") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(3.3, 323, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };
        // This is the Model 4.8
    } else if (tridentSelection == "4.8") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(4.8, 555, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };

        // This is the Model 5.5
    } else if (tridentSelection == "5.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(5.5, 632, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };
        // This is the Model 6.0
    } else if (tridentSelection == "6.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(6.0, 777, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };
        // This is the Model 7.0
    } else if (tridentSelection == "7.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var trident = new fan(7.0, 1147, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * trident.kwhPrice * 100) / 100;
            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 30 * trident.kwhPrice * 100) / 100;
            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(trident.watts / trident.kwh * this.value * 365 * trident.kwhPrice * 100) / 100;


        };
    } else {
        alert("Please Make A Model Selection");
    }
}

// This is the Stealth Selection
function onStealthSelect() {
    // This is the Model 1.5
    var stealthSelection = document.getElementById("stealth-models").value;
    if (stealthSelection == "1.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(1.5, 66.7, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };
        // This is the Model 2.5
    } else if (stealthSelection == "2.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(2.5, 157, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };
        // This is the Model 3.3
    } else if (stealthSelection == "3.3") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(3.3, 264, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };
        // This is the Model 4.8
    } else if (stealthSelection == "4.8") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(4.8, 408, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };

        // This is the Model 5.5
    } else if (stealthSelection == "5.5") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(5.5, 490, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };
        // This is the Model 6.0
    } else if (stealthSelection == "6.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(6.0, 462, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };
        // This is the Model 7.0
    } else if (stealthSelection == "7.0") {
        document.getElementById("slider-and-results-wrapper").style.display = "flex";

        sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 0;
        sliderDayRangeResults.innerHTML = "$" + 0;
        sliderMonthResults.innerHTML = "$" + 0;
        sliderYearResults.innerHTML = "$" + 0;

        sliderHoursRange.oninput = function() {
            sliderHoursRangeResults.innerHTML = this.value;

            var stealth = new fan(7.0, 725, 1000, 0.35);
            // This is for the day
            sliderDayRangeResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * stealth.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 30 * stealth.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearResults.innerHTML = "$" + Math.round(stealth.watts / stealth.kwh * this.value * 365 * stealth.kwhPrice * 100) / 100;


        };
    } else {
        alert("Please Make A Model Selection");
    }
}
onStealthSelect();

// This are the Fixed Values
function selectStealth() {
    var sliderHoursRange = document.getElementById("slider-hours-range");
    var sliderHoursRangeResults = document.getElementById("slider-hours-results");
    var sliderDayRangeResults = document.getElementById("slider-day-results");
    var sliderMonthResults = document.getElementById("slider-month-results");
    var sliderYearResults = document.getElementById("slider-year-results");


    sliderHoursRangeResults.innerHTML = sliderHoursRange.value = 8;

    // var stealth = new fan(4.8, 408, 1000, 0.35);
    // This is for the day
    sliderDayRangeResults.innerHTML = "$" + Math.round(408 / 1000 * 8 * 0.35 * 100) / 100;
    // This is for the Month
    sliderMonthResults.innerHTML = "$" + Math.round(408 / 1000 * 8 * 30 * 0.35 * 100) / 100;
    // This is for the Year
    sliderYearResults.innerHTML = "$" + Math.round(408 / 1000 * 8 * 365 * 0.35 * 100) / 100;
}

selectStealth();


// This is the AC Section

var sliderDayRangeResultsAC = document.getElementById("slider-day-results-ac");
var sliderMonthRangeResultsAC = document.getElementById("slider-month-results-ac");
var sliderYearRangeResultsAC = document.getElementById("slider-year-results-ac");
var sliderHoursRangeAC = document.getElementById("slider-hours-range-ac");
var sliderHoursRangeResultsAC = document.getElementById("slider-hours-results-ac");
var acKwhSelection = document.getElementById("ac-kwh-selection").value = "5000";
document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";


function onAcKwhSelect() {
    var acKwhSelection = document.getElementById("ac-kwh-selection").value;

    if (acKwhSelection === "3000") {
        document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";

        sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 0;
        sliderDayRangeResultsAC.innerHTML = "$" + 0;
        sliderMonthRangeResultsAC.innerHTML = "$" + 0;
        sliderYearRangeResultsAC.innerHTML = "$" + 0;
        sliderHoursRangeAC.oninput = function() {
            sliderHoursRangeResultsAC.innerHTML = this.value;

            var watts3000 = new fan(3000, 3000, 1000, 0.35);
            // This is for the day
            sliderDayRangeResultsAC.innerHTML = "$" + Math.round(watts3000.watts / watts3000.kwh * this.value * watts3000.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(watts3000.watts / watts3000.kwh * this.value * 30 * watts3000.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearRangeResultsAC.innerHTML = "$" + Math.round(watts3000.watts / watts3000.kwh * this.value * 365 * watts3000.kwhPrice * 100) / 100;
        };
    } else if (acKwhSelection === "5000") {
        document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";

        sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 0;
        sliderDayRangeResultsAC.innerHTML = "$" + 0;
        sliderMonthRangeResultsAC.innerHTML = "$" + 0;
        sliderYearRangeResultsAC.innerHTML = "$" + 0;

        sliderHoursRangeAC.oninput = function() {
            sliderHoursRangeResultsAC.innerHTML = this.value;

            var watts5000 = new fan(5000, 5000, 1000, 0.35);
            // This is for the day
            sliderDayRangeResultsAC.innerHTML = "$" + Math.round(watts5000.watts / watts5000.kwh * this.value * watts5000.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(watts5000.watts / watts5000.kwh * this.value * 30 * watts5000.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearRangeResultsAC.innerHTML = "$" + Math.round(watts5000.watts / watts5000.kwh * this.value * 365 * watts5000.kwhPrice * 100) / 100;
        };
    } else if (acKwhSelection === "8000") {
        document.getElementById("slider-and-results-kwh-wrapper").style.display = "flex";

        sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 0;
        sliderDayRangeResultsAC.innerHTML = "$" + 0;
        sliderMonthRangeResultsAC.innerHTML = "$" + 0;
        sliderYearRangeResultsAC.innerHTML = "$" + 0;

        sliderHoursRangeAC.oninput = function() {
            sliderHoursRangeResultsAC.innerHTML = this.value;

            var watts8000 = new fan(8000, 8000, 1000, 0.35);
            // This is for the day
            sliderDayRangeResultsAC.innerHTML = "$" + Math.round(watts8000.watts / watts8000.kwh * this.value * watts8000.kwhPrice * 100) / 100;

            // This is for the Month
            sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(watts8000.watts / watts8000.kwh * this.value * 30 * watts8000.kwhPrice * 100) / 100;

            // This is for the Year
            sliderYearRangeResultsAC.innerHTML = "$" + Math.round(watts8000.watts / watts8000.kwh * this.value * 365 * watts8000.kwhPrice * 100) / 100;
        };
    } else {
        alert("Please Select KWH");
    }
}

onAcKwhSelect();

// These are the Fixed Values
function selectAC() {
    var sliderDayRangeResultsAC = document.getElementById("slider-day-results-ac");
    var sliderMonthRangeResultsAC = document.getElementById("slider-month-results-ac");
    var sliderYearRangeResultsAC = document.getElementById("slider-year-results-ac");
    var sliderHoursRangeAC = document.getElementById("slider-hours-range-ac");
    var sliderHoursRangeResultsAC = document.getElementById("slider-hours-results-ac");

    sliderHoursRangeResultsAC.innerHTML = sliderHoursRangeAC.value = 8;

    // var watts5000 = new fan(5000, 5000, 1000, 0.35);
    // This is for the day
    sliderDayRangeResultsAC.innerHTML = "$" + Math.round(5000 / 1000 * 8 * 0.35 * 100) / 100;
    // This is for the Month
    sliderMonthRangeResultsAC.innerHTML = "$" + Math.round(5000 / 1000 * 8 * 30 * 0.35 * 100) / 100;
    // This is for the Year
    sliderYearRangeResultsAC.innerHTML = "$" + Math.round(5000 / 1000 * 8 * 365 * 0.35 * 100) / 100;
}

selectAC();