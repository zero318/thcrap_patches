@echo off
setlocal EnableDelayedExpansion
REM for /f "tokens=*" %%g in (.\_FinalPatches.txt) do (
	REM echo ".\testing\%%g" ".\patches\%%g"
	REM xcopy ".\testing\%%g" ".\patches\%%g" /e /d /i /y /q>nul 2>&1
REM )
pushd .\patches
"C:\Users\zero318\AppData\Local\Programs\Python\Python37\python.exe" "..\..\..\bin\scripts\repo_update.py"
popd
REM pushd .\testing
REM "C:\Users\zero318\AppData\Local\Programs\Python\Python37\python.exe" "..\..\..\bin\scripts\repo_update.py"
REM popd
git add -A
git commit -m "yay commit script"
git push
exit /b