# =========================
Para compilar un .APK con EXPO:
 > eas build -p android --profile preview

Para compilar un .AAB (bundle para subir a la PlayStore) con EXPO:
 > eas build --platform android



# ================================================================
# ================================================================
# INFO IMPORTANTE: ===============================================
> PARA SUBIR LA APP COMPILADA (.AAB) A LA PLAY STORE, 
> ES NECESARIO CAMBIAR EL "version code:" en el archivo "app.json":
>     "android": {
>      	"versionCode": 5, /* cambiar el numero conforme aumente la version*/


Para aumentar el numero de la version del parche de la App (ej: v1.0.3 > v1.0.4)
 > npm version patch

Para aumentar el numero de la version del parche de la App (ej: v1.2.0 > v1.3.0)
 > npm version minor

Para aumentar el numero de la version de la App (ej: v1.2.0 > v2.0.0)
 > npm version major