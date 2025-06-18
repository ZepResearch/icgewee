import RegistrationEmailTemplate from "@/emails/PaymentInitiatedEmail"
import { NextResponse } from "next/server"
import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const data = await req.json()

    // Send email to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "info@icgewee.com",
      to: process.env.ADMIN_EMAIL || "info@icgewee.com",
      subject: "New Payment Initiated for ICGEWEE Registration",
      html: RegistrationEmailTemplate ({ ...data, recipient: "admin" }),
    })

    // Send confirmation email to client
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "info@icgewee.com",
      to: data.billing_email,
      subject: "Payment Initiated for ICGEWEE Registration",
      html: RegistrationEmailTemplate ({ ...data, recipient: "user" }),
    })

    return NextResponse.json({ message: "Payment notification emails sent successfully" })
  } catch (error) {
    console.error("Error sending payment notification emails:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
