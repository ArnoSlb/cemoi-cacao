export function trigger_share(platform){
    var img_src = document.getElementById('my_blob').src
    var itsAPhone = false;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        itsAPhone = true
    }

    // Share function, courage...
    switch (platform) {
        // Two functions :
        case 'facebook':
            if (navigator.share && itsAPhone) {
                // 1) navigator.share, if phones can trigger it. It's not compatible everywhere
                navigator.share({
                    url: img_src,
                    title: 'Partage ton ourson guimauve !',
                    text: 'Invite tes amis pour leur faire gagner leurs vacances en famille en France',
                    hashtag: "#cemoiprintempsdubio"
                })
                .then(() => console.log('Share was successful.'))
                .catch((error) => console.log('Sharing failed', error));
                console.log(`Ok`);
            } else {
                // 2) FB.ui, fb js API, with the method 'share' or 'feed', see doc
                FB.ui({
                    method: 'share',
                    quote: "Invite tes amis pour leur faire gagner leurs vacances en famille en France",
                    hashtag: "#cemoiprintempsdubio",
                    href: img_src
                }, function(response){
                    if (response && response.status === 200) {
                        gtag('event', 'click',{ 'event_category': 'Click du bouton facebook'});
                    }
                });
            }
            break;
        case 'share_game':
            // Same as above :)
            if (navigator.share && itsAPhone) {
                navigator.share({
                    url: 'https://cemoishare.blinkl.com/',
                    title: 'Invite tes amis à recevoir leurs récompenses !',
                    text: 'Invite tes amis pour leur faire gagner leurs vacances en famille en France',
                    hashtag: "#cemoiprintempsdubio"
                })
                .then(() => gtag('event', 'click',{ 'event_category': 'Partage du jeu sur facebook'}))
                .catch((error) => console.log('Sharing failed', error));
                console.log(`Ok`);
            } else {
                FB.ui({
                    method: 'share',
                    quote: "Invite tes amis pour leur faire gagner leurs vacances en famille en France",
                    hashtag: "#cemoitempsfortbio",
                    href: 'https://cemoishare.blinkl.com/'
                }, function(response){
                    if (response && response.status === 200) {
                        gtag('event', 'click',{ 'event_category': 'Partage du jeu sur facebook'});
                    }
                });
            }
            break;
        default:
    }
}
