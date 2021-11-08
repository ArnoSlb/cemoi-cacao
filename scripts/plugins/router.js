import { trigger_share } from './share_img.js'

export function router(uri) {
    switch (uri) {
        // Captcha
        case 'captcha':
            document.getElementById('f_form').style.display = "none"
            document.getElementById('landing_page_text').style.display = "none"
            document.getElementById('captcha').style.display = "block"
            // console.log('je passe dans captcha')
            break;

        // Start the video
        case 'video':
            document.getElementById('video_intro').classList.add('active')
            document.getElementById('video_intro').style.display = "block"
            document.getElementById('landing_page').classList.add('inactive')
            // gtag('event', 'click',{ 'event_category': 'Lancer la vidéo intro'});
            // console.log('je passe dans le case video')
            break;

        // Enter in the game
        case 'play':
            console.log('je passe dans la case play')
            document.getElementById('video').classList.replace('active', 'inactive')
            document.getElementById('game_egghunt').classList.add('active')
            gtag('event', 'click',{ 'event_category': 'Entrée dans le jeu'});
            break;
        
        case 'video_outro':
            let is_video_outro_skipped = false;
            gtag('event', 'click',{ 'event_category': 'Lancer la vidéo outro'});
            // console.log('je passe dans le case video_outro')

            var video_player_outro = document.getElementById("video_player_outro")
            document.getElementById('video_outro').classList.add('active')
            document.getElementById('video_outro').style.display = "block"
            document.getElementById('experience').style.display = "none"  
            video_player_outro.play()


            video_player_outro.onended = function(){
            if (is_video_outro_skipped === false){
                router('bio_products')
                }
            else {
                // console.log(is_video_skipped, 'je saute la video')
                }
            }

            // Skip the video Outro
            document.getElementById('button_skip_video_outro').addEventListener('click', function(){
                router('bio_products')
                is_video_outro_skipped = true  
            })
            break;

        case 'bio_products':
            // console.log('je passe dans bio_products')
            document.getElementById('products_bio').style.display = "flex"
            document.getElementById('video_outro').style.display = "none"
            break;

        // Trigger the "Facebook" button
        case 'popup_share':
            var popup = document.getElementById(uri)
            popup.style.display = 'flex';
            trigger_share('facebook')
            setTimeout(function(){
                popup.style.display = 'none';
                router('coupon_container')
            }, 5000)
            break;

        // Get the coupon page
        case 'coupon_container':
             // Generate token
            grecaptcha.ready(function() {
                grecaptcha.execute('6LeyE1waAAAAAMy-M7b-HzhI3PdFLPLy2xw9aGEm', {action: 'homepage'})
                    .then(function(token) {
                        
                        var mailToSend = document.getElementById('f_email').value
                        var user_token = token
                        
                        var formData = new FormData();
                        formData.append("email", mailToSend);
                        formData.append("token", user_token);
                        // console.log(user_token)
            
                        // fetch('https://cemoipreprod.blinkl.com/prize', {
                        fetch('https://cemoishare.blinkl.com/prize', {
                            method: 'POST',
                            body: formData,
                        }).then((response) => {
                            response.json().then(function(data) {
                                // faire quelque chose avec les données
                                // console.log(data)
                                gtag('event', 'click',{ 'event_category': "J'ai bien reçu mon coupon : " + data.type });
                                window.dispatchEvent(new CustomEvent('get_coupon', {
                                    detail: data.type
                                }))
                            });
                        })

                    });
            });

            var mailToCheck = document.getElementById('f_email').value
            var formData2 = new FormData();
            formData2.append("email", mailToCheck);

            // fetch('https://cemoipreprod.blinkl.com/customer', {
            fetch('https://cemoishare.blinkl.com/customer', {
                method: 'POST',
                body: formData2
            }).then((response) => {
                response.json().then(function(data) {
                    if (data.type === "Customer_found"){
                        // console.log('Profil trouvé en bdd')
                        // console.log('data prenom', data.prenom !== null)
                        // console.log('data prenom', data.prenom !== 'empty')
                        // console.log('data prenom', data.prenom !== undefined)
                        if (data.prenom !== null && (data.prenom !== 'empty' || data.prenom !== undefined)){
                            // console.log(data.prenom, typeof data.prenom)
                            document.getElementById('s_firstname').value = data.prenom
                            document.getElementById('s_firstname').setAttribute("disabled", "")
                        }
                        if (data.nom !== null && (data.nom !== 'empty' || data.nom !== undefined)){
                            // console.log(data.nom, typeof data.nom)
                            document.getElementById('s_surname').value = data.nom
                            document.getElementById('s_surname').setAttribute("disabled", "")
                        }
                        if (data.telephone !== null && (data.telephone !== 'empty' || data.telephone !== undefined)){
                            // console.log(data.telephone, typeof data.telephone)
                            document.getElementById('s_phone').value = data.telephone
                            document.getElementById('s_phone').setAttribute("disabled", "")
                        }
                    }
                })
            });

            document.getElementById('redeem_coupon').style.display = 'block'
            // document.getElementById('redeem_container').style.display = 'block'

            break;

        // Close the coupon page
        case 'close_coupon_container':
            document.getElementById('redeem_coupon').style.display = 'none'
            document.getElementById('end_screen_2').style.display = 'block'
            break;

        // Get the form page
        case 'get_last_form':
            document.getElementById('coupon_container').classList.remove('active')
            document.getElementById('redeem_coupon').classList.add('active')
            document.getElementById('redeem_container').style.display = 'block'
            break;

        // Get the end screen
        case 'end_screen':
            gtag('event', 'click',{ 'event_category': 'Je confirme mon formulaire'});
            var popup = document.getElementById(uri)
            popup.style.display = 'flex';
            break;

        // Never used
        default:
            console.log("Cette page n'existe pas")
    }
}
