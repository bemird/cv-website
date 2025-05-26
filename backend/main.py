import os
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.message import EmailMessage

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/contact")
def contact(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    print(f"New message from {name} ({email}): {message}")

    # Create email
    email_msg = EmailMessage()
    email_msg["Subject"] = "New Contact Form Message"
    email_msg["From"] = os.environ["SMTP_USER"]
    email_msg["To"] = "boran.demir@hotmail.com"
    email_msg.set_content(f"Name: {name}\nEmail: {email}\n\n{message}")

    try:
        # Connect and send
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
            server.send_message(email_msg)
            print("✅ Email sent!")
        return {"success": True, "message": "Message sent successfully!"}
    except Exception as e:
        print("Email sending failed:", e)
        return {"success": False, "message": "Failed to send message."}
