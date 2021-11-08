import { router } from './plugins/router.js'

export function experience(){

    var loader = new THREE.FileLoader();

    var domElement;

    const infos = ['Info1', 'Info2', 'Info3', 'Info4']
    const infosTitle = ["Qualité environnementale",
                        "Qualité alimentaire / traçabilité",
                        "Qualité aromatique",
                        "Qualité de vie du planteur"
                    ]
    const infosTextBold = ["Un chocolat qui contribue aux efforts de protection de l'environnement.",
                    "Un chocolat dont on connait l'histoire.",
                    "Un chocolat qui exprime des arômes subtils et délicats.",
                    "Un chocolat qui permet au planteur de vivre dignement,"
                    ]
    const infosText = ["Un engagement à réduire les risques liés à la déforestation et à promouvoir l’agroforesterie.",
                    "Une traçabilité totale, de l’origine jusqu’au processus de fabrication.",
                    "Un travail d’expert pour révéler des arômes subtils et délicats.",
                    "Un chocolat qui permet au planteur de vivre dignement, de soutenir sa famille et d'investir dans son outil de travail. Cet axe prend en compte la professionnalisation des producteurs et de leur coopérative, la scolarisation des enfants, l'accès à l'eau, à l'électricité et aux soins."
                    ]
    const infosImg = ["./src/icons/logo-qualite-environnementale.png",
                    "./src/icons/logo-qualite-alimentaire.png",
                    "./src/icons/logo-qualite-aromatique.png",
                    "./src/icons/logo-qualite-de-vie-du-planteur.png"
                    ]
    const infosColor = ["#72BDB3",
                        "#E6BD93",
                        "#D2644C",
                        "#893C47"
    ]

    let jsonLoad;
    let videoLoad;
    const experienceLoad = jsonLoad + videoLoad

    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    if (mobileAndTabletCheck() === false){
        document.getElementById('exp_instruction').innerText = "Restez appuyé sur le clic gauche"
        document.getElementById('exp_instruction_2').innerText = "de votre souris."
    }

    let OS = THREE.getOS();
        loader.load( OS === 'Windows' || OS ===  'Mac OS' || OS === 'Linux' ? 
        'https://cdn.blinkl.com/contenus_blinkl_clients/Cemoi_bio/app_desktop.json' : 
        'https://cdn.blinkl.com/contenus_blinkl_clients/Cemoi_bio/app.json',
            function ( text ) {

            let mute = true;
            var player = new THREE.App();
            player.load( JSON.parse( text ) );
            player.setSize( window.innerWidth, window.innerHeight );
            player.play();

            domElement = document.getElementById('experience').appendChild( player.dom );

            //only one event listener is needed here
            domElement.addEventListener('video_ended', (event) => {
                    //At the end the player should be dispose in order to save memory
                    player.stop();
                    player.dispose();
            });

            let video = document.getElementById('video');

            const videoLoaded = 
                setInterval(function(){
                    // console.log(video.readyState);
                    // console.log(video);
                    if (video.readyState === 4){
                        clearInterval(videoLoaded)
                        document.getElementById('loading_page_progress').style.width =  "100%"
                        document.querySelector('.loading_page_content_bar').style.display = "none"
                        document.getElementById('start_exp').style.display = "block"
                    }
                    else if (video.readyState === 3){
                        document.getElementById('loading_page_progress').style.width =  "80%"
                    }
                    else if (video.readyState === 2){
                        document.getElementById('loading_page_progress').style.width =  "60%"
                    }
                    else if (video.readyState === 1){
                        document.getElementById('loading_page_progress').style.width =  "40%"
                    }
                }, 100);

            document.getElementById('start_exp').addEventListener('click', function(){
                document.getElementById('loading_page').style.display ="none"
                document.getElementById('experience').style.display ="block"
                gtag('event', 'click',{ 'event_category': 'Démarrer l\'experience'});
            })

            //only one event listener is needed here
            domElement.addEventListener('step', (event) => {
                    let step_level = event.detail; //here is the index of the step that just finished
                    step_level += 2; //+1 because we match with the plan's name (starting with Plan02); + 1 because we are at the step after the step that has finished
                    // console.log(step_level)
                    let step_infos = false;
                    var messageTimer;
                    var nextStepTimer

                    if (step_level === -1){
                        clearTimeout(messageTimer);
                        clearTimeout(nextStepTimer);
                        document.getElementById('circle_cemoi').classList.add("circle_active")
                        document.getElementById('circle_1').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('step_message_container').classList.add("step_message_container")
                        document.getElementById('step_message_container').classList.remove("hide_message_container")
                        document.getElementById('step_message_level').innerText = ""
                        document.getElementById('step_message_title').innerText = ""
                        document.getElementById('step_message_container_close').style.display = "none"
                        document.getElementById('step_message_definition').innerText = ""
                        document.getElementById('step_message_container_close').innerText = ""
                        document.getElementById('step_message_title').style.paddingBottom = "0px "
                        document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.add("hide_message_container")
                    }
                    else if (step_level === 2){
                        document.getElementById('circle_cemoi').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('bar_1').classList.add("step_bar_active")
                        document.getElementById('mute_container').style.opacity = "100%"
                        document.getElementById('container_360').style.opacity = "100%"
                        document.getElementById('interstep_message_container').classList.add("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.remove("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = "En route vers la plantation !"
                        document.getElementById('step_message_container').classList.remove("step_message_container")
                        document.getElementById('step_message_container').classList.add("hide_message_container")
                    }
                    else if(step_level === 3){
                        clearTimeout(messageTimer);
                        clearTimeout(nextStepTimer);
                        document.getElementById('circle_cemoi').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('circle_1').classList.add("circle_active")
                        document.getElementById('circle_1').classList.add("circle_done")
                        document.getElementById('mute_container').style.opacity = "100%"
                        document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.add("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = ""
                        document.getElementById('step_message_container').classList.add("step_message_container")
                        document.getElementById('step_message_container').classList.remove("hide_message_container")
                        document.getElementById('step_message_level').innerText = "étape 1 :"
                        document.getElementById('step_message_title').innerText = "La récolte"
                        document.getElementById('step_message_container_close').style.display = "none"
                        document.getElementById('step_message_definition').innerText = ""
                        document.getElementById('step_message_container_close').innerText = "+"
                        document.getElementById('step_message_title').style.paddingBottom = "0px "
                        messageTimer = setTimeout(()=>{
                            document.getElementById('step_message_container').classList.remove("step_message_container")
                            document.getElementById('step_message_container').classList.add("hide_message_container")
                        }, 10000)
                        nextStepTimer = setTimeout(()=>{
                            document.getElementById('next_step').style.opacity = "100%"
                        }, 7000)
                        document.getElementById('step_line').addEventListener('click', function(){
                            clearTimeout(messageTimer);
                            clearTimeout(nextStepTimer);
                        })
                    }
                    else if(step_level === 4){
                        document.getElementById('circle_1').classList.remove("circle_active")
                        document.getElementById('bar_2').classList.add("step_bar_active")
                        document.getElementById('next_step').style.opacity = "0"
                        document.getElementById('interstep_message_container').classList.add("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.remove("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = "Et maintenant, l’écabossage !"
                    }
                    else if(step_level === 5){
                        clearTimeout(messageTimer);
                        clearTimeout(nextStepTimer);
                        document.getElementById('circle_cemoi').classList.remove("circle_active")
                        document.getElementById('circle_1').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.add("circle_active")
                        document.getElementById('circle_2').classList.add("circle_done")
                        document.getElementById('mute_container').style.opacity = "100%"
                        document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.add("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = ""
                        document.getElementById('step_message_container').classList.add("step_message_container")
                        document.getElementById('step_message_container').classList.remove("hide_message_container")
                        document.getElementById('step_message_level').innerText = "étape 2 :"
                        document.getElementById('step_message_title').innerText = "L'écabossage"
                        document.getElementById('step_message_container_close').style.display = "flex"
                        document.getElementById('step_message_definition').innerText = ""
                        document.getElementById('step_message_container_close').innerText = "+"
                        document.getElementById('step_message_title').style.paddingBottom = "0px "

                        document.getElementById('step_message_container_close').addEventListener('click', function(){
                            step_infos = !step_infos
                            if (step_infos == true){
                                document.getElementById('step_message_definition').innerText = "Procédé traditionnel d’ouverture des cabosses de cacao pour en extraire les fèves fraîches."
                                document.getElementById('step_message_container_close').innerText = "-"
                                document.getElementById('step_message_title').style.paddingBottom = "7px "
                            }   
                            else {
                                document.getElementById('step_message_definition').innerText = ""
                                document.getElementById('step_message_container_close').innerText = "+"
                                document.getElementById('step_message_title').style.paddingBottom = "0px "
                            }
                        })
                        messageTimer = setTimeout(()=>{
                            document.getElementById('step_message_container').classList.remove("step_message_container")
                            document.getElementById('step_message_container').classList.add("hide_message_container")
                        }, 10000)
                        nextStepTimer = setTimeout(()=>{
                            document.getElementById('next_step').style.opacity = "100%"
                        }, 7000)
                        document.getElementById('step_line').addEventListener('click', function(){
                            clearTimeout(messageTimer);
                            clearTimeout(nextStepTimer);
                        })
                    }
                    else if(step_level === 6){
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('bar_3').classList.add("step_bar_active")
                        document.getElementById('next_step').style.opacity = "0"
                        document.getElementById('interstep_message_container').classList.add("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.remove("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = "étape suivante : la fermentation"

                    }
                    else if(step_level === 7){
                        step_infos = false;
                        clearTimeout(messageTimer);
                        clearTimeout(nextStepTimer);
                        document.getElementById('circle_cemoi').classList.remove("circle_active")
                        document.getElementById('circle_1').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.add("circle_active")
                        document.getElementById('circle_3').classList.add("circle_done")
                        document.getElementById('mute_container').style.opacity = "100%"
                        document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.add("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = ""
                        document.getElementById('step_message_container').classList.add("step_message_container")
                        document.getElementById('step_message_container').classList.remove("hide_message_container")
                        document.getElementById('step_message_container_close').style.display = "flex"
                        document.getElementById('step_message_level').innerText = "étape 3 :"
                        document.getElementById('step_message_title').innerText = "La fermentation"
                        document.getElementById('step_message_definition').innerText = ""
                        document.getElementById('step_message_container_close').innerText = "+"
                        document.getElementById('step_message_title').style.paddingBottom = "0px "

                        document.getElementById('step_message_container_close').addEventListener('click', function(){
                            step_infos = !step_infos
                            if (step_infos == true){
                                document.getElementById('step_message_definition').innerText = "Procédé lent et naturel (4 à 7 jours) qui transforme le sucre des fèves fraîches, et en révèle les arômes."
                                document.getElementById('step_message_container_close').innerText = "-"
                                document.getElementById('step_message_title').style.paddingBottom = "7px "
                            }   
                            else {
                                document.getElementById('step_message_definition').innerText = ""
                                document.getElementById('step_message_container_close').innerText = "+"
                                document.getElementById('step_message_title').style.paddingBottom = "0px "
                            }
                        })
                        messageTimer = setTimeout(()=>{
                            document.getElementById('step_message_container').classList.remove("step_message_container")
                            document.getElementById('step_message_container').classList.add("hide_message_container")
                        }, 10000)
                        nextStepTimer = setTimeout(()=>{
                            document.getElementById('next_step').style.opacity = "100%"
                        }, 7000)
                        document.getElementById('step_line').addEventListener('click', function(){
                            clearTimeout(messageTimer);
                            clearTimeout(nextStepTimer);
                        })
                    }
                    else if(step_level === 8){
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('bar_4').classList.add("step_bar_active")
                        document.getElementById('next_step').style.opacity = "0"
                        document.getElementById('interstep_message_container').classList.add("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.remove("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = "Et maintenant, le séchage !"
                    }
                    else if(step_level === 9){
                        step_infos = false;
                        clearTimeout(messageTimer);
                        clearTimeout(nextStepTimer);
                        document.getElementById('circle_cemoi').classList.remove("circle_active")
                        document.getElementById('circle_1').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.add("circle_active")
                        document.getElementById('circle_4').classList.add("circle_done")
                        document.getElementById('mute_container').style.opacity = "100%"
                        document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.add("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = ""
                        document.getElementById('step_message_container').classList.add("step_message_container")
                        document.getElementById('step_message_container').classList.remove("hide_message_container")
                        document.getElementById('step_message_container_close').style.display = "flex"
                        document.getElementById('step_message_level').innerText = "étape 4 :"
                        document.getElementById('step_message_title').innerText = "Le séchage"
                        document.getElementById('step_message_definition').innerText = ""
                        document.getElementById('step_message_container_close').innerText = "+"
                        document.getElementById('step_message_title').style.paddingBottom = "0px "

                        document.getElementById('step_message_container_close').addEventListener('click', function(){
                            step_infos = !step_infos
                            if (step_infos == true){
                                document.getElementById('step_message_definition').innerText = "Procédé de 7 jours minimum, qui réduit l’humidité des fèves de cacao et permet leur conservation."
                                document.getElementById('step_message_container_close').innerText = "-"
                                document.getElementById('step_message_title').style.paddingBottom = "7px "
                            }   
                            else {
                                document.getElementById('step_message_definition').innerText = ""
                                document.getElementById('step_message_container_close').innerText = "+"
                                document.getElementById('step_message_title').style.paddingBottom = "0px "
                            }
                        })
                        messageTimer = setTimeout(()=>{
                            document.getElementById('step_message_container').classList.remove("step_message_container")
                            document.getElementById('step_message_container').classList.add("hide_message_container")
                        }, 10000)
                        nextStepTimer = setTimeout(()=>{
                            document.getElementById('next_step').style.opacity = "100%"
                        }, 7000)
                        document.getElementById('step_line').addEventListener('click', function(){
                            clearTimeout(messageTimer);
                            clearTimeout(nextStepTimer);
                        })
                    }
                    else if(step_level === 10){
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('bar_5').classList.add("step_bar_active")
                        document.getElementById('next_step').style.opacity = "0"
                        document.getElementById('interstep_message_container').classList.add("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.remove("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = "Prochaine destination : l'usine Cémoi"
                    }
                    else if(step_level === 11){
                        step_infos = false;
                        clearTimeout(messageTimer);
                        clearTimeout(nextStepTimer);
                        document.getElementById('circle_cemoi').classList.remove("circle_active")
                        document.getElementById('circle_1').classList.remove("circle_active")
                        document.getElementById('circle_2').classList.remove("circle_active")
                        document.getElementById('circle_3').classList.remove("circle_active")
                        document.getElementById('circle_4').classList.remove("circle_active")
                        document.getElementById('circle_5').classList.add("circle_active")
                        document.getElementById('circle_5').classList.add("circle_done")
                        document.getElementById('mute_container').style.opacity = "100%"
                        document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                        document.getElementById('interstep_message_container').classList.add("hide_message_container")
                        document.getElementById('interstep_message_text').innerText = ""
                        document.getElementById('step_message_container').classList.add("step_message_container")
                        document.getElementById('step_message_container').classList.remove("hide_message_container")
                        document.getElementById('step_message_container_close').style.display = "flex"
                        document.getElementById('step_message_level').innerText = "étape 5 :"
                        document.getElementById('step_message_title').innerHTML = "L'usine Cémoi <br> Stockage et transformation des fèves de cacao"
                        document.getElementById('step_message_definition').innerText = ""
                        document.getElementById('step_message_container_close').innerText = "+"
                        document.getElementById('step_message_title').style.paddingBottom = "0px "

                        document.getElementById('step_message_container_close').addEventListener('click', function(){
                            step_infos = !step_infos
                            if (step_infos == true){
                                document.getElementById('step_message_definition').innerText = "La masse de cacao est une pâte qui contient 100% de cacao pur. Le pressage de cette masse donnera le beurre (matière grasse végétale) et le tourteau (qui sera broyé en poudre de cacao)."                        
                                document.getElementById('step_message_container_close').innerText = "-"
                                document.getElementById('step_message_title').style.paddingBottom = "7px "
                            }   
                            else {
                                document.getElementById('step_message_definition').innerText = ""
                                document.getElementById('step_message_container_close').innerText = "+"
                                document.getElementById('step_message_title').style.paddingBottom = "0px "
                            }
                        })
                        messageTimer = setTimeout(()=>{
                            document.getElementById('step_message_container').classList.remove("step_message_container")
                            document.getElementById('step_message_container').classList.add("hide_message_container")
                        }, 10000)
                        nextStepTimer = setTimeout(()=>{
                            document.getElementById('next_step').style.opacity = "100%"
                        }, 7000)
                        document.getElementById('step_line').addEventListener('click', function(){
                            clearTimeout(messageTimer);
                            clearTimeout(nextStepTimer);
                        })
                    }
                    else if(step_level === 12){
                        document.getElementById('circle_5').classList.remove("circle_active")
                        document.getElementById('next_step').style.opacity = "0" 
                        router('video_outro') 
                    }
            });

            //only one event listener is needed here
            domElement.addEventListener('info', (event) => {
                    let message = event.detail; //here is the index of the info to display
                    let text = infosText[infos.indexOf(message)];
                    let title = infosTitle[infos.indexOf(message)];
                    let textBold = infosTextBold[infos.indexOf(message)];
                    let infoImg = infosImg[infos.indexOf(message)];
                    let infoColor = infosColor[infos.indexOf(message)];
                    document.getElementById("info_container").style.display = "flex"
                    document.getElementById("infoTitle").innerHTML = title;
                    document.getElementById("infoTitle").style.color = infoColor;
                    document.getElementById("infoTitle").style.borderLeft = "1px solid" + infoColor;
                    // document.getElementById("infoBold").innerHTML = textBold;
                    document.getElementById("info").innerHTML = text;
                    document.getElementById("infoImg").setAttribute("src", infoImg);  
            });

            //only one event listener is needed here
            document.getElementById("next_step").addEventListener('click', () => {
                let event = new Event('next_step');
                domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
            });

            //only one event listener is needed here
            document.getElementById("play").addEventListener('click', () => {
                let event = new Event('play');
                domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
                let event2 = new CustomEvent('go_to_step', { 'detail': 0 });
                domElement.dispatchEvent(event2); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
                document.getElementById('step_message_container').classList.remove("step_message_container")
                document.getElementById('step_message_container').classList.add("hide_message_container")
                document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                document.getElementById('interstep_message_container').classList.add("hide_message_container")
                document.getElementById("exp_intro_message").style.display = "none"
                mute = false
                document.getElementById('circle_cemoi').classList.remove("circle_active")
                document.getElementById('circle_1').classList.remove("circle_active")
                document.getElementById('circle_2').classList.remove("circle_active")
                document.getElementById('circle_3').classList.remove("circle_active")
                document.getElementById('circle_4').classList.remove("circle_active")
                document.getElementById('circle_5').classList.remove("circle_active")
                document.getElementById('step_message_level').innerText = ""
                document.getElementById('step_message_title').innerText = ""
                document.getElementById('step_message_container_close').style.display = "none"
                document.getElementById('step_message_definition').innerText = ""
                document.getElementById('step_message_container_close').innerText = ""
                document.getElementById('step_message_title').style.paddingBottom = "0px "
            });

            document.getElementById('mute_container').addEventListener('click', () => {
                mute = !mute
                if (mute === true){
                    let event = new Event('mute');
                    domElement.dispatchEvent(event);
                    document.getElementById('mute_logo').setAttribute("src", "./src/icons/mute.svg")
                }
                else if(mute === false){
                    let event = new Event('unmute');
                    domElement.dispatchEvent(event);
                    document.getElementById('mute_logo').setAttribute("src", "./src/icons/unmute.svg")
                }		
            });

            document.getElementById('info_container_close').addEventListener('click', function(){
                document.getElementById('info_container').style.display = "none";
                document.getElementById('container_360').style.opacity = "100%"
                let event = new Event('play');
                domElement.dispatchEvent(event);
            })

            // document.getElementById('step_message_container_close').addEventListener('click', function(){
            //     document.getElementById('step_message_container').classList.remove("step_message_container")
            //     document.getElementById('step_message_container').classList.add("hide_message_container")
            // })

            //only one event listener is needed here
            // document.getElementById("circle_cemoi").addEventListener('click', () => {
            //     let event = new CustomEvent('go_to_step', { 'detail': -1 });
            //     domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
            //     document.getElementById('step_message_container').classList.remove("step_message_container")
            //     document.getElementById('step_message_container').classList.add("hide_message_container")
            //     document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
            //     document.getElementById('interstep_message_container').classList.add("hide_message_container")

            // });
            //only one event listener is needed here
            document.getElementById("circle_1").addEventListener('click', () => {
                let event = new CustomEvent('go_to_step', { 'detail': 1 });
                domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
                document.getElementById('step_message_container').classList.remove("step_message_container")
                document.getElementById('step_message_container').classList.add("hide_message_container")
                document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                document.getElementById('interstep_message_container').classList.add("hide_message_container")
            });
            //only one event listener is needed here
            document.getElementById("circle_2").addEventListener('click', () => {
                let event = new CustomEvent('go_to_step', { 'detail': 3 });
                domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
                document.getElementById('step_message_container').classList.remove("step_message_container")
                document.getElementById('step_message_container').classList.add("hide_message_container")
                document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                document.getElementById('interstep_message_container').classList.add("hide_message_container")
            });
            //only one event listener is needed here
            document.getElementById("circle_3").addEventListener('click', () => {
                let event = new CustomEvent('go_to_step', { 'detail': 5 });
                domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
                document.getElementById('step_message_container').classList.remove("step_message_container")
                document.getElementById('step_message_container').classList.add("hide_message_container")
                document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                document.getElementById('interstep_message_container').classList.add("hide_message_container")
            });
            //only one event listener is needed here
            document.getElementById("circle_4").addEventListener('click', () => {
                let event = new CustomEvent('go_to_step', { 'detail': 7 });
                domElement.dispatchEvent(event); //dispatch event on the canvas to go to next_step; you WILL get a step event to know which step just finished
                document.getElementById('step_message_container').classList.remove("step_message_container")
                document.getElementById('step_message_container').classList.add("hide_message_container")
                document.getElementById('interstep_message_container').classList.remove("interstep_message_container")
                document.getElementById('interstep_message_container').classList.add("hide_message_container")
            });

            window.addEventListener( 'resize', function () {

                player.setSize( window.innerWidth, window.innerHeight );
            } );



        },
        (progress) => document.getElementById('loading_page_progress').style.width =  progress.loaded / progress.total * 30 + "%",
        (error) => console.log("error while loading " + error)
        );

    /* edit button */
}