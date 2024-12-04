const script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = "text/javascript";
script.onload = function () {
    $(document).ready(function () {
        $('.imgenerate').each(function (index, element) {
            let width = $(element).attr('data-width')
            if (width == undefined || width == 0) {
                width = $(element).width()
                if (width == undefined || width == 0) {
                    width = $(element).parent().width() ?? 400
                }
            }
            let height =  $(element).attr('data-height')
            if (height == undefined || height == 0) {
                height = $(element).height()
                if (height == undefined || height == 0) {
                    height = $(element).parent().height() ?? 400
                }
            }
            let bg = $(element).attr('data-bg') ?? '1e3a8a'
            let text_color = $(element).attr('data-text-color') ?? 'ffffff'
            let font_size = $(element).attr('data-font-size') ?? 24
            let angle = $(element).attr('data-angle') ?? 0
            let text = $(element).attr('data-text')
            if (text === undefined) {
                text = 'www.imgenerate.com'
            }else if (text === 'size' || text === 'Size') {
                text = `${width}X${height}`
            }
            element.src = `https://imgenerate.com/generate?width=${width}&height=${height}&bg=${bg}&text_color=${text_color}&font_size=${font_size}&angle=${angle}&text=${text}`
        });
    });
};
document.head.appendChild(script);

