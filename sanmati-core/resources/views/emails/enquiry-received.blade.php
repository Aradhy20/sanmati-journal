<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background-color: #f8fafc; }
        .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
        .header { background: #1e3a5f; color: #fff; padding: 24px 32px; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
        .body { padding: 32px; }
        .field { margin-bottom: 16px; }
        .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
        .field-value { font-size: 15px; color: #1e293b; }
        .message-box { background: #f1f5f9; border-radius: 8px; padding: 16px; margin-top: 8px; }
        .footer { padding: 16px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📬 New Contact Enquiry</h1>
        </div>
        <div class="body">
            <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">{{ $enquiryData['firstName'] }} {{ $enquiryData['lastName'] }}</div>
            </div>
            <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:{{ $enquiryData['email'] }}">{{ $enquiryData['email'] }}</a></div>
            </div>
            <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">{{ $enquiryData['subject'] }}</div>
            </div>
            <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">{{ $enquiryData['message'] }}</div>
            </div>
        </div>
        <div class="footer">
            This email was sent from the Sanmati Journal website contact form.
        </div>
    </div>
</body>
</html>
