function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctest = document.createTextNode("Choose an image.");
    description.appendChild(desctest);
    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);
    var gallery = document.getElementById("imagegallery");
    // gallery.parentNode.insertBefore(placeholder, gallery);
    // gallery.parentNode.insertBefore(description, gallery);
    insertAfter(placeholder, gallery);
    insertAfter(description, gallery);
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var desrciption = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element.childNodes.length)
    console.log(body_element.nodeType)
}

addLoadEvent(prepareGallery)
addLoadEvent(preparePlaceholder)
addLoadEvent(countBodyChildren)