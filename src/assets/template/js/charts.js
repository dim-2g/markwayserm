initCharts = function() {
        var chart_radius = 64;
        var window_width = $(window).width();
        if (window_width < 720) {
            chart_radius = 53;
        }
        if (window_width > 1140 && window_width < 1440) {
            chart_radius = 49;
        }

        var myCircle = Circles.create({
            id:                  'circles-1',
            radius:              chart_radius,
            value:               66,
            maxValue:            100,
            width:               12,
            text:                function(value){return '>' + value + '<span class="circles-percent">%</span>';},
            colors:              ['#4fadfc', '#30c9fd'],
            duration:            400,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           false
        });

        var myCircle2 = Circles.create({
            id:                  'circles-2',
            radius:              chart_radius,
            value:               58,
            maxValue:            100,
            width:               12,
            text:                function(value){return '>' + value + '<span class="circles-percent">%</span>';},
            colors:              ['#4fadfc', '#30c9fd'],
            duration:            400,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           false
        });

        var myCircle3 = Circles.create({
            id:                  'circles-3',
            radius:              chart_radius,
            value:               60,
            maxValue:            100,
            width:               12,
            text:                function(value){return '>' + value + '<span class="circles-percent">%</span>';},
            colors:              ['#4fadfc', '#30c9fd'],
            duration:            400,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           false
        });

        var myCircle4 = Circles.create({
            id:                  'circles-4',
            radius:              chart_radius,
            value:               80,
            maxValue:            100,
            width:               12,
            text:                function(value){return '>' + value + '<span class="circles-percent">%</span>';},
            colors:              ['#4fadfc', '#30c9fd'],
            duration:            400,
            wrpClass:            'circles-wrp',
            textClass:           'circles-text',
            valueStrokeClass:    'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper:        true,
            styleText:           false
        });
    };

    initCharts();

    var process;
    $(window).resize(function(){
        clearTimeout(process);
        process = setTimeout(resizeFunction, 100);
    });

    function resizeFunction(){
        var width = $(window).width();
        initCharts();
    }