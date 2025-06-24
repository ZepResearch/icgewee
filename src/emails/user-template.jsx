export const userEmailTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting us</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            color: #374151;
            background-image: radial-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px);
            background-size: 25px 25px;
        }
        
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: transparent;
        }
        
        .header-logo {
            text-align: center;
            margin-bottom: 16px;
        }
        
        .logo-box {
            width: 280px;
            height: 80px;
            margin: 0 auto;
            background: linear-gradient(to top left, #38bdf8, #fb7185, #a3e635);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-text {
            color: #ffffff;
            font-weight: 700;
            font-size: 13px;
            padding: 0 8px;
            text-align: center;
            margin: 0;
            line-height: 1.3;
        }
        
        .main-container {
            padding: 32px;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #f3f4f6;
            position: relative;
            overflow: hidden;
        }
        
        .main-container::before {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #38bdf8, #fb7185, #a3e635, #84cc16);
            border-radius: 16px;
            z-index: -1;
            filter: blur(12px);
            opacity: 0.3;
        }
        
        .gradient-border {
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.2), 0 0 30px rgba(251, 113, 133, 0.15), 0 0 45px rgba(163, 230, 53, 0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 32px;
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(to top left, #38bdf8, #fb7185, #a3e635);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
        }
        
        .divider {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 24px 0;
        }
        
        .greeting {
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            background: linear-gradient(to top left, #38bdf8, #fb7185, #a3e635);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin-bottom: 16px;
        }
        
        .content-text {
            font-size: 16px;
            color: #374151;
            line-height: 1.6;
            margin-bottom: 16px;
        }
        
        .event-details {
            margin-top: 24px;
            padding: 24px;
            background-color: #f9fafb;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
        }
        
        .event-title {
            font-size: 18px;
            font-weight: 500;
            background: linear-gradient(to top left, #38bdf8, #fb7185, #a3e635);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin-bottom: 16px;
        }
        
        .detail-item {
            margin-bottom: 12px;
            padding: 12px;
            background-color: #ffffff;
            border-radius: 8px;
            border-left: 4px solid;
        }
        
        .detail-item:last-child {
            margin-bottom: 0;
        }
        
        .detail-item.date {
            border-left-color: #38bdf8;
        }
        
        .detail-item.location {
            border-left-color: #fb7185;
        }
        
        .detail-item.focus {
            border-left-color: #a3e635;
        }
        
        .detail-item.website {
            border-left-color: #38bdf8;
        }
        
        .detail-label {
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 4px;
        }
        
        .detail-label.date {
            color: #38bdf8;
        }
        
        .detail-label.location {
            color: #fb7185;
        }
        
        .detail-label.focus {
            color: #a3e635;
        }
        
        .detail-label.website {
            color: #38bdf8;
        }
        
        .detail-value {
            font-size: 16px;
            color: #374151;
            margin: 0;
        }
        
        .detail-link {
            color: #38bdf8;
            text-decoration: underline;
        }
        
        .detail-link:hover {
            color: #0369a1;
        }
        
        .cta-section {
            margin-top: 32px;
            text-align: center;
        }
        
        .gradient-button {
            background: linear-gradient(to top left, #38bdf8, #fb7185, #a3e635);
            color: #ffffff;
            font-weight: 700;
            padding: 12px 24px;
            border-radius: 30px;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
            transition: all 0.3s ease;
        }
        
        .gradient-button:hover {
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.6);
            color: #ffffff;
        }
        
        .footer {
            margin-top: 32px;
            text-align: center;
        }
        
        .copyright {
            font-size: 14px;
            background: linear-gradient(to top left, #38bdf8, #fb7185, #a3e635);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin: 0;
        }
        
        .disclaimer {
            font-size: 12px;
            color: #6b7280;
            margin-top: 8px;
            margin-bottom: 0;
        }
        
        @media only screen and (max-width: 600px) {
            .container {
                margin: 20px auto;
            }
            
            .logo-box {
                width: 250px;
                height: 70px;
            }
            
            .logo-text {
                font-size: 11px;
            }
            
            .main-container {
                padding: 24px;
                border-radius: 12px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .greeting {
                font-size: 18px;
            }
            
            .content-text {
                font-size: 14px;
            }
            
            .event-details {
                padding: 20px;
            }
            
            .event-title {
                font-size: 16px;
            }
            
            .detail-item {
                padding: 10px;
            }
            
            .detail-value {
                font-size: 14px;
            }
            
            .gradient-button {
                padding: 10px 20px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with logo -->
       

        <!-- Main content container -->
        <div class="main-container gradient-border">
            <!-- Header -->
            <div class="header">
                <h1>THANK YOU FOR CONTACTING US</h1>
                <hr class="divider">
            </div>

            <!-- Greeting -->
            <p class="greeting">Hello, ${data.name}!</p>
            <p class="content-text">
                We've received your message and appreciate your interest in the International Conference on
                Gender Equality, Women Empowerment & Entrepreneurship. Our team will review your inquiry and get back to
                you as soon as possible.
            </p>
            <p class="content-text">
                In the meantime, you might find answers to common questions on our FAQ page or explore our conference program.
            </p>

            <!-- Event details -->
            <div class="event-details">
                <p class="event-title">EVENT DETAILS:</p>

                <div class="detail-item date">
                    <div class="detail-label date">Date:</div>
                    <p class="detail-value">October 10th - 11th, 2025</p>
                </div>

                <div class="detail-item location">
                    <div class="detail-label location">Location:</div>
                    <p class="detail-value">Bali, Indonesia</p>
                </div>

                <div class="detail-item focus">
                    <div class="detail-label focus">Focus Areas:</div>
                    <p class="detail-value">Gender Equality, Women Empowerment, Entrepreneurship</p>
                </div>

                <div class="detail-item website">
                    <div class="detail-label website">Website:</div>
                    <p class="detail-value">
                        <a href="https://www.icgewee.com" class="detail-link">
                            www.icgewee.com
                        </a>
                    </p>
                </div>
            </div>

            <!-- CTA Button (commented out in original, uncomment if needed) -->
            <!--
            <div class="cta-section">
                <a href="https://www.icgewee.com" class="gradient-button">
                    EXPLORE OUR PROGRAM
                </a>
            </div>
            -->

            <!-- Footer -->
            <div class="footer">
                <hr class="divider">
                <p class="copyright">
                    © 2025 International Conference on Gender Equality, Women Empowerment & Entrepreneurship
                </p>
                <p class="disclaimer">
                    This is an automated response. Please do not reply to this email.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;