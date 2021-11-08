// Import functions
import { router } from './plugins/router.js'
import { set_document } from './plugins/set_document.js'
import { get_prize, close_prize } from './plugins/get_prize.js'
import { form_required } from './plugins/require_form.js'
import { trigger_share } from './plugins/share_img.js'
import { get_coupon } from './plugins/get_coupon.js'
import './OS.js'
import './experience.js'
import { experience } from './experience.js'
import * as THREE from 'https://cdn.blinkl.com/contenus_blinkl_clients/Cemoi_bio/js/three.module.js';
import { VRButton } from 'https://cdn.blinkl.com/contenus_blinkl_clients/Cemoi_bio/js/VRButton.js';

// Import vars
var db;
var state = 0;
var form_inputs = document.getElementsByTagName('input')
var coupon = false
// a Variable to know if the video was skipped
let is_video_skipped = false;
let is_video_outro_skipped = false;

window.THREE = THREE; // Used by APP Scripts.
window.VRButton = VRButton; // Used by APP Scripts.

// // Waiting for the DOM
// document.getElementById('iframe').onload = function(){ init() }
// // document.getElementById('myCanvas').onload = function(){ init() }
// document.addEventListener("load", init());

// function init(){
//     // console.log('je passe dans init', state)
//     state++
//     if (state == 2) {
//         // DOM initialized
//         addEvents()
//         set_document()
//     }
// }

if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {

    reportWindowSize()
    function reportWindowSize(){
        if( window.innerWidth > window.innerHeight){
            document.getElementById('BlinklLockLandscape').style.display = "block"
        }
        else{
            document.getElementById('BlinklLockLandscape').style.display = "none"
        }
    }
    window.addEventListener('resize', reportWindowSize)
}

addEvents()
set_document()

// Get on first form submit to Video to Intro
let content_video = document.querySelector("#video_intro .content_video")
let container = document.querySelector(".container")
let video_phone = "<video width=\"100vw\" id=\"video_player\" src=\"./src/video/Cemoi_TFB_Video1_Mobile.mp4\" type=video/mp4' playsinline></video>"
let video_desktop = "<video height=\"100vh\" id=\"video_player\" src=\"./src/video/Cemoi_TFB_Video1_Desktop.mp4\" type=video/mp4' playsinline></video>"
if (window.innerWidth>1024) {
    content_video.innerHTML = video_desktop
}
else {
    content_video.innerHTML = video_phone
}

document.getElementById('play_button').addEventListener('click', function(){
    
    if (form_required('f_form')) {
        document.getElementById('s_email').value = document.getElementById('f_email').value
        gtag('event', 'click',{ 'event_category': 'Entrée dans le jeu'})

        var video_player = document.getElementById("video_player")
            router('video')
            video_player.play()
        
        video_player.onended = function(){
        if (is_video_skipped === false){
            loading_page();
            }
        else {
            // console.log(is_video_skipped, 'je saute la video')
            }
        }
    }
})

// Loading Page
const loading_page = function(){
    document.getElementById('video_intro').style.display = "none"
    document.getElementById('loading_page').style.display ="block"
    experience()
}

// Video Outro
var content_video_outro = document.querySelector("#video_outro .content_video")
var video_phone_outro = "<video width=\"100vw\" id=\"video_player_outro\" src=\"./src/video/Cemoi_TFB_Video2_Mobile.mp4\" type=video/mp4' playsinline></video>"
var video_desktop_outro = "<video height=\"100vh\" id=\"video_player_outro\" src=\"./src/video/Cemoi_TFB_Video2_Desktop.mp4\" type=video/mp4' playsinline></video>"
if (window.innerWidth>1024) {
    content_video_outro.innerHTML = video_desktop_outro
}
else {
    content_video_outro.innerHTML = video_phone_outro
}


// Events listeners
function addEvents(){
    // Lose focus on submit form
    for (var i = 0; i < form_inputs.length; i++) {
        form_inputs[i].addEventListener('keyup', function(e){
            if(e.which==13||e.keyCode==13){
                this.blur();
            }
        }, false);
    }

        // Skip the video intro
    document.getElementById('button_skip_video').addEventListener('click', function(){
        loading_page()
        is_video_skipped = true  
    })

    // Trigger sharing route
    window.addEventListener('share_ourson', function(){
        router('popup_share')
    })

    // Get coupon page
    window.addEventListener('pass', function(){
        gtag('event', 'click',{ 'event_category': 'Click du bouton passer'});
        router('coupon_container')
    })

    // Close coupon page
    document.getElementById('close_coupon_container').addEventListener('click', function(){
        router('close_coupon_container')
    })

    // Get second form
    document.getElementById('get_last_form').addEventListener('click', function(){
        router('get_last_form')
    })

    // Trigger prize route
    window.addEventListener('get_prize', function(){
        get_prize()
    })

    // Close prize route
    document.getElementsByClassName('close_popup')[0].addEventListener('click', function(){
        close_prize()
    })
    
    document.getElementById('close_coupon_container').addEventListener('click', function(){
        router('close_coupon_container')
    })

    // // Return button for second form
    // document.getElementById('form_back_button').addEventListener('click', function(){
    //     s_form.classList.remove('second')
    //     s_form.classList.add('first')
    //     document.getElementById('redeem_button').children[0].children[0].innerHTML = 'Continuer'
    // })

    // Get second form submit and end_screen
    document.getElementById('redeem_button').addEventListener('click', function(){
        var s_form = document.getElementById('s_form')
        if (s_form.classList.contains('stepper') && s_form.classList.contains('first')) {
            document.getElementById('redeem_button').children[0].children[0].innerHTML = 'Confirmer'
            s_form.classList.add('second')
            s_form.classList.remove('first')
        } else if (form_required('s_form')){
            send_form_data('s_form')
            router('end_screen')
        }
    })

    // Get coupon from back-end
    window.addEventListener('get_coupon', function(e){
        
        if (!coupon) {
            get_coupon(e.detail)
            coupon = true
            // console.log(e.detail)
        } else {
            get_coupon('already_getted')
        }
    })

    
    // Trigger share at the end
    document.getElementById('share_game').addEventListener('click', function(){
        trigger_share('share_game')
    })

    // Trigger share at the end
    document.getElementById('share_game_2').addEventListener('click', function(){
        trigger_share('share_game')
    })

    // Trigger CGU download
    document.getElementById('game_rules').addEventListener('click', function(){
        download_cgu();
    })

    document.getElementById('button_gift_discover').addEventListener('click', function(){
        // console.log('je veux mon cadeauuuuu -> redeem coupon')
        document.getElementById('products_bio').style.display = "none"
        document.querySelector('.popup_container').style.display = "block"
        // console.log(document.getElementById('products_bio'))
        router('coupon_container')
        var container = document.querySelector(".container")
        container.style.maxWidth = '500px'
        gtag('event', 'click',{ 'event_category': 'Je découvre mon cadeau'});
        console.log('gtag je découvre mon cadeau')
    })
}

// Download cgu
async function download_cgu(){
    var link = document.createElement('a');
    link.href = '../../src/cgu.pdf';
    link.download = 'Réglement Complet Jeu Cémoi Proche de Vous';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Send form data to the back
function send_form_data(form){
    var inputs = document.getElementsByClassName(form)
    // console.log(inputs)

    // Populate formData
    var formData = new FormData();
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== '') {
            formData.append(inputs[i].name, inputs[i].value);
            // console.log(inputs[i].name, inputs[i].value)
        } else {
            formData.append(inputs[i].name, 'empty');
            // console.log(inputs[i].name, inputs[i].value)
        }
    }

    // And send it
    fetch('https://cemoishare.blinkl.com/register', {
    // fetch('https://cemoipreprod.blinkl.com/register', {
        method: 'POST',
        body: formData,
    }).then((response) => {
        if (response.status === '200') {
            // If it's ok, add an event to analytics
            gtag('event', 'click',{ 'event_category': 'Récompense validée par le serveur'});
        }
    })
}
