
	
function contact(event){

    //Create a new function with 1 parameter. We call this function on the form onsubmit="contact(event)" 
    
    
        event.preventDefault()
        //This stops the form from reloading the page
    
        const loading = document.querySelector('.modal__overlay--loading')
    
        //Select the loading screen overlay
    
        const success = document.querySelector('.modal__overlay--success')
    
        //Select the success screen overlay
    
        const fail = document.querySelector('.modal__overlay--fail')
    
        //Select the fail screen
    
        loading.classList += " modal__overlay--visible"
    
        //Show the loading screen
    
        emailjs
        .sendForm(
            'service_134e045',
            'template_jrs2ozk',
            event.target,
            '08o0h8_F-efYPg4Xp'
    
            //This is for the emailJS
    
        )
        .then(() => {
    
            //Wait for the emil to send ... THEN do the following code
    
    
           // throw new Error("error")
           //This is for testing purposes
    
    
            loading.classList.remove("modal__overlay--visible")
            //from loading screen, make z index -1 to hide it
            success.classList += " modal__overlay--visible"
            //On success, make the success screen z indez 1
    
        }).catch(() => {
            //If theres an error then do this
    
            loading.classList.remove("modal__overlay--visible")
            //hide loading screen
            fail.classList += " modal__overlay--visible"
            //show fail screen
       
        })
    
    
    
    }
    
    let isModalOpen = false
    //first run the modal is not open
    function toggleModal(){
    
        if (isModalOpen){
            //if it's open then change the bool and remove the modal open class
            isModalOpen = false
            return document.body.classList.remove("modal__open")
        }
        //if it's false, then set it to true and add .modal__open to the body. Notice the space " modal__open"
        isModalOpen = true
        document.body.classList += " modal__open"
    }
    
    //This is for clicking an element that has onclick="toggleModal()" and having the modal appear and disappear when clicking it
