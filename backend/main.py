import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv(".env")

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request schema
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
async def contact(form: ContactForm):
    print(f"📩 New message from {form.name} ({form.email}): {form.message}")

    email_msg = EmailMessage()
    email_msg["Subject"] = "New Contact Form Message"
    email_msg["From"] = os.environ["SMTP_USER"]
    email_msg["To"] = "boran.demir@hotmail.com"
    email_msg.set_content(f"Name: {form.name}\nEmail: {form.email}\n\n{form.message}")

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
            server.send_message(email_msg)
            print("✅ Email sent!")
        return {"success": True, "message": "Message sent successfully!"}
    except Exception as e:
        print("❌ Email sending failed:", e)
        return {"success": False, "message": "Failed to send message."}

@app.get("/")
def read_root():
    return {"status": "ok"}
