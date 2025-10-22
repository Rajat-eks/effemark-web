# PayPal Integration Fix Guide

## 🔧 **Issues Fixed**

1. **API URL Configuration**: Fixed sandbox vs live API URLs
2. **Environment Variables**: Unified PayPal configuration
3. **Error Handling**: Improved error messages and debugging
4. **Configuration Check**: Added proper validation

## 🛠️ **Environment Variables Setup**

Create or update your `.env` file with these variables:

```env
# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox

# For frontend PayPal SDK (optional, can use same as backend)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

# Base URL for your application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 🧪 **Testing Your Setup**

### **1. Test PayPal Credentials**
```bash
node test-paypal-credentials.js
```

### **2. Test PayPal Service**
```bash
node test-paypal-service.js
```

## 📋 **PayPal App Setup**

### **For Sandbox (Testing)**
1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create a new app
3. Set environment to **Sandbox**
4. Copy Client ID and Secret
5. Set `PAYPAL_MODE=sandbox` in your `.env`

### **For Live (Production)**
1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create a new app
3. Set environment to **Live**
4. Submit for approval (can take 24-48 hours)
5. Copy approved Client ID and Secret
6. Set `PAYPAL_MODE=live` in your `.env`

## 🔍 **Common Issues & Solutions**

### **Issue: "invalid_client" Error**
- **Cause**: Wrong credentials or wrong mode
- **Solution**: 
  - Check if you're using sandbox credentials with live mode
  - Verify your Client ID and Secret are correct
  - Make sure your app is approved (for live mode)

### **Issue: "PayPal is not properly configured"**
- **Cause**: Missing or invalid environment variables
- **Solution**:
  - Check your `.env` file has all required variables
  - Restart your development server
  - Verify no typos in variable names

### **Issue: "No access token received"**
- **Cause**: PayPal API response issue
- **Solution**:
  - Check your internet connection
  - Verify PayPal API is accessible
  - Check if your credentials have proper permissions

## ✅ **Verification Steps**

1. **Check Environment Variables**:
   ```bash
   node -e "console.log(process.env.PAYPAL_CLIENT_ID)"
   ```

2. **Test PayPal Authentication**:
   ```bash
   node test-paypal-credentials.js
   ```

3. **Test PayPal Service**:
   ```bash
   node test-paypal-service.js
   ```

4. **Test in Browser**:
   - Go to your checkout page
   - Check browser console for PayPal logs
   - Verify PayPal button appears

## 🚀 **Quick Start**

1. **Set up PayPal app** in developer dashboard
2. **Copy credentials** to your `.env` file
3. **Set mode** to `sandbox` for testing
4. **Test** with the test scripts
5. **Deploy** when ready for production

## 📞 **Support**

If you're still having issues:
1. Check PayPal Developer Dashboard for app status
2. Verify your credentials are correct
3. Test with sandbox mode first
4. Check PayPal API status page
