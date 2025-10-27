# Email Configuration Guide

## 📧 **Updated Email Settings**

Your project has been updated to use **Hostinger SMTP** with the following configuration:

### **SMTP Settings:**
- **Email**: info@effemark.com
- **Password**: Effmrk@3405$
- **SMTP Server**: smtp.hostinger.com
- **Port**: 465
- **Security**: SSL/TLS

## 🔧 **Environment Variables**

Add these to your `.env` file:

```env
# Email Configuration - Hostinger SMTP
EMAIL_USER=info@effemark.com
EMAIL_PASS=Effmrk@3405$

# Alternative SMTP variables (for contact forms)
SMTP_USER=info@effemark.com
SMTP_PASS=Effmrk@3405$
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_FROM=info@effemark.com
```

## 📋 **Updated Files**

The following files have been updated with Hostinger SMTP configuration:

1. **`src/app/api/order/api.ts`** - Order confirmation emails
2. **`src/app/api/contactUs/route.ts`** - Contact form emails (already configured)
3. **`src/app/api/sampleRequest/route.ts`** - Sample request emails (already configured)

## 🧪 **Testing Email Configuration**

### **1. Test Email Connection**
```bash
node test-email-config.js
```

### **2. Test Contact Form**
- Go to `/contact-us`
- Fill out the form
- Check if email is sent successfully

### **3. Test Order Emails**
- Create a test order
- Check if confirmation email is sent

## 📧 **Email Functions**

Your project now sends emails for:

1. **Order Confirmation** - When an order is created
2. **Order Status Updates** - When order status changes
3. **Order Completion** - When order is completed
4. **Order Failure** - When order fails
5. **Contact Form** - When someone contacts you
6. **Sample Requests** - When someone requests samples

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **"Invalid login" Error**
   - Check email and password are correct
   - Verify SMTP settings with Hostinger

2. **"Connection timeout" Error**
   - Check if port 465 is accessible
   - Verify SSL/TLS settings

3. **"Authentication failed" Error**
   - Check if email account is active
   - Verify password is correct

### **Hostinger SMTP Settings:**
- **Outgoing Server**: smtp.hostinger.com
- **Port**: 465 (SSL) or 587 (TLS)
- **Security**: SSL/TLS
- **Authentication**: Required

## ✅ **Verification Steps**

1. **Check Environment Variables**:
   ```bash
   echo $EMAIL_USER
   echo $EMAIL_PASS
   ```

2. **Test SMTP Connection**:
   ```bash
   node test-email-config.js
   ```

3. **Check Application Logs**:
   - Look for "✅ Hostinger SMTP server is ready" message
   - Check for any email errors in console

## 🚀 **Production Deployment**

For production deployment:

1. **Set Environment Variables** in your hosting platform
2. **Test Email Sending** after deployment
3. **Monitor Email Logs** for any issues
4. **Set up Email Monitoring** if needed

## 📞 **Support**

If you encounter issues:
1. Check Hostinger email settings
2. Verify SMTP credentials
3. Test with a simple email first
4. Check firewall/port restrictions
