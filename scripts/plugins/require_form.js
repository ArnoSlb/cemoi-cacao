export function form_required(form){
    var f_container = document.getElementById(form)
    var elmts = document.getElementsByClassName(form)
    var totalValidNeeded = elmts.length;
    var validState = 0;

    // Verify (a lil) the forms and return an msg if needed
    for (var i = 0; i < elmts.length; i++) {
        switch (elmts[i].type) {
            case 'text':
                if (f_container.classList.contains('stepper') && elmts[i].checkValidity() && elmts[i].value != '') {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].checkValidity() && elmts[i].value != '') {
                    validState++
                } else {
                    console.log(elmts[i].id + ' is not ok')
                }
                break;
            case 'email':
                if (f_container.classList.contains('stepper') && elmts[i].checkValidity() && elmts[i].value != '') {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].checkValidity() && elmts[i].value != '') {
                    validState++
                } else {
                    console.log(elmts[i].id + ' is not ok')
                }
                break;
            case 'checkbox':
                if (f_container.classList.contains('stepper') && elmts[i].checked) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].checked) {
                    validState++
                } else {
                    console.log(elmts[i].id + ' is not ok')
                }
                break;
            case 'tel':
                if (f_container.classList.contains('stepper') && elmts[i].checkValidity() && !elmts[i].value.includes('e') && elmts[i].value != '') {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].checkValidity() && !elmts[i].value.includes('e') && elmts[i].value != '') {
                    validState++
                } else {
                    console.log(elmts[i].id + ' is not ok')
                }
                break;
            case 'number':
                if (f_container.classList.contains('stepper') && elmts[i].checkValidity() && !elmts[i].value.includes('e') && elmts[i].value != '') {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].parentElement.parentElement.classList.contains('second_part')) {
                    validState++
                } else if (!f_container.classList.contains('stepper') && elmts[i].checkValidity() && !elmts[i].value.includes('e') && elmts[i].value != '') {
                    validState++
                } else {
                    console.log(elmts[i].id + ' is not ok')
                }
                break;
            default:
                return false
        }
    }
    if (validState == totalValidNeeded) {
        // console.log('form is ok')
        return true
    } else {
        console.log('form is not ok')
        document.getElementById('error_message').classList.add('active')
        setTimeout(function(){
            document.getElementById('error_message').classList.remove('active')
        }, 5000)
        return false
    }
}
