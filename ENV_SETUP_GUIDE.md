# 🔧 Environment Variables Setup Guide

## 📋 **Create Your .env File**

Create a new file called `.env` in your project root directory with the following content:

```env
# Environment Variables for Effemark

# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_mongodb_connection_string

# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox
PAYPAL_BASE_URL=http://localhost:3000

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_MODE=test

# Email Configuration - Hostinger SMTP ✅ UPDATED
EMAIL_USER=info@effemark.com
EMAIL_PASS=Effmrk@3405$

# Alternative SMTP variables (for contact forms)
SMTP_USER=info@effemark.com
SMTP_PASS=Effmrk@3405$
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_FROM=info@effemark.com

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Other Configuration
NODE_ENV=development
```

## 🚀 **Steps to Setup**

### **1. Create .env File**
```bash
# In your project root directory
touch .env
```

### **2. Copy the Configuration**
Copy the environment variables above into your `.env` file.

### **3. Update Your Values**
Replace the placeholder values with your actual credentials:

- **MongoDB**: Your MongoDB connection string
- **PayPal**: Your PayPal sandbox/live credentials
- **Razorpay**: Your Razorpay test/live credentials
- **Email**: Already configured for Hostinger ✅

### **4. Restart Development Server**
```bash
npm run dev
```

## 📧 **Email Configuration Status**

✅ **Email settings are already configured for Hostinger SMTP:**
- **Email**: info@effemark.com
- **Password**: Effmrk@3405$
- **SMTP Server**: smtp.hostinger.com
- **Port**: 465
- **Security**: SSL/TLS

## 🔍 **Verification**

After creating your `.env` file, you can verify the email configuration by:

1. **Starting your development server**
2. **Testing the contact form** at `/contact-us`
3. **Creating a test order** to check order confirmation emails

## ⚠️ **Important Notes**

1. **Never commit `.env` file** to version control
2. **Keep your credentials secure**
3. **Use different credentials for production**
4. **Test email functionality** after setup

## 🎯 **What's Already Updated**

The following files have been updated to use Hostinger SMTP:

- ✅ `src/app/api/order/api.ts` - Order emails
- ✅ `src/app/api/contactUs/route.ts` - Contact form emails  
- ✅ `src/app/api/sampleRequest/route.ts` - Sample request emails

Your email configuration is ready! Just create the `.env` file and restart your server.
