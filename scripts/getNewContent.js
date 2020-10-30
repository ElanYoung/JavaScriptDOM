function getNewContent() {
    var request = getHttpObject();
    if (request) {
        request.open("GET", "example.txt", true);
        // 事件处理函数，会在服务器给XMLRequest对象送回响应的时候被触发执行
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                // requestText用于保存本文字符串形式的数据
                // responseXML用于保存Content-Type头部中指定为"text/xml"的数据，其实是一个DocumentFragmentdUI小
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert('Sorry，your browser doesn\'t support XMLHttpRequest');
    }
    alert("Function Done")
}

addLoadEvent(getNewContent)

// readyState属性的值:
// 0表示未初始化
// 1表示正在加载
// 2表示加载完毕
// 3表示正在交互
// 4表示完成