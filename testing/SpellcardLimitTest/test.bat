@echo off
setlocal EnableDelayedExpansion
set "CATK=00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
set "Separator= \\ "
set "CATKCount=128"
set "NumberLines=0"
set "Newlines=0"
set /a "CATKCount-=1"
set /a "CATKBound=CATKCount-1"
if %CATKCount% EQU 0 (
	if %NumberLines% NEQ 0 (
		<NUL set /p=0^|%CATK%>CATK.txt
	) else (
		<NUL set /p=%CATK%>CATK.txt
	)
) else (
	if %NumberLines% NEQ 0 (
		<NUL set /p=0^|%CATK%%Separator%>CATK.txt
	) else (
		<NUL set /p=%CATK%%Separator%>CATK.txt
	)
	for /l %%g in (1,1,%CATKBound%) do (
		if %Newlines% NEQ 0 echo:>>CATK.txt
		if %NumberLines% NEQ 0 (
			<NUL set /p=%%g^|%CATK%%Separator%>>CATK.txt
		) else (
			<NUL set /p=%CATK%%Separator%>>CATK.txt
		)
	)
	if %Newlines% NEQ 0 echo:>>CATK.txt
	if %NumberLines% NEQ 0 (
		<NUL set /p=%CATKCount%^|%CATK%>>CATK.txt
	) else (
		<NUL set /p=%CATK%>>CATK.txt
	)
)
exit /b