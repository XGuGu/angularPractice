import CDN

google cdn
MS CDN
....


jQuery constructor's parameters, mainly are CSS selectors
$("*")
$("#lastname")
$(".intro")
$("h1,div,p")
$("p:last")
$("tr:even")
$("p:first-child")
$('div:not(:contains('" + search + "'))')
.......


$('<input class="form-control" type="hidden" name="foo"
value="bar" />')
//equal to
$('<input/>', {
  'class': 'form-control', //class is key word
  type: 'hidden',
  name: 'foo',
  value: 'bar'
})
// or
$('<input/>')
.addClass('form-control')
.attr('type', 'hidden')
.attr('name', 'foo')
.val('bar')


// length property
if ( $('li').length === 0 ) {
  console.log('no');
  }else{
  console.log('yes');
}

// each method
<li>Hello</li>
<li>World</li>
$('li').each(function( index, element) {
$(element).prepend( '<em>' + index + ': </em>' );
});
<li><em>0: </em>Hello</li>
<li><em>1: </em>World</li>

//difference between onload and $(document).ready()

// remove method，detach method，
remove() method will permanently remove the
selected element.(remove element,data and evemt)

detach() method is similar to remove() method, but
can roll back the selected element later one. (roll back
element, event and data)

$('p').remove()
$('p').detach()

// How to remove an element in jQuery?

$(selector).remove() method will permanently remove
the selected element

$(selector).detach() method is similar to remove()
method, but can roll back the selected element later
one.

$(selector).empty() method will remove all the child
elements of the selected element.

// one method

One method specifies a one-time callback function,
that is, the function can only run once. This is useful
for submitting forms.

$("#button").one( "click", function() { return false; } );

If you have special needs, you can set the click 2 or 3
times and then cancellation the monitoring, this is
possible.

// $.proxy

The $ .proxy method is similar to the
ECMAScript 5 bind method, which binds
the context of the function (the this object)
and parameters, and returns a new function.

The main use of jQuery.proxy () is to bind
the context object to the callback function.

var o = {
  type: "object",
  test: function(event) {
    console.log(this.type);
  }
};

$("#button")
.on("click", o.test) // no output
.on("click", $.proxy(o.test, o)) // object

// $.ajax
on the JQuery objects also defines the Ajax
method ($ .ajax ()), used to handle Ajax
operations. When the method is called, the
browser issues an HTTP request to the server.

$.ajax(url[, options])
The url, referring to the server URL.
options is an object parameter, setting the
specific parameters of the Ajax request.

$.ajax({
  async: true, //这是异步操作
  url: '/url/to/json', //必须写
  type: 'GET', //传递方式
  data : { id : 123 }, //前段向后端的数据是啥
  dataType: 'json', //数据格式
  timeout: 30000, //ajax call 30000 ms 没有结果就结束
  success: successCallback, //请求成功，执行callback
  error: errorCallback, //请求失败，执行。。。。
  complete: completeCallback, //请求完成， 执行。。。。
  statusCode: {
    404: handler404,
    500: handler500
    } //根据状态返回。。。。
})

function successCallback(json) {
  $('<h1/>').text(json.title).appendTo('body');
}

function errorCallback(xhr, status){
  console.log('Error！');
}

function completeCallback(xhr, status){
  console.log('Ajax request finished.');
}

$.ajax('/url/to/json',{
  type: 'GET',
  dataType: 'json',
  success: successCallback,
  error: errorCallback
}) //简便写法

// JSONP
As a browser with "domain restrictions", ajax method
can only be issued HTTP request to the current page.
However, you can issue a GET request to a different
domain name with JSONP (JSON with Padding).

The ajax method can issue JSONP requests by
specifying dataType as JSONP in the object
parameters.

$.ajax({
  url: '/data/search.jsonp',
  data: {q: 'a'},
  dataType: 'jsonp',
  success: function(resp) {
    $('#target').html('Results: ' + resp.results.length);
    }
});)

The common way of JSONP is added the callback
function name after the request URL. The ajax
specifies if the request URL ending like"callback=?"
then automatically using JSONP.Therefore, the above
code can also be written as follows.

$.getJSON('/data/search.jsonp?q=a&callback=?',
  function(resp) {
    $('#target').html('Results: ' + resp.results.length);
  }
);
