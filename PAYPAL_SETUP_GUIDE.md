# PayPal Setup Guide

## 🔧 **Current Issue**
Your PayPal is configured for **live mode** but getting `401 invalid_client` error.

## 🛠️ **Solutions**

### **Option 1: Switch to Sandbox Mode (Recommended for Testing)**

1. **Update your `.env` file:**
```env
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_sandbox_client_id
PAYPAL_CLIENT_SECRET=your_sandbox_client_secret
```

2. **Get Sandbox Credentials:**
   - Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
   - Create a new app or use existing one
   - Make sure it's set to **Sandbox**
   - Copy the Client ID and Secret

### **Option 2: Fix Live Mode (For Production)**

If you need live mode, ensure:

1. **App is Approved:**
   - Your PayPal app must be approved for live transactions
   - This can take 24-48 hours after submission

2. **Correct Credentials:**
   - Make sure you're using live credentials, not sandbox
   - Live credentials are different from sandbox

3. **App Permissions:**
   - Your app needs proper permissions for payments
   - Check in PayPal Developer Dashboard

## 🧪 **Test Your Setup**

Run this command to test your credentials:
```bash
node test-paypal-credentials.js
```

## 📋 **Environment Variables**

Make sure your `.env` file has:
```env
# For Sandbox (Testing)
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_sandbox_client_id
PAYPAL_CLIENT_SECRET=your_sandbox_client_secret

# For Live (Production) - Only after approval
PAYPAL_MODE=live
PAYPAL_CLIENT_ID=your_live_client_id
PAYPAL_CLIENT_SECRET=your_live_client_secret
```

## 🔍 **Common Issues**

1. **Wrong Mode**: Using sandbox credentials with live mode
2. **App Not Approved**: Live apps need approval
3. **Wrong Credentials**: Double-check Client ID and Secret
4. **Permissions**: App needs payment permissions

## ✅ **Quick Fix**

For immediate testing, switch to sandbox mode:
1. Change `PAYPAL_MODE=sandbox` in your `.env`
2. Use sandbox credentials
3. Test with sandbox PayPal accounts
