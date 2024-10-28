const appConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL ?? '',
  port: process.env.NEXT_PUBLIC_PORT_BUILDER ?? '',
  tinyCloudAPIKey: process.env.NEXT_PUBLIC_TINY_CLOUD_API_KEY ?? '',
  contact: {
    work: {
      phone: process.env.NEXT_PUBLIC_EMAIL_WORK_CONTACT ?? '',
      email: process.env.NEXT_PUBLIC_PHONE_WORK_CONTACT ?? ''
    },
    career: {
      phone: process.env.NEXT_PUBLIC_EMAIL_CAREER_CONTACT ?? '',
      email: process.env.NEXT_PUBLIC_PHONE_CAREER_CONTACT ?? ''
    }
  }
}

export default appConfig
