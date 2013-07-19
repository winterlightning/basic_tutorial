#sync_string = "eyJHRHJpdmUiOnsia2V5IjoiNDI0MjQzMjQ2MjU0LW42YjJ2OGo0ajA5NzIza3RpZjQxbG4yNDduNzVwbnRzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic2NvcGUiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlIiwiYXBwX25hbWUiOiJhbGV4YXBwIn0sIkRyb3Bib3giOnsia2V5IjoicTV5eDMwZ3I4bWN2cTRmIiwic2VjcmV0IjoicXk2NHFwaHI3MGx3dWk1IiwiYXBwX25hbWUiOiJhbGV4YXBwIn19"
#Nimbus.Auth.setup(sync_string)

sync_object = 
  "GDrive":
    "key": "424243246254-n6b2v8j4j09723ktif41ln247n75pnts.apps.googleusercontent.com"
    "scope": "https://www.googleapis.com/auth/drive"
    "app_name": "alexapp"
  "Dropbox":
    "key": "q5yx30gr8mcvq4f"
    "secret": "qy64qphr70lwui5"
    "app_name": "alexapp"

Nimbus.Auth.setup(sync_object)