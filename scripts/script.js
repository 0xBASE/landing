$('#join-community').submit(function(e) {
  e.preventDefault();

  $.ajax({
    url: 'https://0xbase.us17.list-manage.com/subscribe/post?u=0a96690fa626677a72de0139e&id=e91a754e09&c=?',
    type: 'GET',
    data: $('#join-community').serialize(),
    dataType: 'jsonp',
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      if (data['result'] != "success") {
        console.error(data['msg']);
      } else {
        $(this).addClass("sent");
      }
    }
  });
});