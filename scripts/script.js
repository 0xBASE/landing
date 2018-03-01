$('#join-community').submit(function(e) {
  e.preventDefault();

  $.ajax({
    type: "GET",
    url: "https://0xbase.us17.list-manage.com/subscribe/post-json?u=0a96690fa626677a72de0139e&amp;id=e91a754e09&c=?",
    data: $('#join-community').serialize(),
    dataType: 'jsonp',
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      if (data.result === 'success') {
        $('#join-community').addClass("sent");
      } else {
        $('#join-community').addClass("error");
        $('.join-error').html(data.msg);

        setTimeout(function(){
          $('#join-community').removeClass("error");
        }, 2000);
      }
    }
  });
});