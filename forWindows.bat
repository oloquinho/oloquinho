:: This is a mix of JScript and batch, because we all love gambiarra. (And is the only way we found to execute sound on windows... :P)

@if (@X)==(@Y) @end /*
	@echo off

	cscript //E:JScript //nologo "%~f0" %*

	exit /b %errorlevel%
@if (@X)==(@Y) @end */

var file=WScript.Arguments.Item(0);
var fso= new ActiveXObject("Scripting.FileSystemObject");

var player = new ActiveXObject("WMPlayer.OCX");
player.URL=fso.GetAbsolutePathName(file);
player.controls.play();

while(player.playState!=1){
	WScript.Sleep(100);
}
player.close();
