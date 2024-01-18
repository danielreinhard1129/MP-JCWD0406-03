export function maskEmail(email:string):string {

    const parts = email.split('@');
    const maskedUsername = parts[0].substring(0, 2) + '*'.repeat(parts[0].length - 2);
    const maskedEmail = maskedUsername + '@' + parts[1];
    
    return maskedEmail;
  }
  