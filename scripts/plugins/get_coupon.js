export function get_coupon(coupon){
    var cp_content = document.getElementById('coupon_content')
    var content;

    // Get response (coupon) from backend and apply the good 'content'
    switch (coupon) {
        case 'consolation':
            // console.log('je passe dans consolation')
            content = '<p class="title bigsize red">Bravo !</p><p class="subtitle brown">Vous avez remporté <br /> <span class="red"> 20% de réduction</span>  <br /> valable uniquement sur <br /> <span class="red">www.laboutiquecemoi.fr</span></p><img class="" src="./src/imgs/coupons/cp_10.png" alt="coupon">'
            // document.getElementById('s_form').classList.add('stepper')
            break;
        case 'promo 15%':
            // console.log('je passe dans promo 15%')
            content = '<p class="title bigsize red">Bravo !</p><p class="subtitle brown">Vous avez remporté <br /> <span class="red"> 25% de réduction</span> <br /> valable uniquement sur <br /> <span class="red">www.laboutiquecemoi.fr</span></p><img class="" src="./src/imgs/coupons/cp_15.png" alt="coupon">'
            // document.getElementById('s_form').classList.add('stepper')
            break;
        case 'sejour':
            content = '<p class="title bigsize red">Bravo !</p><p class="subtitle brown">Vous avez remporté<span class="red"> <br /> un séjour en france !</span></p><img class="" src="./src/imgs/coupons/cp_voyage.png" alt="coupon">'
            document.getElementById('redeem_button').children[0].children[0].innerHTML = 'Continuer'
            document.getElementById('s_form').classList.add('stepper')
            break;
        case 'moment_chocolat':
            content = '<p class="title bigsize red">Bravo !</p><p class="subtitle brown">Vous avez remporté<span class="red"> <br /> un moment chocolat !</span></p><img class="" src="./src/imgs/coupons/cp_chocolate.png" alt="coupon">'
            document.getElementById('redeem_button').children[0].children[0].innerHTML = 'Continuer'
            document.getElementById('s_form').classList.add('stepper')
            break;
        case 'no_email_provided':
            // console.log('no_email_provided')
            content = '<p class="title bigsize red">L\'adresse mail insérée est invalide</p><p class="subtitle brown">Veuillez insérer une adresse mail valide</p><img class="" src="./src/imgs/coupons/ourson_error.png" alt="coupon">'
            document.getElementById('get_last_form').children[0].children[0].innerHTML = 'Je recommence'
            document.getElementById('get_last_form').addEventListener('click', function(){
                document.location.reload();
            })
            break;
        case 'already_played':
            // console.log('already_played')
            content = '<p class="title bigsize red">Bravo, <p class="subtitle red">Vous avez déjà gagné aujourd\'hui</p></p><p class="subtitle brown">Vous pouvez retenter <br> votre chance dès<span class="red"> demain !</span></p><img class="error" src="./src/imgs/logo-transparence-cacao-black.png" alt="coupon">'
            document.getElementById('get_last_form').children[0].children[0].innerHTML = 'Je recommence'
            document.getElementById('get_last_form').addEventListener('click', function(){
                document.location.reload();
            })
            break;
        case 'already_getted':
            return;
            break;
        default:
            // console.log('je passe dans content par defaut')
            content = '<p class="title bigsize red">Bravo !</p><p class="subtitle brown">Vous avez remporté<span class="red"> 20% de réduction</span> valable uniquement sur <span class="red">www.laboutiquecemoi.fr</span></p><img class="error" src="./src/imgs/coupons/cp_10.png" alt="coupon">'
            break;
    }
    document.getElementById('coupon_content').innerHTML = content
    document.getElementById('coupon_content').classList.add('active')
}
