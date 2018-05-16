var menuOpen = false;
function toggleMenu(){
    if(menuOpen){
        $(".links").removeClass("open");
    } else {
        $(".links").addClass("open");
    }
    menuOpen = !menuOpen
}


var cases = new Siema({
    selector: '.cases-content',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});

function casesNext(){
    cases.next();
}

function casesPrevious(){
    cases.prev();
}


var network = new Siema({
    selector: '.network-texts',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {
        $(".network-0").removeClass("active");
        $(".network-1").removeClass("active");
        $(".network-2").removeClass("active");
        $(".network-3").removeClass("active");

        $(".network-" + network.currentSlide).addClass("active");
    },
});


function setNetwork(state){
    network.goTo(state);
}



var snack = new Snack();
$('.join-community').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "https://0xbase.us17.list-manage.com/subscribe/post-json?u=0a96690fa626677a72de0139e&amp;id=e91a754e09&c=?",
      data: $(e.target).serialize(),
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        if (data.result === 'success') {
            snack.show('Welcome to the family :)', 5000);
            $(e.target).trigger("reset");
        } else {
            snack.show(data.msg, 5000);
            $(e.target).trigger("reset");
        }
      }
    });
  });