// Generated by CoffeeScript 1.5.0
(function() {

  window.list = [1, 2, 3, 4, 5];

  window.Obj = {
    name: "Nick",
    number: "2022622722",
    height: "72"
  };

  window.sumarray = function(number_array) {
    var total, x, _i, _len;
    total = 0;
    for (_i = 0, _len = number_array.length; _i < _len; _i++) {
      x = number_array[_i];
      total = total + x;
    }
    return console.log(total);
  };

  window.sum1 = function(number) {
    var number_array, total, x, _i, _j, _len, _ref, _results, _results1;
    number_array = (function() {
      _results = [];
      for (var _i = 1, _ref = number - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
    total = 0;
    _results1 = [];
    for (_j = 0, _len = number_array.length; _j < _len; _j++) {
      x = number_array[_j];
      if (x % 3 === 0 || x % 5 === 0) {
        total = total + x;
        _results1.push(console.log(total));
      } else {
        _results1.push(void 0);
      }
    }
    return _results1;
  };

  window.clickhandler = function() {
    return $(".toggle").click(function() {
      console.log("test");
      return $(this).hide();
    });
  };

}).call(this);
