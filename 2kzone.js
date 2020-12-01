function validateForm() { 
    var name = document.forms["myForm"]["teamName"]; 
    var captainN = document.forms["myForm"]["captainName"]; 
    var email = document.forms["myForm"]["captainEmail"]; 
    var twitter = document.forms["myForm"]["teamTwitter"]; 
    var twitch = document.forms["myForm"]["twitchUser"]; 


    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (captainN.value == "") { 
        window.alert("Please enter your captain name."); 
        captainN.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (twitter.value == "") { 
        window.alert( 
          "Please enter your twitter team account."); 
        twitter.focus(); 
        return false; 
    } 

    if (twitch.value == "") { 
        window.alert("Please enter twitch account."); 
        twitch.focus(); 
        return false; 
    } 



    return true; 
} 

function validateForm2() { 
    var name = document.forms["myForm"]["name2"]; 
    var psn = document.forms["myForm"]["psn2"]; 
    var twitch = document.forms["myForm"]["twitch2"]; 
    var email = document.forms["myForm"]["email2"]; 



    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (psn.value == "") { 
        window.alert("Please enter your PSN/Gamertag"); 
        psn.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 



    if (twitch.value == "") { 
        window.alert("Please enter twitch account."); 
        twitch.focus(); 
        return false; 
    } 



    return true; 
} 