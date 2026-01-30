import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

export default async function handler ( req, res )
{
    if ( req.method !== "POST" )
    {
        return res.status( 405 ).json( { message: "Method not allowed" } );
    }

    const { email, cart, total } = req.body;

    if ( !email || !cart || !total )
    {
        return res.status( 400 ).json( { message: "Invalid order data" } );
    }

    try
    {
        /* ---------- CREATE PDF BUFFER ---------- */
        const doc = new PDFDocument( { margin: 50 } );
        const buffers = [];

        doc.on( "data", buffers.push.bind( buffers ) );

        doc.fontSize( 22 ).text( "ShopEasy Invoice", { align: "center" } );
        doc.moveDown();

        cart.forEach( ( item ) =>
        {
            doc
                .fontSize( 14 )
                .text(
                    `${ item.title } | Qty: ${ item.qty } | ₹${ item.price * item.qty }`
                );
        } );

        doc.moveDown();
        doc.fontSize( 18 ).text( `Total: ₹${ total }`, { align: "right" } );

        doc.end();

        const pdfBuffer = await new Promise( ( resolve ) =>
        {
            doc.on( "end", () => resolve( Buffer.concat( buffers ) ) );
        } );

        /* ---------- SEND EMAIL ---------- */
        const transporter = nodemailer.createTransport( {
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        } );

        await transporter.sendMail( {
            from: `"ShopEasy" <${ process.env.EMAIL_USER }>`,
            to: email,
            subject: "Your ShopEasy Invoice (PDF)",
            text: "Thank you for your order. Invoice attached.",
            attachments: [
                {
                    filename: "invoice.pdf",
                    content: pdfBuffer,
                },
            ],
        } );

        return res.status( 200 ).json( { success: true } );
    } catch ( error )
    {
        console.error( "SEND INVOICE ERROR:", error );
        return res.status( 500 ).json( { message: "Email failed" } );
    }
}
