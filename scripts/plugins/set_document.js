export function set_document(){
    // var iframe = document.getElementById('iframe')
    var height = window.innerHeight

    document.body.style.height = height + 'px'
    // iframe.style.height = height + 'px'

    window.onresize = function(){
        var height = window.innerHeight
        document.body.style.height = height + 'px'
        // iframe.style.height = height + 'px'
    }
}
