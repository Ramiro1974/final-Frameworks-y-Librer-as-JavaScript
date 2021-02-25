$(function() {
    $("img").draggable(
        function() {
            let comienzo, desplazo, parada;
            var $start_counter = $("#event-start"),
                $drag_counter = $("#event-drag"),
                $stop_counter = $("#event-stop"),
                entrada = "";

            $("#draggable").draggable({
                start: function() {
                    entrada = "comienzo";
                    updateCounterStatus($start_counter, entrada);
                },
                drag: function() {
                    entrada = "drag";
                    updateCounterStatus($drag_counter, entrada);
                },
                stop: function() {
                    entrada = "fin";
                    updateCounterStatus($stop_counter, entrada);
                }
            });

            function updateCounterStatus($event_counter, new_count) {
                // first update the status visually...
                if (!$event_counter.hasClass("ui-state-hover")) {
                    $event_counter.addClass("ui-state-hover")
                        .siblings().removeClass("ui-state-hover");
                }
                // ...then update the numbers
                //$( "span.count", $event_counter ).text( new_count );

            }
        });
    $("img").draggable();
});