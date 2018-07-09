function addItem() {
    var count = document.getElementById("inputDiv").childElementCount;
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input is-success');
    input.setAttribute('name', 'library' + (count + 1));
    input.setAttribute('placeholder', 'Text input');
    var parent = document.getElementById('inputDiv');
    parent.appendChild(input);
};
var url = window.location.href;
var result = (url.split('?'))[1];
var libraries = (result.split('&'));
libraries.forEach(element => {
    var library = element.split('=')[1];
    var centralUrl = 'https://api.npms.io/v2/package/';
    var endUrl = library;
    var finalUrl = centralUrl + endUrl;
    $(function () {
        $.getJSON(finalUrl, function (obj) {
            $('#library1').html(obj.score.final);
            var parseJson = JSON.parse(obj.score.final);
            var displayScore = (parseInt(parseJson * 100.0));
            var ul = document.getElementById("dynamic-list");
            var li = document.createElement("li");
            li.setAttribute('id', displayScore);
            li.setAttribute('class', 'has-text-success')
            li.appendChild(document.createTextNode(library + ': ' + displayScore));
            ul.appendChild(li);
        });
    });
});