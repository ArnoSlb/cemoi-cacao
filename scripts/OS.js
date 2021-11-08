if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    // Do Firefox-related activities
    console.log('Firefox')
    
    if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('Firefox mobile')
    }
    else{
        // document.getElementById('landing_form').style.backgroundColor = "red"
        console.log('Firefox desktop')
        document.querySelector('.loading_page_container').style.minHeight = "100vh";
        document.querySelector('.popup_container').style.minHeight = "100vh";
    }
}
else {
    console.log('pas Firefox')
}


// const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);

// console.log(inapp.browser)

// var OS = "OS Inconnu";
// if (navigator.appVersion.indexOf("Win")!=-1){
//     OS = "Windows"
//     // console.log("OS = ", OS)
// };
// if (navigator.appVersion.indexOf("Mac")!=-1){
//     OS = "MacOS"
//     // console.log("OS = ", OS)
// } ;
// if (navigator.appVersion.indexOf("X11")!=-1){
//     OS = "Unix"
//     // console.log("OS = ", OS)
// } ;
// if (navigator.appVersion.indexOf("Linux")!=-1) {
//     OS = "Linux"
//     // console.log("OS =", OS)
// };
// alert(OS);



// if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
//     var isChrome = /Chrome/.test(navigator.userAgent);
//     console.log(isChrome)
// }