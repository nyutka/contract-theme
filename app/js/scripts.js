"use strict";

var $ = require("jquery");
var _ = require("underscore");
var moment = require("moment");
var JSContext = require("./common/jscontext.js");
var navigation = require("../includes/theme-modules/standard-navigation/standard-navigation.js");
//var viewHelpers = require("../../common/js/view-helpers.js");
//var footerHtml = require("../templates/footer.html");
var baseLink = JSContext.getBaseLink();
var themeData = JSContext.getThemeData();

var getPostsData = function() {
    return {
        posts: JSContext.getPosts(),
        baseLink: baseLink,
        truncated: false
    };
};

var getEventsData = function() {
    var events = JSContext.getEvents();
    return {
        events: events,
        baseLink: baseLink,
        truncated: false
    };
};

var addFormattedPhone = function(object, property) {
    if (object[property]) {
        object[property + "_link_formatted"] = utils.stripNonDigits(object[property]);
    }
};

var getProfileData = function() {
    var profileData = JSContext.getProfile();
    if (profileData.phones) {
        addFormattedPhone(profileData.phones, "phone");
        addFormattedPhone(profileData.phones, "toll_free");
        addFormattedPhone(profileData.phones, "cell");
        addFormattedPhone(profileData.phones, "fax");
    }
    if (profileData.offices) {
        _.each(profileData.offices, function(office) {
            addFormattedPhone(office, "phone");
            addFormattedPhone(office, "toll_free");
            addFormattedPhone(office, "cell");
            addFormattedPhone(office, "fax");
        });
    }
    if (profileData.suboffices) {
        _.each(profileData.team_members, function(member) {
            addFormattedPhone(member, "team_member_phone");
            addFormattedPhone(member, "team_member_fax");
        });
    }

    return profileData;
};

var getHeaderData = function() {
    return {
        "baseLink": baseLink,
        "logo": themeData.logo_header,
        "links": {
            "corporateLink": themeData.corp_header_link_1,
            "careersLink": themeData.corp_header_link_2,
            "customerLoginLink": themeData.customer_login_link
        }
    };
};

var getFooterLinks = function() {
    return {
        "quoteLink": themeData.corp_footer_link_1,
        "claimLink": themeData.corp_footer_link_2,
        "loginLink": themeData.corp_footer_link_3,
        "talentLink": themeData.corp_footer_link_4
    };
};

var getSocialIcons = function() {
    return {
        "facebookIcon": themeData.facebook_icon,
        "googlePlusIcon": themeData.google_plus_icon,
        "linkedInIcon": themeData.linkedin_icon,
        "twitterIcon": themeData.twitter_icon
    };
};

var _getCurrentPageName = function() {
    var fileName = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if(fileName === JSContext.getSlug() || fileName === "") {
        fileName = "index";
    }
    return fileName;
};


var initializeTemplates = function() {
    // Templates and modules init goes here.
};

var setAccentColor = function(){
    var accentColor = themeData.header_background;
    $(".bg-color-accent").css("background-color", accentColor);
    $(".color-accent").css("color", accentColor);
}


$(document).ready(function() {
    //initializeTemplates();
    //setAccentColor();
});


