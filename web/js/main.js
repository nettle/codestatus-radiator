/*jslint browser:true */
/*jslint vars:true */
/*jslint plusplus:true */
/*jshint browser:true */
/*jshint node:true */
/*global $ */
"use strict";

// global namespace
window.App = window.App || {
    initialize: function (options) {
        console.log("app.initialize()");
        this.options = options;
    },
    onLoad: function () {
        console.log("app.onLoad()");
        this.addDirectory();
    },
    addDirectory: function () {
        console.log("app.addDirectory()");
        var table = $("<table>").addClass("table");
        var thead = $("<thead>").addClass("thead-dark");
        var tr = $("<tr>");
        tr.append($("<th>").text("Aaaaa"));
        tr.append($("<th>").text("Bbbbb"));
        tr.append($("<th>").text("Ccccc"));
        thead.append(tr);
        table.append(thead);
        var i;
        for (i = 0; i < 10; i++) {
            tr = $("<tr>");
            tr.append($("<td>").text("Aaaaa"));
            tr.append($("<td>").text("Bbbbb"));
            tr.append($("<td>").text("Ccccc"));
            table.append(tr);
        }
        $("body").append(table);
    },
};

(function () {
    // Init app
    window.App.initialize({});
    window.onload = function () {
        console.log("window.onload()");
        window.App.onLoad({});
    };
}());
