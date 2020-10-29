// var height = "about 5'10\" tall";
// alert(height);

// var beatles = Array(4)
// beatles[0] = "John";
// beatles[1] = "Paul";
// beatles[2] = "George";
// beatles[3] = "Ringo";

// var beatles = Array("John", "Paul", "George", "Ringo");

// var years = [1940, 1941, 1942];

// 关联数组 不推荐
// var lennon = Array();
// lennon["name"] = "John";
// lennon["year"] = 1940;
// lennon["living"] = false;

// var lennon = Object();
// lennon.name = "John";
// lennon.year = 1940;
// lennon.living = false;

// var lennon = { name: "John", year: 1940, living: false };

// var beatles = {};
// beatles.vocalist = lennon;

// var num = 7.561;
// var num = Math.round(num);
// alert(num)

// 违背了"行为应该与表现分离"的原则
function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

window.onload = function () {
    var testdiv = document.getElementById("testdiv1");
    testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>"
}

// 元素节点的nodeType属性值是1
// 属性节点的nodeType属性值是2
// 文本节点的nodeType属性值是3
window.onload = function () {
    // 创建一个p元素节点
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv2");
    // 把这个p元素节点追加到test.html文档中的那个p元素节点上
    testdiv.appendChild(para);
    // 创建一个文本节点
    var txt = document.createTextNode("Hello World");
    // 把这个文本节点追加到刚才创建的那个p元素节点上
    para.appendChild(txt);
    var info = "nodeName：";
    info += para.nodeName;
    info += " nodeType：";
    info += para.nodeType;
    console.log(info)
}

window.onload = function () {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode(" content.");
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv3");
    testdiv.appendChild(para);
}