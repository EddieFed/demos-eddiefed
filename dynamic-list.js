function getDemos() {
    fetch("https://api.github.com/repos/eddiefed/demos-eddiefed/contents/")
        .then(r => r.json())
        .then(function(d) {
            console.log(d);
            d.forEach((o) => {
                if (o["type"] === "dir") {
                    console.log(o["name"], "is a dir");
                    addListElement(o["name"]);
                }
                else {
                    console.log(o["name"], "is not a dir")
                }
            });

        });
}

function addListElement(dir) {
    let li = document.createElement("LI");
    let a = document.createElement("A");
    a.innerText = dir;
    a.href = ("./" + dir + "/");
    li.appendChild(a);

    document.getElementById("list").appendChild(li)
}

function getMD() {
    fetch("https://api.github.com/repos/eddiefed/demos-eddiefed/readme")
        .then(r => r.json())
        .then(function(d) {
            console.log(d);
            console.log(atob(d["content"]));
        });
}

fetch("https://api.github.com/markdown/raw", {
    method: "post",
    body: "Hello!"
})
.then(r => console.log(r));
