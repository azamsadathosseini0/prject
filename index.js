$('.drag').draggable({
    appendTo: 'body',
    helper: 'clone'
});
$('#dropzone').droppable({
    activeClass: 'active',
    hoverClass: 'hover',
    accept: ":not(.ui-sortable-helper)", // Reject clones generated by sortable
    drop: function (e, ui) {
        if(ui.draggable.text()=="متنی با پاسخ بلند")
        {
            var $el = $('<div class="drop-item form-group"><label><p  onclick="editLabel(this)">' + ui.draggable.text() + '</p><input type="text" value="" name="" class="edit" id="edit" style="display: none;"></label><textarea style="text-align: right"   class="form-control"/></div>');
            $el.append($('<button type="button" class="remove"><span class="glyphicon glyphicon-trash"></span></button>').click(function () { $(this).parent().detach(); }));
            $(this).append($el);
        }
        else if(ui.draggable.text()=="ایمیل")
        {
            var $el = $('<div class="drop-item form-group"><label><p onclick="editLabel(this)">' + ui.draggable.text() + '</p><input type="text" value="" name="" class="edit" id="edit" style="display: none;"></label><input class="form-control" type="email" /></div>');
            $el.append($('<button type="button" class="remove"><span class="glyphicon glyphicon-trash"></span></button>').click(function () { $(this).parent().detach(); }));
            $(this).append($el);
        }
        else if(ui.draggable.text()=="چندگزینه ای")
        {
            var $el = $('<div class="drop-item form-group"><label><p onclick="editLabel(this)">' + ui.draggable.text() + '</p><input type="text" value="" name="" class="edit" id="edit" style="display: none;"></label><div class="radio"><label><input type="radio" name="optradio" checked>Option 1</label></div></div>');
            $el.append($('<button type="button" class="remove"><span class="glyphicon glyphicon-trash"></span></button>').click(function () { $(this).parent().detach(); }));
            $(this).append($el);
        }
        else
        {
            var $el = $('<div class="drop-item form-group"><label><p onclick="editLabel(this)">' + ui.draggable.text() + '</p><input type="text" value="" name="" class="edit" id="edit" style="display: none;"></label><input class="form-control" type="text" /></div>');
            $el.append($('<button type="button" class="remove"><span class="glyphicon glyphicon-trash"></span></button>').click(function () { $(this).parent().detach(); }));
            $(this).append($el);
        }
    }
}).sortable({
    items: '.drop-item',
    sort: function() {
        $( this ).removeClass( "active" );
    }
});
function editLabel(elm) {
    var jelm = $(elm);
    var htmlElm = jelm[0];
    $(htmlElm).hide();
    $(htmlElm).siblings('.edit').show();
    $(htmlElm).siblings('.edit').focus()
    var initial_text = $(htmlElm).text();
    $(htmlElm).siblings('.edit').focusout(function () {
        var editedInput = $(htmlElm).siblings('.edit').val();
        $(htmlElm).siblings('.edit').hide();
        if(editedInput != ''){
            $(htmlElm).show().text(editedInput);
        }
        else{
            $(htmlElm).show().text(initial_text);
        } });}