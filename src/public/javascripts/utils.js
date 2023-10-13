function trimInput() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var trimmedValue = input.value.trim();
        if (trimmedValue === '') {
            input.value = '';
        }
    }
}