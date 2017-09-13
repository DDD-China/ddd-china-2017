function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

var validate_form_fields = function (form_name, field_name) {
    var email_field = $(form_name).find('input[name=' + field_name + ']').val();
    if (isEmail(email_field)) return true;
    show_form_errmessage(form_name, field_name);
    return false;
}

function show_info_message(form_name, message) {
    var info = $(form_name).find('div.info-message').html(message).show();
}

function show_form_errmessage(form_name) {
    show_info_message(form_name, "<p>Sorry, please check your email again.</p>");
}

function show_form_successmessage(form_name) {
    show_info_message(form_name, "<p>Thank you, you have subscribed successfully.</p>");
}

function show_form_wrongmessage(form_name) {
    show_info_message(form_name, "<p>There is something wrong, maybe you can try another email.</p>");
}

$('form.subscription').on('submit', function () {
    event.preventDefault();
    if (validate_form_fields('form.subscription', 'email')) {
        var email_addr = $('form.subscription').find('input[name="email"]').val();
        $.ajax({
            type: "POST",
            url: "https://jinshuju.net/api/v1/forms/61fjEJ",
            contentType: "application/json",
            headers: {
                "Authorization": "Basic " + btoa("jLb8VkGuDoC8wvbuTkdBOQ:Mgvm_A2YgAZuM5RFvknZiA")
            },
            data: JSON.stringify({
                "field_1": email_addr,
                "field_2": "lc",
                "field_3": "tw"
            }),
            success: function () {
                show_form_successmessage('form.subscription');
            },
            error: function () {
                show_form_wrongmessage('form.subscription');
            }
        });
    }
});

$('form.subscription').find('input').click(function () {
    $('form.subscription').find('.info-message').hide();
});