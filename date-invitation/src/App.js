import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import ProposalPage from "./components/ProposalPage";
import DateDetails from "./components/DateDetails";
import FinalPage from "./components/FinalPage";

function App() {
  const [step, setStep] = useState(1);
  const [dateData, setDateData] = useState({
    date: "",
    time: "",
    place: "",
    food: "",
    dessert: "",
    activity: "",
    dressCode: "",
    specialRequest: "",
    herName: "",
    herEmail: "",
  });

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your Public Key
  }, []);

  const handleYes = () => setStep(2);

  const handleDateSubmit = async (data) => {
    setDateData(data);
    await sendEmail(data);
    setStep(3);
  };

  const sendEmail = async (data) => {
    try {
      const templateParams = {
        from_name: data.herName || "Your Special Someone",
        from_email: data.herEmail || "No email provided",
        date: new Date(data.date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: data.time || "Not specified",
        place: data.place || "Not specified",
        food: data.food || "Not specified",
        dessert: data.dessert || "Not specified",
        activity: data.activity || "Not specified",
        dressCode: data.dressCode || "Not specified",
        specialRequest: data.specialRequest || "No special requests",
        message: `${data.herName || "Someone special"} said YES to a date! 💕`,
      };

      console.log("📧 Sending email with params:", templateParams);

      const response = await emailjs.send(
        "YOUR_SERVICE_ID_HERE", // Replace with your Service ID
        "YOUR_TEMPLATE_ID_HERE", // Replace with your Template ID
        templateParams,
      );

      console.log("✅ Email sent!", response);
      alert("✅ Date details sent to your email!");
    } catch (error) {
      console.error("❌ Email error:", error);
      alert("⚠️ Could not send email, but we saved your date!");
    }
  };

  return (
    <div className="App">
      {step === 1 && <ProposalPage onYes={handleYes} />}
      {step === 2 && <DateDetails onSubmit={handleDateSubmit} />}
      {step === 3 && <FinalPage dateData={dateData} />}
    </div>
  );
}

export default App;
