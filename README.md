# DOCUMENTACIÓN

## Configuración del proyecto

`npm install`


### Compila y levantar la aplicación en el navegador
`npm run serve`


### Compila y minifica para producción
`npm run build`

## Tecnología
Para el desarrollo de la aplicación, se utilizó las siguientes tecnologías:
- JavaScript
- VUE 2
- Vuetify UI
- Firebase

## Vistas y rutas de la aplicación

### LoginView
- Es la vista que aparece al entrar a la aplicación
- El usuario debe autenticarse con su correo electrónico (gmail), para poder navegar en la aplicación
- Si el usuario ya se autenticó, no se podrá acceder a esta vista, a menos que el usuario cierre sesión
- Ruta: '/'

### HomeView
- Es la vista que aparece luego de que el usuario se autentica
- Esta vista está conformada por 5 componentes:
  - HeaderSection
  - CoursesSection
  - GradesCard
  - NewsCard
  - CatsCard
- Ruta: '/home'

### ChatView
- Es la vista que aparece cuando hacemos click al botón "Enviar mensaje"
- Esta vista está conformada por 3 componentes:
  - HeaderSection
  - MyConversation
  - MentorsSection
- Ruta: '/chats/:mentorUID'
