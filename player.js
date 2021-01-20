$(document).ready(function(){
    $('head').append('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />');

    function wrapperDivSet(){
        const outerDiv1 = $('<div>').attr('class','sttip');
        const outerDiv2 = $('<div>').attr('class','tooltip in');
        const outerDiv3 = $('<div>').attr('class','tooltip-arrow');
        const outerDiv4 = $('<div>').attr('class','tooltip-arrow second-arrow');
        const outerDiv5 = $('<div>').attr('class','popover-inner');
        outerDiv1.append(outerDiv2.append(outerDiv3.append(outerDiv4.append(outerDiv5))));
        return { inner: outerDiv5, outer: outerDiv1};
    }

    $.ajax({
        url: 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&amp;refresh=true&amp;env=dev&amp;type=startPanel&amp;vars%5Btype%5D=startPanel&amp;sid=none&amp;_=1582203987867',
        dataType: "jsonp", // cors
        success: function (guide, textStatus, jqXHR) {  // success callback
            guide.data.structure.steps.forEach(function (step, index) {
                const targetElement = $(step.action.selector);

                if (targetElement && step.id && step.action.contents) {
                    const { inner , outer } = wrapperDivSet();
                    inner.append(step.action.contents['#content']);
                    outer.attr('id',step.id);
                    outer.css({display : 'none'});
                    outer.insertAfter(targetElement);
                    targetElement.hover(function () {
                        console.log('hovering');
                        $(`#${step.id}`).css({
                            display: 'block',
                        });
                    }, function () {
                        $(`#${step.id}`).css({
                            display: 'none'
                        });
                    });
                }
            });
        }
    });
});