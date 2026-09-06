import { useState } from "react";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqItems = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes. Our delivery service supports businesses of different sizes and works with a wide range of parcel types and destinations.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Consistent support and proper posture habits can help make everyday movement more comfortable. For ongoing pain, consult a qualified healthcare professional.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "You can receive timely delivery updates and notifications throughout the parcel journey, from pickup through final delivery.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "Join our updates list or contact the support team to receive restock and service availability notifications.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="mt-10 overflow-hidden rounded-2xl bg-slate-100 px-5 py-10 sm:px-8 sm:py-12 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-[#063f45] sm:text-3xl lg:text-4xl">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-500">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className={`overflow-hidden rounded-xl border bg-white transition-colors ${
                isOpen ? "border-[#0a9aaa]" : "border-gray-200"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-[#063f45] sm:px-6"
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <FiChevronUp className="shrink-0 text-lg text-[#0a5960]" />
                ) : (
                  <FiChevronDown className="shrink-0 text-lg text-gray-800" />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-[#0a5960]/10 px-5 pb-5 pt-4 text-sm leading-6 text-gray-500 sm:px-6">
                  {item.answer}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <a
        href="#faq"
        className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-xl bg-lime-300 px-6 py-3 text-sm font-bold text-gray-950 transition hover:bg-lime-400"
      >
        See More FAQ’s
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-xl text-lime-300">
          <FiArrowUpRight aria-hidden="true" />
        </span>
      </a>
    </section>
  );
};

export default Faq;
