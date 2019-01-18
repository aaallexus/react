
function sendQueryDiv(server,query,id_out)
{
                    if(id_out!='')
                                var obj = document.getElementById(id_out);
                    else
                                var obj='';
                    var req;
                    if (window.XMLHttpRequest)  req = new XMLHttpRequest();
                    else if(window.ActiveXObject) {
                                        try {   
                                                                    req = new ActiveXObject('Msxml2.XMLHTTP');
                                                            } catch (e){alert(1)}
                                        try {   
                                                                    req = new ActiveXObject('Microsoft.XMLHTTP');
                                                            } catch (e){alert(2)}
                                        }

                    if (req) {
                                                req.onreadystatechange = function() {
                                                                            if (req.readyState == 4 && req.status == 200 && id_out!='')
                                                                                { obj.innerHTML = req.responseText;
                                                                                    console.log(req);
                                                                                $('#out').append(JSON.stringify(req));

                                                                                }
                                                                                if (req.readyState == 4)
                                                                                {
                                                                                $('#out').append("responceText="+req.responseText+"<br>responseURL="+req.responseURL+"<br>status="+req.status+"");
                                                                                }
                                                                                console.log(req);
                                                                            };
                                                req.open('POST', server, true);
                                                req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                                                req.send(query);
                                                 $('#out').append(JSON.stringify(req));
                                                }
                            else alert('Ваш браузер не поддерживает AJAX');
}


$(document).ready(function(){
//    $('#out').append(JSON.stringify(window.location));
    console.log(window);
//    sendQueryDiv('https://falko.com.ua','username=admin7&password=admin900','out');
    $.ajax({
        type: "POST",
        url: 'http://dev.naviwfm.com/dev/rest/login',
        data: {
            'username':'admin',
            'password':'admin900'
        },
        dataType:'jsonp',
        timeout:5000,
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
