import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

export default async function handler ( req, res )
{
    if ( req.method !== "POST" )
    {
        return res.status( 405 ).json( { message: "Method not allowed" } );
    }

    try
    {
        const { email, cart, total } = req.body;

        // 🔹 Create PDF invoice
        const doc = new PDFDocument();
        let buffers = [];

        doc.on( "data", buffers.push.bind( buffers ) );
        doc.on( "end", async () =>
        {
            const pdfData = Buffer.concat( buffers );

            // 🔹 Mail transporter
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
                subject: "Your ShopEasy Invoice 🧾",
                text: "Thank you for your order! Invoice attached.",
                attachments: [
                    {
                        filename: "invoice.pdf",
                        content: pdfData,
                    },
                ],
            } );

            return res.status( 200 ).json( { success: true } );
        } );

        // PDF content
        doc.fontSize( 20 ).text( "ShopEasy Invoice", { align: "center" } );
        doc.moveDown();

        cart.forEach( ( item ) =>
        {
            doc
                .fontSize( 12 )
                .text( `${ item.title } - ${ item.qty } × ₹${ item.price }` );
        } );

        doc.moveDown();
        doc.fontSize( 14 ).text( `Total: ₹${ total }` );

        doc.end();
    } catch ( error )
    {
        console.error( error );
        return res.status( 500 ).json( { error: "Email failed" } );
    }
}
