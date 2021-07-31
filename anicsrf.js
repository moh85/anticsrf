/**** antiCSRF v1.1 by Mohammad Atwi ****/
function antiCSRF(data, option = {target: 'form'}) {
    function addInputs(target) {
        $.each(data, function(name, val) {
            $('[name="' + name + '"]', target).remove();
            $('<input/>').attr('type', 'hidden').attr('name', name).attr('value', val).appendTo(target);
        });
    }
    $.ajaxSetup({
    headers: data
    });
    addInputs(option.target);
    $(document).on('submit', option.target, function() {
        addInputs(this);
        return true;
    });
}
