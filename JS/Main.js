


function sumit_user() {
    var y = document.getElementById('user_pass').value;
    var x = document.getElementById('user_tkhoan').value;
    if (x == '' || y == '') {
        alert('Vui lòng nhập đủ thông tin');
        

    }
    if (x == '0915217024' && y == '123') {
        alert('Đăng nhập thành công');
        window.location.href = 'Index.html';

    }
    else if (((x != '0915217024') && (x != '')) || ((y != '123') && (y != ''))) {
        alert('Tài khoản hoặc mật khẩu không đúng');
        reset_form();
    }

}

function cshk_function() {
    document.getElementById('cskh').innerHTML = alert('SĐT: 0915217024\nEmail: trancongnhat2608@gmail.com  ');
}

function reset_form() {
    document.getElementById("user_form").reset();
}

function contact_sumit() {
    var x = document.getElementById('number_phone').value;
    var y = document.getElementById('email').value;
    var z = document.getElementById('ndung').value;
    if (x == '' || y == '' || z == '') {
        alert('Vui lòng nhập đủ thông tin');
    }

    else {
        document.getElementById('sumit').innerText = alert('Admin:\nChúng tôi đã tiếp nhận ý kiến của bạn và phản hồi sớm nhất. Xin cảm ơn!');

    }

}

function scrollFunction() {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

