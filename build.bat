@echo off
CLS

ECHO BIENVENIDO AL ASISTENTE DE CREACION DE APP ALMACEN
ECHO.

:Environment
ECHO.
ECHO Elige el entorno de publicacion:
ECHO 1.Development
ECHO 2.Preproducion
ECHO 3.Produccion
CHOICE /C 123 /M "Selecciona uno:"
IF %ERRORLEVEL% == 1 GOTO Development
IF %ERRORLEVEL% == 2 GOTO Preproducion
IF %ERRORLEVEL% == 3 GOTO Produccion

:Development
SET env=development
SET app=com.cofanes.fidely_dev
SET appName=FIDELY BETA
SET version=1
ECHO Development
GOTO Main
:Preproducion
SET env=preproduction
SET app=com.cofanes.fidely_pre
SET appName=FIDELY BETA
SET version=1
ECHO Preproducion
GOTO Main
:Produccion
SET env=production
SET app=com.cofanes.fidely
SET appName=FIDELY
SET version=1
ECHO Produccion
GOTO Main

:Main
ECHO.
ECHO BORRANDO CARPETA ANDROID...
ECHO.
IF EXIST .\android RD /q /s .\android >nul
ECHO CARPETA ANDROID BORRADA CORRECTAMENTE

ECHO.
ECHO HACIENDO BUILD DEL PROYECTO IONIC...
ECHO.
CALL ionic build -c=%env%
ECHO BUILD FINALIZADA

ECHO.
ECHO CONFIGURANDO CAPACITOR...
ECHO.
powershell -Command "(gc .\build-resource\capacitor.config.ts) -replace 'APP_PACKAGE', '%app%' | Out-File -encoding ASCII .\capacitor.config.ts"
powershell -Command "(gc .\capacitor.config.ts) -replace 'APP_NAME', '%appName%' | Out-File -encoding ASCII .\capacitor.config.ts"
ECHO CAPACITOR CONFIGURADO CORRECTAMENTE

ECHO.
ECHO SINCRONIZANDO PROYECTO...
ECHO.
CALL npx cap sync
ECHO SINCRONIZACION COMPLETADA


ECHO.
ECHO CREANDO CARPETA ANDROID...
ECHO.
CALL npx cap add android
ECHO CARPETA ANDROID CREADA CORRECTAMENTE


ECHO.
ECHO SOBREESCRIBIENDO MANIFEST...
ECHO.
COPY /y .\build-resource\android\manifest\AndroidManifest.xml android\app\src\main\ >nul
ECHO ____________________MANIFEST SOBREESCRITO____________________

ECHO.
ECHO COPIANDO VARIABLES...
ECHO.
COPY /y .\build-resource\android\variables\variables.gradle android\ >nul
ECHO ____________________VARIABLES SOBREESCRITO____________________

ECHO.
ECHO COPIANDO GRADLE APP...
ECHO.
COPY /y .\build-resource\android\gradleApp\build.gradle android\ >nul
ECHO ____________________GRADLE APP SOBREESCRITO____________________

ECHO.
ECHO COPIANDO GRADLE MODULE...
ECHO.
COPY /y .\build-resource\android\gradleModule\build.gradle android\app >nul
ECHO ____________________GRADLE APP SOBREESCRITO____________________

ECHO.
ECHO ACTUALIZANDO PLUGINS NATIVOS Y DEPENDENCIAS PROYECTO...
ECHO.
CALL npx cap update
ECHO ACTUALIZACION COMPLETADA

ECHO.
ECHO COPIANDO GOOGLE SERVICE...
ECHO.
COPY /y .\build-resource\android\GA\%env%\google-services.json android\app\ >nul
ECHO ____________________GOOGLE SERVICE SOBREESCRITO____________________

ECHO.
ECHO COPIANDO STRINGS...
ECHO.
COPY /y .\build-resource\res\values\strings.xml android\app\src\main\res\values\ >nul
ECHO STRINGS SOBREESCRITOS

ECHO.
ECHO COPIANDO RESOURCES...
ECHO.
@REM COPY /y .\build-resource\android\res\xml\ android\app\src\main\res\xml\ >nul
ECHO ____________________RESOURCES SOBREESCRITO____________________

ECHO.
ECHO COPIANDO RAW...
ECHO.
@REM if not exist android\app\src\main\res\raw mkdir android\app\src\main\res\raw
@REM COPY /y .\build-resource\res\raw\ android\app\src\main\res\raw\ >nul
ECHO ____________________RAW SOBREESCRITO____________________


@REM ECHO.
@REM ECHO SOBREESCRIBIENDO RECURSOS GRAFICOS...
@REM ECHO.
@REM CALL npx capacitor-assets generate --android
@REM ECHO ____________________RECURSOS GRAFICOS SOBREESCRITOS CORRECTAMENTE____________________

SET /p versionName="Introduzca el nombre de la versi�n: "
SET /p versionCode=<.\build-resource\android\Versions\code
IF %env% == prod (SET /a "newCode=%versionCode%+1") ELSE (SET newCode=%versionCode%)
ECHO %newCode% > .\build-resource\android\Versions\code
powershell -Command "(gc android\app\build.gradle) -replace 'VERSION_CODE', '%newCode%' | Out-File -encoding ASCII android\app\build.gradle"
powershell -Command "(gc android\app\build.gradle) -replace 'VERSION_NAME', '%versionName%' | Out-File -encoding ASCII android\app\build.gradle"
powershell -Command "(gc android\app\build.gradle) -replace 'APP_PACKAGE', '%app%' | Out-File -encoding ASCII android\app\build.gradle"

ECHO.
ECHO ABRIENDO PROYECTO ANDROID...
ECHO.
CALL npx cap open android
ECHO ____________________PROYECTO ABIERTO CORRECTAMENTE____________________

ECHO SCRIPT FINALIZADO
EXIT /B %ERRORLEVEL%

