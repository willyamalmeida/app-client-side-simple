app={views:{departament:{}}},app.views.departament.index=function(t){if(!t)throw"Element undefined";this.$el=t,this.db=new Store("departaments"),this.init()},app.views.departament.index.prototype={init:function(){this.$elGrid=this.$el.parentElement.querySelector("[name='grid']"),this.loadGrid(),this.initEvents()},loadGrid:function(){var t=this.$elGrid.parentElement.querySelector("tbody"),e=this.db.get().reduce(function(t,e){return t=t.concat("<tr><td>".concat(e.id).concat("</td><td>").concat(e.description).concat("</td></tr>"))},"");t.innerHTML=e},initEvents:function(){this.$elGrid.querySelectorAll("tbody tr").forEach(function(t){t.addEventListener("click",function(t){var e=t.target.parentElement.querySelector("td").innerText;location="edit.html?id=".concat(e)})})}};