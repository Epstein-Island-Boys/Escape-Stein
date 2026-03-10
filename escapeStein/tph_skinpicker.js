var _gmSkinURL = "";

function gmOpenSkinPicker() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,.jpg,.jpeg,.webp,.png";
    input.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            _gmSkinURL = ev.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function gmGetSkinURL() {
    var u = _gmSkinURL;
    _gmSkinURL = "";
    return u;
}

function gmSaveSkinURL(uid, url) {
    try { localStorage.setItem("gmSkinURL_" + uid, url); } catch(e) {}
}

function gmLoadSkinURL(uid) {
    try { return localStorage.getItem("gmSkinURL_" + uid) || ""; } catch(e) { return ""; }
}