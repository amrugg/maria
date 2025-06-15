function cde(type, properties, children)
{
    /// Dad's function
    var el;
    var className;
    var id;
    
    if (type) {
        type = type.replace(/[.#][^.#]+/g, function (match)
        {
            if (match[0] === ".") {
                className = match.substr(1);
            } else {
                id = match.substr(1);
            }
            return "";
        });
    }
    if (type) {
        el = document.createElement(type);
        
        if (className) {
            el.classList.add.apply(el.classList, className.split(" "));
        }
        if (id) {
            el.id = id;
        }
    } else {
        el = document.createDocumentFragment();
    }
    
    /// Make properties optional.
    if (!children && Array.isArray(properties)) {
        children = properties;
        properties = undefined;
    }
    
    if (properties && !Array.isArray(properties)) {
        Object.keys(properties).forEach(function (prop)
        {
            var propName = prop;
            
            /// If the property starts with "on", it's an event.
            if (prop.startsWith("on")) {
                el.addEventListener(prop.substring(2), properties[prop]);
            } else {
                if (prop === "class") {
                    propName = "className";
                } else if (prop === "t") {
                    propName = "textContent";
                }
                
                try {
                    if (propName === "style") {
                        Object.keys(properties[prop]).forEach(function (key)
                        {
                            el.style.setProperty(key, properties[prop][key]);
                        });
                    } else if (propName === "className" && typeof properties[prop] === "string") {
                        el.classList.add.apply(el.classList, properties[prop].split(" "));
                    } else if (typeof el[propName] === "undefined") {
                        el.setAttribute(propName, properties[prop]);
                    } else {
                        el[propName] = properties[prop];
                    }
                } catch (e) {
                    /// Sometimes Safari would through errors.
                    console.error(e, prop);
                }
            }
        });
    }
    
    if (Array.isArray(children)) {
        children.forEach(function (child)
        {
            if (child) {
                if (typeof child === "object") {
                    el.appendChild(child);
                } else {
                    el.appendChild(document.createTextNode(child));
                }
            }
        });
    }
    
    return el;
} 
function makeEvents()
{
    var listeners = {};
    var events = {
        on: function (name, func)
        {
            if (!listeners[name]) {
                listeners[name] = [];
            }
            listeners[name].push({
                func: func,
                once: false,
                removed: false,
            });
        },
        once: function (name, func)
        {
            events.on(name, func);
            listeners[name][listeners[name].length - 1].once = true;
        },
        off: function (name, func)
        {
            var i;
            if (listeners[name]) {
                for (i = listeners[name].length - 1; i >= 0; --i) {
                    if (listeners[name][i].func === func) {
                        listeners[name][i].removed = true;
                        listeners[name].splice(i, 1);
                        return;
                    }
                }
            }
        },
        emit: function (name, data)
        {
            var i;
            var func;
            var listenersArr;
            var len;
            var wasRemoved;
            if (listeners[name]) {
                ///NOTE: We make a copy of the array because events may be added to it and we don't want to create an infinite loop.
                listenersArr = listeners[name].slice(0);
                len = listenersArr.length;
                /*
                event = {
                    data: data,
                    stopPropagation: function ()
                    {
                        stopped = true;
                    }
                };
                */
                
                for (i = 0; i < len; ++i) {
                    func = listenersArr[i].func;
                    wasRemoved = listenersArr[i].removed;
                    if (listenersArr[i].once) {
                        ///NOTE: We can't simply modify the array because it was copied.
                        events.off(name, func);
                    }
                    /// Because we made a copy of the array, if an event was removed, it will still be in this array. So we need to check if it was removed.
                    if (!wasRemoved) {
                        func(data);
                    }
                    /*
                    if (stopped) {
                        break;
                    }
                    */
                }
            }
        },
    };
    return events;
};