jQuery(document).ready(function() {

    //Loading current tab using cookie
    if(getCookie("currtab") != "" && getCookie("currtab") != null) {
        jQuery('.nav-tab').removeClass('nav-tab-active');
        var currtab = getCookie("currtab");
        jQuery('#' + currtab).addClass('nav-tab-active');
        var currsection = currtab.replace('nav-tab-','settings-');
        jQuery('.settings-section').hide();
        jQuery('#' + currsection).show();
    }

    //Animating tab
    jQuery('.nav-tab').click(function() {
        var clickedId = jQuery(this).attr("id");
        var currentId = jQuery('.nav-tab-active').attr("id");
        if(clickedId != currentId) {
            var clickedSectionId = clickedId.replace('nav-tab-','settings-');
            var currentSectionId = jQuery('.current-section').attr("id");
            jQuery('.settings-section').hide();
            jQuery('#' + currentSectionId).removeClass('current-section');
            jQuery('#' + clickedSectionId).slideDown(500);
            jQuery('#' + clickedSectionId).addClass('current-section');
            jQuery('#' + currentId).removeClass('nav-tab-active');
            jQuery('#' + clickedId).addClass('nav-tab-active');
        }
    });

    //Upload image script
    var formfieldID;
    jQuery('.image_upload').click(function() {
	var btnId = jQuery(this).attr("id");
	formfieldID = btnId.replace("_upload","");
	tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
	return false;
    });
    window.send_to_editor = function(html) {
	imgurl = jQuery('img',html).attr('src');
	jQuery('#' + formfieldID).val(imgurl);
        tb_remove();
    }

    //Font size increment/decrement
    jQuery('#font_size_incr_btn').click(function() {
	var fontsize = parseFloat(jQuery('#font_size').val());
	fontsize = fontsize + 1.5;
	jQuery('#font_size').val(fontsize);
    });
    jQuery('#font_size_decr_btn').click(function() {
	var fontsize = parseFloat(jQuery('#font_size').val());
	fontsize = fontsize - 1.5;
	if(fontsize < 0) fontsize = 83.3;
	jQuery('#font_size').val(fontsize);
    });

    //Setting cookie to remember last tab
    jQuery('#settings-submit').click(function() {
        var currentTabId = jQuery('.nav-tab-active').attr("id");
        setCookie("currtab",currentTabId,3);
    });
});

function confirmAction() {
    var confirmation = confirm("Do you want to delete your settings and restore to default settings ?");
    return confirmation;
}

function setCookie(name,value,secs) {
    if (secs) {
	var date = new Date();
	date.setTime(date.getTime()+(secs*1000));
	var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}