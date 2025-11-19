interface TitleDescButtonSecProps {
  title: string;
  description?: string;
  quote?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export default function TitleDescButtonSec({
  title,
  description,
  quote,
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

      {quote ? (
        <blockquote
          data-testid="section-quote"
          className="text-secondary text-[16px] md:text-[18px] leading-5 md:leading-[30px] mb-6"
        >
          {quote}
        </blockquote>
      ) : description ? (
        <p
          data-testid="section-description"
          className="text-secondary text-[16px] md:text-[18px] leading-5 md:leading-[30px] mb-6"
        >
          {description}
        </p>
      ) : null}

      {buttonLabel && (
        <button
          onClick={onButtonClick}
          className="
            relative cursor-pointer 
           text-[16px] md:text-[18px] font-bold text-active-link 
            border-2 border-accent 
            py-4 px-6 my-5 
            transition-all duration-300 ease-in-out 
            hover:text-primary hover:border-primary 
            
            after:content-[''] after:absolute after:top-[7%] after:left-[3.5%] 
            after:w-full after:h-full after:border-2 after:border-accent-light 
            hover:after:border-primary after:-z-10
          "
        >
          {buttonLabel}
        </button>
      )}
    </section>
  );
}
