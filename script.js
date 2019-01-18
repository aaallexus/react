$(document).ready(function(){
    $('#out').append('');
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
        error:function(param){
//            console.log(param);
             $('#out').append(JSON.stringify(param));
        }
    });
});
