rem package, update used git
rem server will auto update.

rm dist_bbq -rf
 
set "script_dir=%~dp0"
echo %script_dir%

set SRC_PATH=%script_dir%..\orderDemo
set DST_PATH=%script_dir%\dist

cd %SRC_PATH%
xcopy .\server %DST_PATH% /E /Y /I


cd managerPrime
call npm install
call npm run build
xcopy .\dist %DST_PATH%\public /E /Y /I

cd ..
cd client
call npm install
call npm run build
ren .\dist\index.html client.html
xcopy .\dist %DST_PATH%\public /E /Y /I

cd %DST_PATH%

