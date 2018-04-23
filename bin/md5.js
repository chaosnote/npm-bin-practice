#!/usr/bin/env node

var shell = require("shelljs");
var crypto = require('crypto');

var data = process.argv[2] ;
if(data!=undefined&&data.length>0)
{
    shell.exec( "echo " + crypto.createHash('md5').update(data).digest("hex") );
}
else
{
    shell.exec("echo no value !!");
}