
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email,verificationToken)=>{
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })
        console.log("Email sent successfully")
    } catch (error) {
        console.log(error)
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async (email,name)=>{
    const recipient = [{email}];

    try {
       const response =  await mailtrapClient.send({
            from:sender,
            to: recipient,
            template_uuid:"3d1ef66e-495a-4341-97f8-0f9578a4ae0b",
            template_variables: {
                "company_info_name": "Auth Company",
                "name": name
              },
              
        })
        console.log("Welcome Email Send Successfully",response);
    } catch (error) {
        console.error(error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}

export const sendPasswordResetEmail = async (email,resetURL)=>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject:"Reset Password",
            html:  PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset"
        })
        console.log("Password Reset Email Sent Successfully")
    } catch (error) {
        console.log(`Error sending password reset email `,error);
        throw new Error(`Error sending password reset email: ${error} `);
    }
}

export const sendResetSuccessEmail = async (email)=>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject:"Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset"
        });
        console.log("Password Reset Email Sent Successfully");
    } catch (error) {
        console.error(`Error sending password reset email: ${error}`);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}