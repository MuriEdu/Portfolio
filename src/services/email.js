import emailjs from "emailjs-com";

function Email(name, email, msg) {
  const service = "service_lmtbxuq";
  const template = "template_a1pwlla";
  const id = "user_vlOKJio3TyeCUJescRPCx";

  const templateParams = {
    from_name: name,
    user_email: email,
    message: msg,
  };

  emailjs.send(service, template, templateParams, id).then(
    (result) => {
      alert("Message sent successfully");
    },
    (error) => {
      alert("Smoething is wrong");
      console.log(error.text);
    }
  );

  return;
}

export default Email;
