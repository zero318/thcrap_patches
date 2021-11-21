@echo off
setlocal EnableDelayedExpansion
for /f "tokens=*" %%g in (.\_FinalPatches.txt) do (
	REM echo ".\testing\%%g" ".\patches\%%g"
	xcopy ".\testing\%%g" ".\patches\%%g" /e /d /i /y /q>nul 2>&1
)
pushd .\patches
py -3 "..\..\..\bin\scripts\repo_update.py"
popd
REM pushd .\testing
REM py -3 "..\..\..\bin\scripts\repo_update.py"
REM popd
git add -A
git commit -m "yay commit script"
git push
exit /b