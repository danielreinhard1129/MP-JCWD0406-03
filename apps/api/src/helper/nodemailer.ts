import nodemailer from 'nodemailer';
import path from 'path'
import hbs from 'nodemailer'

let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'your_email@gmail.com',
            pass: 'password_for_your_email_address'
        }
    }
);


const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

transporter.use('compile', hbs(handlebarOptions))