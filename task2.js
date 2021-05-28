fetch("https://thatcopy.pw/catapi/rest/").then(response => {
    let c = response.json();
    return c;
}).then(result => {
    foo(result);
}).catch(error => {
    console.log(error);
});


function createthtd(eleName, value = "", className = "") {

    var td = document.createElement(eleName)
    td.setAttribute('class', className);
    td.innerHTML = value;
    return td;
}

function createlink(eleName, value = "", className = "") {
    var a = document.createElement(eleName);
    a.setAttribute("href", value)
    a.innerHTML = value;
    return a;
}
var container = document.createElement('div');
container.classList.add('table-responsive-sm','table-responsive-md','table-responsive-lg','table-responsive-xl');

var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'thead');

var tr = document.createElement('tr');
var th1 = createthtd('th', 'id');
var th2 = createthtd('th', 'url');
var th3 = createthtd('th', 'image')
tr.append(th1, th2, th3);
thead.append(tr);

function foo(e) {
    table.innerHTML = "";
    console.log(e.id);
    var tbody = document.createElement('tbody')
    var tbodytr1 = document.createElement('tr');
    var td1 = createthtd('th', e.id,'id')
    var td2 = createthtd('th','','url')
    var tl3 = createlink('a', e.url);
    var td3 = createthtd('th')
    var object=document.createElement('object');
    object.setAttribute('class','Responsive');
    object.data=e.url;
    td2.append(tl3)
    td3.append(object)
    tbodytr1.append(td1, td2,td3)
    tbody.append(tbodytr1)
    table.append(thead, tbody);
    container.append(table);
    document.body.append(container);
}