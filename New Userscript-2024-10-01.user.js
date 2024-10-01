// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-10-01
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
document.body.innerHTML = "";
        const info = {
           "url" : window.location,
        "category" : "Website 2.0 Control --> (" + window.location + ")",
        "policy" : "Policy=default",
        "user" : "Tech",
    }
//URLhttps://ckf03.csisd.org/cgi-bin/blockpage/blockpage.cgi?URL=csisd.schoology.org&CAT=Malicious+(Global)&CATNO=19&ACC=auto_bypass&WHY=Policy%3Ddefault&MOD=2&APP=tiktok&ISO=App+Permanently+Blocked&IPA=10.48.0.18&RAW=http%3A%2F%2Fcsisd.schoology.org&AUTH0=%2CMalicious+(Global)&PGE=https%3A%2F%2Fckf03.csisd.org%2Fcgi-bin%2Fblockpage%2Fblockpage.cgi&STR=null%2Cnull%2Cnull%2Cnull%2Cnull&SRV=null&AUTH1=%2Ccsisd.schoology.org%2CMalicious+(Global)
let url = "https://ckf03.csisd.org/cgi-bin/blockpage/blockpage.cgi?URL=" + info.url + "&CAT="+ info.category +"&CATNO=19&ACC=" + info.user + "&WHY=Policy%3Ddefault&MOD=2&APP=tiktok&ISO=App+Permanently+Blocked&IPA=10.48.0.18&RAW="+info.url+"&AUTH0=%2CMalicious+(Global)&PGE=https%3A%2F%2Fckf03.csisd.org%2Fcgi-bin%2Fblockpage%2Fblockpage.cgi&STR=null%2Cnull%2Cnull%2Cnull%2Cnull&SRV=null&AUTH1=%2Ccsisd.schoology.org%2CMalicious+(Global)";
window.location = url;
})();