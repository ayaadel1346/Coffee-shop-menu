interface TitleDescButtonSecProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export default function TitleDescButtonSec({
  title,
  description,
  buttonLabel,
  onButtonClick,
}: TitleDescButtonSecProps) {
  return (
    <section
      role="region"
      aria-labelledby="title-desc-button-section"
      className="flex flex-col justify-center items-center md:w-[65%] mx-auto my-[90px] px-3 md:px-0 text-center"
    >
      <h2
        id="title-desc-button-section"
        data-testid="section-title"
        className="text-primary text-[18px] md:text-[30px] font-bold mb-3"
      >
        {title}
      </h2>

      <p
        data-testid="section-description"
        className="text-secondary text-[16px] md:text-[18px] leading-5 md:leading-[30px] mb-6"
      >
        {description}
      </p>

      {buttonLabel && (
        <button
          onClick={onButtonClick}
          className="bg-primary text-white text-[16px] font-semibold py-2 px-6 rounded-full hover:bg-[#e0b56f] transition-all duration-300"
        >
          {buttonLabel}
        </button>
      )}
    </section>
  );
}
