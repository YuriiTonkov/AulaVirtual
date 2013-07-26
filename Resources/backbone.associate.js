(function(root, factory) {
    "undefined" != typeof window || Ti ? factory(root._, root.Backbone) : factory(require("underscore"), require("backbone"));
})(this, function(_, Backbone) {
    var _filterAssociates = function(attributes) {
        var key, association, self = this, current = self.attributes, associations = self._associations, omit = [];
        for (key in associations) {
            association = associations[key];
            if (current[key] instanceof association.type) {
                if (attributes[key] instanceof association.type) {
                    current[key] = attributes[key];
                    omit.push(key);
                } else if (_.has(attributes, key)) if (current[key] instanceof Backbone.Model) {
                    current[key].set(attributes[key]);
                    omit.push(key);
                } else if (current[key] instanceof Backbone.Collection) {
                    current[key].reset(attributes[key]);
                    omit.push(key);
                }
            } else attributes[key] instanceof association.type || (attributes[key] = new association.type(attributes[key]));
        }
        return _.omit(attributes, omit);
    }, _wrapMethod = function(wrapper, key) {
        var self = this, original = self[key], wrapped = _.wrap(original, wrapper);
        wrapped.unwrap = function() {
            self[key] = original;
        };
        self[key] = wrapped;
    }, _extensions = {
        set: function(original, key, val, options) {
            var self = this, attributes = {};
            _.isObject(key) ? _.extend(attributes, key) : attributes[key] = val;
            !_.isObject(val) || "undefined" != typeof options && null !== options || (options = val);
            return original.call(self, _filterAssociates.call(self, attributes), options);
        },
        toJSON: function(original, options) {
            var key, self = this, associations = self._associations, attributes = original.call(self, options);
            for (key in associations) attributes[key] instanceof associations[key]["type"] && (attributes[key] = attributes[key].toJSON());
            return attributes;
        }
    }, _initialize = function(original, attrs, options) {
        var self = this, extensions = _.clone(_extensions);
        for (key in self._associations) extensions[key] = _.partial(self.get, key);
        _.each(extensions, _wrapMethod, self);
        _filterAssociates.call(self, self.attributes);
        return original.call(self, attrs, options);
    };
    Backbone.associate = function(klass, associations) {
        var proto = klass.prototype;
        if (!proto._associations) {
            _wrapMethod.call(proto, _initialize, "initialize");
            proto._associations = {};
        }
        _.extend(proto._associations, associations);
    };
    Backbone.dissociate = function(klass) {
        var proto = klass.prototype;
        proto.initialize.unwrap();
        proto._associations = null;
    };
});