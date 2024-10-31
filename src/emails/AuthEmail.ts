import { transporter } from "../config/nodemailer"

interface IEmail {
    email: string,
    name: string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async ( user : IEmail ) => {
        const info = await transporter.sendMail({
            from: 'Uptask <admin@uptask.com>',
            to: user.email,
            subject: 'Uptask - confirmar cuenta',
            text: 'Uptask - confirmar cuenta',
            html: `
                <p>Hola: ${user.name}, has creado tu cuenta en UpTask, confirma tu cuenta</p>
                <p>Visita el siguiente enlace</p>
                <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirma tu cuenta</a>
                <p>E ingresa el código: <b>${user.token}</b></p>
                <p>Este token expira en 10 minutos</p>
            `
        })
        console.log('Mensaje enviado', info.messageId)
    }

    static sendPasswordResetToken = async ( user : IEmail ) => {
        const info = await transporter.sendMail({
            from: 'Uptask <admin@uptask.com>',
            to: user.email,
            subject: 'Uptask - Restablece tu password',
            text: 'Uptask - Restablece tu password',
            html: `
                <p>Hola: ${user.name}, has solicitado restablecer tu password.</p>
                <a href="${process.env.FRONTEND_URL}/auth/new-password">Restablecer password</a>
                <p>E ingresa el código: <b>${user.token}</b></p>
                <p>Este token expira en 10 minutos</p>
            `
        })
        console.log('Mensaje enviado', info.messageId)
    }
}