import { Resend } from "resend";

const resend = new Resend( process.env.RESEND_API_KEY );

export default async function handler ( req, res )
{
    if ( req.method !== "POST" )
    {
        return res.status( 405 ).json( { message: "Method not allowed" } );
    }

    try
    {
        const { email, cart, total } = req.body;

        const itemsHTML = cart
            .map(
                item =>
                    `<li>${ item.title } × ${ item.qty } — ₹${ item.price * item.qty }</li>`
            )
            .join( "" );

        await resend.emails.send( {
            from: "ShopEasy <onboarding@resend.dev>",
            to: email,
            subject: "🧾 Your ShopEasy Invoice",
            html: `
        <h2>Thank you for your order!</h2>
        <p>Here is your invoice:</p>
        <ul>${ itemsHTML }</ul>
        <h3>Total: ₹${ total }</h3>
        <p>We hope to see you again 💛</p>
    `,
        } );

        res.status( 200 ).json( { success: true } );
    } catch ( error )
    {
        console.error( error );
        res.status( 500 ).json( { success: false } );
    }
}
