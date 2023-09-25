import { sendMail } from "../../config/nodemailer";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        await sendMail(req.body);
        res.status(200).json({ message: "Mail sent" });
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export default handler;
