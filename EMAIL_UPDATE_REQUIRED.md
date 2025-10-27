# Email Configuration Update Required

## 🚨 **Current Issue**

Your `.env` file currently has:
```
EMAIL_USER: your_email@gmail.com
```

But it should be:
```
EMAIL_USER: info@effemark.com
EMAIL_PASS: Effmrk@3405$
```

## 🔧 **Required Environment Variables**

Update your `.env` file with these exact values:

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

## 📋 **Steps to Fix**

### **1. Update .env File**
Replace the current email settings with:
```env
EMAIL_USER=info@effemark.com
EMAIL_PASS=Effmrk@3405$
```

### **2. Restart Development Server**
```bash
npm run dev
```

### **3. Test Email Configuration**
```bash
node test-email-config.js
```

## 🔍 **Verification**

After updating your `.env` file, you should see:
```
📋 Environment Variables:
EMAIL_USER: info@effemark.com
EMAIL_PASS: Set
```

## 📧 **Email Functions Updated**

The following email functions now use Hostinger SMTP:

1. **Order Confirmation Emails** - `src/app/api/order/api.ts`
2. **Contact Form Emails** - `src/app/api/contactUs/route.ts`
3. **Sample Request Emails** - `src/app/api/sampleRequest/route.ts`

## 🧪 **Testing**

### **Test Contact Form:**
1. Go to `/contact-us`
2. Fill out the form
3. Submit and check if email is sent

### **Test Order Emails:**
1. Create a test order
2. Check if confirmation email is sent to customer

## ⚠️ **Important Notes**

1. **Email Account**: Make sure `info@effemark.com` is active in Hostinger
2. **Password**: Use the exact password `Effmrk@3405$`
3. **SMTP Settings**: Port 465 with SSL/TLS
4. **Security**: The password contains special characters, make sure it's properly escaped

## 🚀 **Next Steps**

1. Update your `.env` file with correct credentials
2. Restart your development server
3. Test email functionality
4. Deploy to production with updated environment variables
