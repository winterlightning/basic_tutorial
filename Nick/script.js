// Generated by CoffeeScript 1.6.3
(function() {
  var sync_object;

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

  window.prime = function(number) {
    var x, y, z, _results;
    x = number;
    y = x - 1;
    z = y - 1;
    _results = [];
    while (z > 0) {
      if (y % z !== 0) {
        _results.push(z = z - 1);
      } else if (z !== 1) {
        y = y - 1;
        _results.push(z = y - 1);
      } else if (x % y === 0) {
        console.log(y);
        break;
      } else {
        y = y - 1;
        _results.push(z = y - 1);
      }
    }
    return _results;
  };

  window.times = function(a, b) {
    if (a == null) {
      a = 1;
    }
    if (b == null) {
      b = 2;
    }
    return a * b;
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

  window.fib = function(number) {
    var sum, x, y, z;
    x = 1;
    y = 1;
    z = 0;
    sum = 0;
    while (x < number) {
      z = x;
      x = x + y;
      y = z;
      if (x % 2 === 0) {
        sum = sum + x;
      }
      console.log(x);
    }
    console.log(sum);
    return 2;
  };

  sync_object = {
    "GDrive": {
      "key": "424243246254-n6b2v8j4j09723ktif41ln247n75pnts.apps.googleusercontent.com",
      "scope": "https://www.googleapis.com/auth/drive",
      "app_name": "diaryapp"
    },
    "Dropbox": {
      "key": "q5yx30gr8mcvq4f",
      "secret": "qy64qphr70lwui5",
      "app_name": "diaryapp"
    }
  };

  Nimbus.Auth.setup(sync_object);

  window.appready = function() {
    $("#login").hide();
    return render_todo();
  };

  window.render_todo = function() {
    var todostring, x, _i, _len, _ref;
    $(".list").html("");
    _ref = Todo.all();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      x = _ref[_i];
      if (x.done === true) {
        todostring = "<li>" + x.description + '<a class="button-negative" style="right: 100px" id="' + x.id + '"> Delete </a> <div class="toggle active" id="' + x.id + '"><div class="toggle-handle"></div> </div>' + "</li>";
      } else {
        todostring = "<li>" + x.description + '<a class="button-negative" style="right: 100px" id="' + x.id + '"> Delete </a> <div class="toggle" id="' + x.id + '"><div class="toggle-handle"></div> </div>' + "</li>";
      }
      $(".list").append(todostring);
    }
    window.clickhandler();
    return window.deletehandler();
  };

  window.clickhandler = function() {
    return $(".toggle").click(function() {
      var x;
      x = Todo.find(this.id);
      if (x.done === true) {
        x.done = false;
      } else {
        x.done = true;
      }
      x.save();
      return $(this).toggleClass("active");
    });
  };

  window.deletehandler = function() {
    return $(".button-negative").click(function() {
      var x;
      console.log(this.id);
      x = Todo.find(this.id);
      x.destroy();
      return render_todo();
    });
  };

  window.addhandler = function() {
    var des;
    des = $("#todoinput").val();
    console.log(des);
    createTodo(des, false);
    return render_todo();
  };

  window.Todo = Nimbus.Model.setup("Todo", ["done", "description"]);

  window.createTodo = function(description, done) {
    return Todo.create({
      "description": description,
      "done": done
    });
  };

  Nimbus.Auth.set_app_ready(appready);

}).call(this);
