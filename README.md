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

## Vistas y rutas

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
  - ChatsCard
- Ruta: '/home'

### ChatView
- Es la vista que aparece cuando hacemos click al botón "Enviar mensaje"
- Esta vista está conformada por 3 componentes:
  - HeaderSection
  - MyConversation
  - MentorsSection
- Ruta: '/chats/:mentorUID'

## Componentes

### HeaderSection
Es el header de la aplicación y contiene lo siguiente:
- Logo
- Botón que identifica al usuario y que al hacer click podemos cerrar sesión
- Botón de notificaciones

### CoursesSection
Es la sección donde se pueden visualizar los cursos, este componente a su vez contiene 2 subcomponentes:

#### CourseCard
Este subcomponente contiene los cursos disponibles de la aplicación

#### CourseSoonCard
Este subcomponente contiene los cursos que aún no están disponibles, pero que pronto lo estarán

### GradesCard
Este componente representa la tarjeta de notas

### NewsCard
Este componente representa la tarjeta de noticias

### ChatsCard
Este componente contiene un botón que permite poder contactar con un mentor, al darle click, nos lleva a la vista ChatView

### MyConversation
Este componente contiene lo siguiente:
- Botón volver, el cual nos redirige a la vista HomeView
- Tarjeta en la cual aparecerán los mensajes enviados y recibidos
- Espacio en donde se podrá escribir el mensaje que se desee enviar
- Botón de enviar
- Botón de limpiar, el cual se utiliza para borrar toda la conversación
- Este componente, a su vez contiene 2 subcomponentes:

#### WelcomeMessage
El cual contiene el mensaje de bienvenida, iniciao por el chatbot (kami)

#### ConversationMessage
El cual contiene los estilos para los mensajes del usuario y del chatbot

### MentorsSection
Este componente:
- Muestra los mentores que puede seleccionar el usuario para iniciar una conversación
- Muestra cuál es el mentor seleccionado, con información más detallada de éste
- Muestra los mentores que puedes escoger
