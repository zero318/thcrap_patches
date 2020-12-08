REM @echo off
setlocal EnableDelayedExpansion
for /f "tokens=*" %%g in (.\_FinalPatches.txt) do (
	xcopy ".\testing\%%g" ".\patches\%%g" /e /d /i /y /q>nul 2>&1
)
pushd .\patches
py -3 "..\..\..\bin\scripts\repo_update.py"
popd
pushd .\testing
py -3 "..\..\..\bin\scripts\repo_update.py"
popd
git add -A
git commit -m "yay commit script"
git push
pause
exit /b