const MailService = {
  async sendEmail(data) {
    return await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
};

export default MailService;
