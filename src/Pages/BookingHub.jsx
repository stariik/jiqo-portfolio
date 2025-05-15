import ProjectDetails from '../components/ProjectDetails';

function BookingHub() {
  return (
    <ProjectDetails
      title="Booking Hub"
      services={[
        "Identity Design",
        "Branding",
        "Packaging Design",
        "Art Direction",
        "UI/UX Design",
      ]}
      description="BookingHub is a modern online booking platform that enables users to book services easily and efficiently. The platform integrates various industries, offering an innovative experience and ensuring user convenience."
      logoConcept="The BookingHub logo is designed to be clear, memorable, and dynamic, representing the brand’s trustworthiness, accessibility, and convenience."
      flexibilityTitle="Flexibility"
      flexibilityPoints={[
        { label: 'Letter “B”', text: 'Represents the first letter of the brand name, making it easy to identify and recognize.' },
        { label: 'Bookmark Symbol', text: 'Highlights the booking process, which is the platform’s core function.' },
      ]}
      closingText="The graphic design ensures that the logo remains minimalistic, adaptable, and versatile across different media, whether digital or physical. Logo is a modern and effective visual identity that clearly conveys the brand’s values. Its minimal yet powerful design builds strong recognition and enhances customer trust and brand success."
    />
  );
}

export default BookingHub;
