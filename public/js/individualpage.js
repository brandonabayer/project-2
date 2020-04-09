$(document).ready(function() {
    // Event listener for creating individual
    $(document).on("submit", "#individual-form", function() {
        event.preventDefault();

        var newIndividual = {
            fname: $("#first-name-input").val().trim(),
            lname: $("#last-name-input").val().trim(),
            state: $("#state-input").val().trim()
        };

        $.post("/api/individuals", newIndividual);
    });
});