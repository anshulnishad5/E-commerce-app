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

            // 🔹 Send Email with Attachment
            await resend.emails.send( {
                from: "ShopEasy <onboarding@resend.dev>",
                to: email,
                subject: "Your ShopEasy Invoice",
                html: `
          <h2>Thank you for your order!</h2>
          <p>Your invoice is attached as a PDF.</p>
          <p>Happy shopping 🛒</p>
        `,
                attachments: [
                    {
                        filename: "ShopEasy-Invoice.pdf",
                        content: pdfBuffer,
                    },
                ],
            } );

            return res.status( 200 ).json( { success: true } );
        } );

        /* ---------------- PDF DESIGN ---------------- */

        // 🔹 Header Background
        doc.rect( 0, 0, 612, 90 ).fill( "#1f2937" );

        doc
            .fillColor( "#ffffff" )
            .fontSize( 26 )
            .text( "ShopEasy Invoice", 50, 35 );

        doc.moveDown( 4 );

        // 🔹 Reset color
        doc.fillColor( "#000000" );

        // 🔹 Customer Info
        doc
            .fontSize( 12 )
            .text( `Customer Email: ${ email }` )
            .moveDown( 1 );

        // 🔹 Order Table Header
        const tableTop = doc.y;

        doc.rect( 50, tableTop, 512, 30 ).fill( "#e5e7eb" );

        doc
            .fillColor( "#111827" )
            .fontSize( 12 )
            .text( "Product", 60, tableTop + 10 )
            .text( "Qty", 300, tableTop + 10 )
            .text( "Price", 360, tableTop + 10 )
            .text( "Total", 460, tableTop + 10 );

        doc.moveDown( 2 );

        // 🔹 Cart Items
        doc.fillColor( "#000000" );

        cart.forEach( ( item ) =>
        {
            const itemTotal = item.price * item.qty;

            doc
                .fontSize( 11 )
                .text( item.title, 60, doc.y )
                .text( item.qty.toString(), 300, doc.y )
                .text( `₹${ item.price }`, 360, doc.y )
                .text( `₹${ itemTotal }`, 460, doc.y );

            doc.moveDown();
        } );

        // 🔹 Divider
        doc.moveDown();
        doc
            .moveTo( 50, doc.y )
            .lineTo( 562, doc.y )
            .stroke( "#d1d5db" );

        doc.moveDown( 1 );

        // 🔹 Total Section
        doc
            .fontSize( 16 )
            .fillColor( "#111827" )
            .text( `Grand Total: ₹${ total }`, {
                align: "right",
            } );

        // 🔹 Footer
        doc
            .moveDown( 3 )
            .fontSize( 10 )
            .fillColor( "#6b7280" )
            .text(
                "Thank you for shopping with ShopEasy!\nFor any help, contact support@shopeasy.com",
                { align: "center" }
            );

        doc.end();
    } catch ( error )
    {
        console.error( error );
        return res.status( 500 ).json( { success: false } );
    }
}
