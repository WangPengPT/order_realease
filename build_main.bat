rem package, update used git
rem server will auto update.

rm main -rf
 
set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\orderDemo
set DST_PATH=%script_dir%\main

cd %SRC_PATH%
xcopy .\mgserver %DST_PATH% /E /Y /I

cd managerprime
call npm install
call npm run build
ren .\dist\index.html manager.html
xcopy .\dist %DST_PATH%\public /E /Y /I
cd ..

cd mg-manager
call npm install
call npm run build
xcopy .\dist %DST_PATH%\public /E /Y /I
cd ..

rem cd map
rem call npm install
rem call npm run build
rem ren .\dist\index.html map.html
rem xcopy .\dist %DST_PATH%\public /E /Y /I
rem cd ..

cd %DST_PATH%

