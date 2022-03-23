function validate() {
  var textarea = $("#exampleFormControlTextarea1");
  var letters = /^[0-9a-zA-Z .!]+$/;
  if (textarea.val() == "") {
    textarea.addClass("is-invalid");
    $("#alert").html("Source cannot be empty string");
  } else if (!letters.test(textarea.val())) {
    textarea.addClass("is-invalid");
    $("#alert").html("Use only alphanumeric characters");
  } else {
    textarea.removeClass("is-invalid");
    textarea.addClass("is-valid");
    $("#alert").html("");
  }
}
