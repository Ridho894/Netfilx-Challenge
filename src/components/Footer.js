import React from "react";

const footerContent = [
  {
    id: 1,
    title: "FAQ",
    children: [
      { id: 1, title: "Investor Relations" },
      { id: 2, title: "Ways to Watch" },
      { id: 3, title: "Corporate Information" },
      { id: 4, title: "Only on Netflix" },
    ],
  },
  {
    id: 2,
    title: "Help Center",
    children: [
      { id: 1, title: "Jobs" },
      { id: 2, title: "Terms of Use" },
      { id: 3, title: "Contact Us" },
    ],
  },
  {
    id: 3,
    title: "Account",
    children: [
      { id: 1, title: "Redeem Gift Cards" },
      { id: 2, title: "Privacy" },
      { id: 3, title: "Speed Test" },
    ],
  },
  {
    id: 4,
    title: "Media Center",
    children: [
      { id: 1, title: "Buy Gift Cards" },
      { id: 2, title: "Cookie Preferences" },
      { id: 3, title: "Legal Notices" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-dark border-t-8 border-stone-800 text-stone-500 py-10">
      <section className="max-w-7xl mx-auto py-4">
        <h1>
          Questions?{" "}
          <span className="cursor-pointer hover:underline">
            Call +6288806446929
          </span>
        </h1>
        <div className="mt-6 grid grid-flow-row-dense grid-cols-2 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-start xl:justify-items-start">
          {footerContent.map((item) => (
            <div key={item.id}>
              <h1 className="font-semibold">{item.title}</h1>
              {item.children.map((child) => (
                <p
                  className="font-thin text-sm my-2 hover:underline cursor-pointer"
                  key={child.id}
                >
                  {child.title}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
