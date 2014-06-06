function Step() {
    function next() {
        counter = pending = 0;
        if (0 === steps.length) {
            if (arguments[0]) throw arguments[0];
            return;
        }
        var fn = steps.shift();
        results = [];
        try {
            lock = true;
            var result = fn.apply(next, arguments);
        } catch (e) {
            next(e);
        }
        counter > 0 && 0 == pending ? next.apply(null, results) : void 0 !== result && next(void 0, result);
        lock = false;
    }
    var pending, counter, results, lock, steps = Array.prototype.slice.call(arguments);
    next.parallel = function() {
        var index = 1 + counter++;
        pending++;
        return function() {
            pending--;
            arguments[0] && (results[0] = arguments[0]);
            results[index] = arguments[1];
            lock || 0 !== pending || next.apply(null, results);
        };
    };
    next.group = function() {
        function check() {
            0 === pending && localCallback(error, result);
        }
        var localCallback = next.parallel();
        var counter = 0;
        var pending = 0;
        var result = [];
        var error = void 0;
        process.nextTick(check);
        return function() {
            var index = counter++;
            pending++;
            return function() {
                pending--;
                arguments[0] && (error = arguments[0]);
                result[index] = arguments[1];
                lock || check();
            };
        };
    };
    next();
}

Step.fn = function() {
    var steps = Array.prototype.slice.call(arguments);
    return function() {
        var args = Array.prototype.slice.call(arguments);
        var toRun = [ function() {
            this.apply(null, args);
        } ].concat(steps);
        "function" == typeof args[args.length - 1] && toRun.push(args.pop());
        Step.apply(null, toRun);
    };
};

"undefined" != typeof module && "exports" in module && (module.exports = Step);