import PDFDocument from "pdfkit";
import nodemailer from "nodemailer";

export default async function handler ( req, res )
{
    if ( req.method !== "POST" )
    {
        return res.status( 405 ).json( { message: "Method not allowed" } );
    }

    const { email, cart, total } = req.body;

    try
    {
        // 🔹 Create PDF
        const doc = new PDFDocument();
        let buffers = [];

        doc.on( "data", buffers.push.bind( buffers ) );
        doc.on( "end", async () =>
        {
            const pdfData = Buffer.concat( buffers );

            // 🔹 Email transporter
            const transporter = nodemailer.createTransport( {
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            } );

            // 🔹 Send mail
            await transporter.sendMail( {
                from: `"ShopEasy" <${ process.env.EMAIL_USER }>`,
                to: email,
                subject: "Your ShopEasy Invoice",
                text: "Thank you for your order. Please find the invoice attached.",
                attachments: [
                    {
                        filename: "invoice.pdf",
                        content: pdfData,
                    },
                ],
            } );

            res.status( 200 ).json( { success: true } );
        } );

        // 🔹 PDF Content
        doc.fontSize( 22 ).text( "ShopEasy Invoice", { align: "center" } );
        doc.moveDown();

        cart.forEach( ( item ) =>
        {
            doc.fontSize( 14 ).text(
                `${ item.title }  | Qty: ${ item.qty }  | ₹${ item.price * item.qty }`
            );
        } );

        doc.moveDown();
        doc.fontSize( 18 ).text( `Total: ₹${ total }`, { align: "right" } );

        doc.end();
    } catch ( err )
    {
        console.error( err );
        res.status( 500 ).json( { success: false } );
    }
}
