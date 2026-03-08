import PageWrapper from "../components/PageWrapper";

function Contact() {
  return (
    <PageWrapper title="Contact Us">
      <form className="grid gap-4">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Email" />
        <textarea className="border p-2 rounded" placeholder="Message" />
        <button className="bg-orange-500 text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </PageWrapper>
  );
}

export default Contact;
