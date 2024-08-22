import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    return NextResponse.json({ msg: "Hello from backend" })
}

export async function POST(req: Request) {
    console.log("Here")
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ success: false, message: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        // auth: {
        //     user: process.env.EMAIL_USER,
        //     pass: process.env.EMAIL_PASS,
        // },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO,
            subject: `New message from ${name}`,
            text: `${message} \n The Email provided is ${email}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error sending email.' });
    }

}
