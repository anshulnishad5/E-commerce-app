import { Resend } from "resend";
import PDFDocument from "pdfkit";

const resend = new Resend( process.env.RESEND_API_KEY );

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
        const doc = new PDFDocument( { size: "A4", margin: 50 } );
        const buffers = [];

        doc.on( "data", buffers.push.bind( buffers ) );
        doc.on( "end", async () =>
        {
            const pdfBuffer = Buffer.concat( buffers );

            // 🔹 Send email with PDF attachment
            await resend.emails.send( {
                from: "ShopEasy <onboarding@resend.dev>",
                to: email,
                subject: "Your ShopEasy Invoice (PDF)",
                html: "<p>Thank you for your order! Your invoice is attached.</p>",
                attachments: [
                    {
                        filename: "invoice.pdf",
                        content: pdfBuffer,
                    },
                ],
            } );

            return res.status( 200 ).json( { success: true } );
        } );

        // 🔹 PDF Content
        doc.fontSize( 22 ).text( "ShopEasy Invoice", { align: "center" } );
        doc.moveDown();

        cart.forEach( ( item ) =>
        {
            doc
                .fontSize( 14 )
                .text( `${ item.title } | Qty: ${ item.qty } | ₹${ item.price * item.qty }` );
        } );

        doc.moveDown();
        doc.fontSize( 18 ).text( `Total: ₹${ total }`, { align: "right" } );

        doc.end();
    } catch ( error )
    {
        console.error( error );
        return res.status( 500 ).json( { success: false } );
    }
}
