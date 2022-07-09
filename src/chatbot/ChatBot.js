import BotMessage from '@/chatbot/BotMessage'

class ChatBot {
    constructor(user, mentor) {
        this.user = user;
        this.mentor = mentor;
        this.userMessages = [];
        this.step = 1;
    }

    reply(userMessage) {
        this.userMessages.push(userMessage);

        if (this.userMessages.length === 1) {
            const message = `¡Hola ${this.user}! Para ayudarte, indícame sobre qué tema tienes dudas, marcando una de las siguientes opciones:`;
        
            const alternatives = [
                '1. Agendar con tutor',
                '2. Entrega de proyecto',
                '3. Certificado',
                '4. Otros'
            ];
            
            this.step += 1;

            return new BotMessage(message, alternatives);
        }

        if (this.step === 2 && userMessage === '1') {
            const message2 = `Deseas agendar con el tutor ${this.mentor}:`;
            const alternatives2 = [
                '1. Sí',
                `2. No`
            ];

            this.step += 1;

            return new BotMessage(message2, alternatives2);
        }
        
        if (this.step === 3 && userMessage === '1') {
            const message3 = `La disponibilidad del tutor ${this.mentor} son los siguientes:`;
            const alternatives3 = [
                '1. Lunes 5:00 pm - 5:15 pm',
                '2. Lunes 5:15 pm - 5:30pm',
                '3. Miércoles 6:15pm - 6:30pm',
                '4. Viernes 6:30pm - 6:45pm'
            ];

            this.step += 1;

            return new BotMessage(message3, alternatives3);
        }

        if (this.step === 4 && ['1', '2', '3', '4'].includes(userMessage)) {
            const message4 = `Gracias por tu interés! Tu cita ha sido agendada.`;
            
            this.step += 1;

            return new BotMessage(message4, []);
        }

        return null;
    }
}
 
export default ChatBot;