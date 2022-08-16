let jar = CodeJar(document.querySelector("#editor"), Prism.highlightElement);
let code = localStorage.getItem("code");
$("#editor").text(code);
$("#load").click(function() {
    let code = localStorage.getItem("code");
    $("#editor").text(code);
    alert("done");
});
$("#save").click(function() {
    let code = $("#editor").text();
    localStorage.setItem("code", code);
    alert("done");
});
$("#run").click(function() {
    let code = $("#editor").text();
    code = "let error = '';\n try {\n" + code + "\n} catch (err) { error = err.toString(); }\n error;"
    let res = eval(code);
    if (res == "") {
        res = "ok";
        $("#app").css("visibility", "visible");
        alert(res);
    } else {
        $("#app").css("visibility", "hidden");
        alert(res);
    }
});
$("#stop").click(function() {
    $("#app").css("visibility", "hidden");
    alert("done");
});
