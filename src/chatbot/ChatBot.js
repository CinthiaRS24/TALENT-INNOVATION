import BotMessage from '@/chatbot/BotMessage'

/*const WELCOME_MESSAGES = [
    "¡Hola soy Kamy!",
    "Escribe brevemente cuál es tu consulta"
];*/

class ChatBot {
    constructor(user, mentor) {
        this.user = user;
        this.mentor = mentor;
    }

    reply() {
        const message = `¡Hola ${this.user}! Para ayudarte, indícame sobre qué tema tienes dudas, marcando una de las siguientes opciones:`;
        
        const alternatives = [
            '1. Agendar con tutor',
            '2. Entrega de proyecto',
            '3. Certificado',
            '4. Otros'
        ];
        
        return new BotMessage(message, alternatives);
        /*
        const message2 = `Deseas agendar con el tutor ${this.mentor}:`;
        const alternatives2 = [
            '1. Sí',
            `2. No`
        ];

        BotMessage(message2, alternatives2);

        const message3 = `La disponibilidad del tutor ${this.mentor} son los siguientes:`;
        const alternatives3 = [
            '1. Lunes 5:00 pm - 5:15 pm',
            '2. Lunes 5:15 pm - 5:30pm',
            '3. Miércoles 6:15pm - 6:30pm',
            '4. Viernes 6:30pm - 6:45pm'
        ];*/
    }
}
 
export default ChatBot;