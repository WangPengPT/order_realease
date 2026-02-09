
set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\..\task-app-creator
set DST_PATH=%script_dir%\dist

if exist "%DST_PATH%" (
  rmdir /s /q "%DST_PATH%"
)

cd %SRC_PATH%
call npm install
call npm run build
xcopy .\dist\* %DST_PATH%\ /E /Y /I

cd %DST_PATH%

