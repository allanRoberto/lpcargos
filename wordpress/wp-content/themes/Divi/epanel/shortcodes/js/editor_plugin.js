(function(){tinymce.create("tinymce.plugins.etquicktags",{init:function(e,t){e.addButton("et_learn_more",{title:et_quicktags_strings.learn_more,image:t+"/../images/icon-toggle.gif",onclick:function(){CustomButtonClick("learn_more")}});e.addButton("et_box",{title:et_quicktags_strings.box,image:t+"/../images/icon-boxes.gif",onclick:function(){CustomButtonClick("box")}});e.addButton("et_button",{title:et_quicktags_strings.button,image:t+"/../images/icon-buttons.gif",onclick:function(){CustomButtonClick("button")}});e.addButton("et_tabs",{title:et_quicktags_strings.tabs,image:t+"/../images/icon-tabs.gif",onclick:function(){CustomButtonClick("tabs")}});e.addButton("et_author",{title:et_quicktags_strings.author,image:t+"/../images/icon-author.gif",onclick:function(){CustomButtonClick("author")}})},createControl:function(e,t){return null},getInfo:function(){return{longname:"Elegant Themes "+et_quicktags_strings.shortcodes,author:"Elegant Themes",authorurl:"http://www.elegantthemes.com/",infourl:"http://www.elegantthemes.com/",version:"1.0"}}});tinymce.PluginManager.add("et_quicktags",tinymce.plugins.etquicktags)})()