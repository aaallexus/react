$(document).ready(function(){
    $('#out').append(JSON.stringify(window.location));
    console.log(window);
    $.ajax({
        type: "POST",
        url: 'http://dev.naviwfm.com/dev/rest/login',
        data: {
            'username':'admin',
            'password':'admin900'
        },
        dataType:'text',
        success:function(param){
//               console.log(param);
            $('#out').append(param);
        },
        error:function(param,status){
            console.log(param);
            console.log(param.fail());
             $('#out').append(JSON.stringify(param));
        }
    });
});
