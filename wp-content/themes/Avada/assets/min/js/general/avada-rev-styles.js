function avadaAddRevStyles(){Number(avadaRevVars.avada_rev_styles)&&jQuery(".rev_slider_wrapper").each(function(){var a,b,c=jQuery(this);1<=c.length&&-1===c.attr("class").indexOf("tp-shadow")&&(jQuery('<div class="shadow-left">').appendTo(this),jQuery('<div class="shadow-right">').appendTo(this),c.addClass("avada-skin-rev")),jQuery(this).find(".tp-leftarrow").hasClass("preview1")||jQuery(this).find(".tp-leftarrow").hasClass("preview2")||jQuery(this).find(".tp-leftarrow").hasClass("preview3")||jQuery(this).find(".tp-leftarrow").hasClass("preview4")||(jQuery(this).addClass("avada-skin-rev-nav"),c.find(".tp-leftarrow").height()>c.height()/4&&c.find(".tp-leftarrow").height()<c.height()&&(a=c.attr("id"),b=c.height()/4,c.children(".avada-rev-arrows").length?(c.children(".avada-rev-arrows").empty(),c.children(".avada-rev-arrows").append('<style type="text/css">#'+a+" .tp-leftarrow, #"+a+" .tp-rightarrow{margin-top:-"+b/2+"px !important;width:"+b+"px !important;height:"+b+"px !important;}#"+a+" .tp-leftarrow:before, #"+a+" .tp-rightarrow:before{line-height:"+b+"px;font-size:"+b/2+"px;}</style>")):c.prepend('<div class="avada-rev-arrows"><style type="text/css">#'+a+" .tp-leftarrow, #"+a+" .tp-rightarrow{margin-top:-"+b/2+"px !important;width:"+b+"px !important;height:"+b+"px !important;}#"+a+" .tp-leftarrow:before, #"+a+" .tp-rightarrow:before{line-height:"+b+"px;font-size:"+b/2+"px;}</style></div>")),jQuery(window).on("resize",function(){c.find(".tp-leftarrow").height()>c.height()/4&&c.find(".tp-leftarrow").height()<c.height()?(a=c.attr("id"),b=c.height()/4,c.children(".avada-rev-arrows").length?(c.children(".avada-rev-arrows").empty(),c.children(".avada-rev-arrows").append('<style type="text/css">#'+a+" .tp-leftarrow, #"+a+" .tp-rightarrow{margin-top:-"+b/2+"px !important;width:"+b+"px !important;height:"+b+"px !important;}#"+a+" .tp-leftarrow:before, #"+a+" .tp-rightarrow:before{line-height:"+b+"px;font-size:"+b/2+"px;}</style>")):c.prepend('<div class="avada-rev-arrows"><style type="text/css">#'+a+" .tp-leftarrow, #"+a+" .tp-rightarrow{margin-top:-"+b/2+"px !important;width:"+b+"px !important;height:"+b+"px !important;}#"+a+" .tp-leftarrow:before, #"+a+" .tp-rightarrow:before{line-height:"+b+"px;font-size:"+b/2+"px;}</style></div>")):c.children(".avada-rev-arrows").remove()}))})}function avadaRemoveRevStyles(){Number(avadaRevVars.avada_rev_styles)||(jQuery(".shadow-left").remove(),jQuery(".shadow-right").remove(),jQuery(".avada-rev-arrows").remove(),jQuery(".avada-skin-rev").removeClass("avada-skin-rev"),jQuery(".avada-skin-rev-nav").removeClass("avada-skin-rev"))}jQuery(window).on("load",function(){avadaAddRevStyles(),jQuery(window).on("DestoryRevStyle",avadaRemoveRevStyles),jQuery(window).on("AddRevStyles",avadaAddRevStyles)});