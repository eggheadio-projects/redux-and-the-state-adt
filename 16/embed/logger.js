const config = {
  globalName: "logger",
  root: window,
  selector: "body",
  fontSize: "20px",
  colors: {
    background: "transparent",
    foreground: "gray",
    label: "blue",
    nil: "green",
    number: "violet",
    string: "red",
    key: "blue",
    boolean: "green"
  }
};

const realLog = console.log;
const consoleEl = document.querySelector(config.selector);
const globalName = config.globalName || "logger";

function addStyle(elm, style) {
  Object.assign(elm.style, style);
  return elm;
}

function isArray(x) {
  return {}.toString.call(x) === "[object Array]";
}

function isObject(x) {
  return {}.toString.call(x) === "[object Object]";
}

function isInspectable(value) {
  return value && typeof value.inspect === "function";
}

function createNode(value) {
  const node = document.createElement("span");

  if (value.tagName) {
    node.appendChild(value);
  } else {
    node.innerText = value;
  }

  return node;
}

function buildObject(obj) {
  const el = document.createElement("span");
  el.appendChild(createNode("{ "));

  Object.keys(obj).reduce(function(node, key, indx, arr) {
    node.appendChild(
      addStyle(createNode(key + ": "), {
        color: config.colors.key
      })
    );
    node.appendChild(buildValue(obj[key]));

    if (indx < arr.length - 1) {
      node.appendChild(createNode(", "));
    }
    return node;
  }, el);

  el.appendChild(createNode(" }"));

  return el;
}

function buildArray(xs) {
  const el = document.createElement("span");
  el.appendChild(createNode("[ "));

  xs.reduce(function(node, x, indx) {
    node.appendChild(buildValue(x));

    if (indx < xs.length - 1) {
      node.appendChild(createNode(", "));
    }
    return node;
  }, el);

  el.appendChild(createNode(" ]"));

  return el;
}

function buildValue(value) {
  if (isInspectable(value)) {
    return buildValue(value.inspect());
  } else if (typeof value === "number") {
    return addStyle(createNode(value), {
      color: config.colors.number
    });
  } else if (typeof value === "string") {
    return addStyle(createNode("'" + value + "'"), {
      color: config.colors.string
    });
  } else if (typeof value === "boolean") {
    return addStyle(createNode(value), {
      color: config.colors.boolean
    });
  } else if (typeof value === "function") {
    return addStyle(createNode("Function"));
  } else if (isArray(value)) {
    return createNode(buildArray(value));
  } else if (isObject(value)) {
    return createNode(buildObject(value));
  } else if (value === undefined) {
    return addStyle(createNode("undefined"), {
      fontStyle: "italic",
      color: config.colors.boolean
    });
  } else if (value === null) {
    return addStyle(createNode("null"), {
      fontStyle: "italic",
      color: config.colors.boolean
    });
  }
}

function entry(label, value) {
  const el = document.createElement("dl");
  const labelEl = document.createElement("dt");
  const valueEl = document.createElement("dd");

  addStyle(el, {
    padding: "0",
    margin: "0",
    marginBottom: "0.6em",
    fontSize: config.fontSize
  });

  addStyle(labelEl, {
    color: config.colors.label,
    fontWeight: 600,
    fontSize: "1.1em",
    margin: "0"
  });

  addStyle(valueEl, {
    padding: "0 0.75em",
    margin: "0"
  });

  labelEl.innerText = label + ":";
  valueEl.appendChild(buildValue(value));

  el.appendChild(labelEl);
  el.appendChild(valueEl);

  return el;
}

function single(value) {
  return addStyle(createNode(buildValue(value)), {
    display: "block",
    margin: "0",
    marginBottom: "0.6em",
    fontSize: config.fontSize
  });
}

addStyle(consoleEl, {
  background: config.colors.background,
  color: config.colors.foreground,
  fontFamily: "monospace"
});

export default function logger() {
  consoleEl.appendChild(
    arguments.length > 1
      ? entry(arguments[0], arguments[1])
      : single(arguments[0])
  );

  realLog.apply(console, arguments);
}
