var cellPhone = {
    samsung: {
        models: {
            s2: {
                sim: 'single',
                proccesor: 'dual core',
                camera: '8 mgp',
                display: '4.3 inch'
            },
            s3: {
                sim: 'single',
                proccesor: 'dual core',
                camera: '8 mgp',
                display: '4.3 inch'
            },
            s4: {
                sim: 'single',
                proccesor: 'dual core',
                camera: '8 mgp',
                display: '4.8 inch'
            }
        }
    },
    iPhone: {
        models: {
            ip6: {
                sim: 'single',
                proccesor: '11.0',
                camera: '13 mgp',
                display: '4.8 inch'
            }
        }
    }
}

for (var i in cellPhone) {
    for (var j in cellPhone[i]) {
        for (var k in cellPhone[i][j]) {
            // console.log(k)
            // console.log(cellPhone[i][j][k])
            document.getElementById("data").innerHTML +=
                "<tr>" + "<td>" + k + "</td>"
                + "<td>" + cellPhone[i][j][k].proccesor + "</td>"
                + "<td>" + cellPhone[i][j][k].display + "</td>"
                + "<td>" + cellPhone[i][j][k].camera + "</td>"
                + "<td>" + cellPhone[i][j][k].sim + "</td>"
                + "</tr>"
        }
    }
}

var table = document.getElementById("data");
var flag = false;
function searchData() {
    var data = document.getElementById("search").value;
    if (data !== "" && data !== undefined && data !== " ") {
        for (var i in cellPhone) {
            for (var j in cellPhone[i]) {
                for (var k in cellPhone[i][j]) {
                    if (data.toLowerCase() === k.toLowerCase()) {
                        table.innerHTML = "";
                        table.innerHTML +=
                            "<tr>" + "<td>" + k + "</td>"
                            + "<td>" + cellPhone[i][j][k].proccesor + "</td>"
                            + "<td>" + cellPhone[i][j][k].display + "</td>"
                            + "<td>" + cellPhone[i][j][k].camera + "</td>"
                            + "<td>" + cellPhone[i][j][k].sim + "</td>"
                            + "</tr>";
                            flag = true
                    }
                }
            }
        }

    } else {
        console.log("Write somthing")
    }
    if(flag === false){
        console.log("data not found")
    }
}