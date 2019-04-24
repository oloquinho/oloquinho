Dim oPlayer
Set oPlayer = CreateObject("WMPlayer.OCX")

' Play audio
oPlayer.URL = WScript.Arguments(0)
oPlayer.controls.play
While oPlayer.playState <> 1 ' 1 = Stopped
  WScript.Sleep 100
Wend

' Release the audio file
oPlayer.close
