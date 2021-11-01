import audio from "./img/audioeverything-1.png";
import comics from "./img/comics-1.png";
import bell from "./img/bell-1.png";
import bell1 from "./img/bell-4.png";
import audio2 from "./img/audioeverything-2.png";
import audio3 from "./img/audioeverything-3.png";
import comics2 from "./img/comics-5.png";
import comics3 from "./img/comics-3.png";
import gutties from "./img/gutties-1.png";
import gutties2 from "./img/gutties-2.png";
import gutties3 from "./img/gutties-3.png";

export const projects = () => {
  return [
    {
      title: "Audio Everything",
      mainImg: audio,
      secondaryImg: audio2,
      thirdImg: audio3,
      url: "/work/audio-everything",
      awards: [
        {
          title: "Job Description",
          description:
            "To build a site to display an sound engineers audio equipment and provide means for contact",
        },
        {
          title: "Stack Used",
          description:
            "This site was built using ReactJS, styled with Boostrap and employed formspree for the client to receive emails through the contact section on the site.",
        },
        {
          title: "Link to site",
          description: "https://sound-4ymx0xrj3-timmlaxton.vercel.app/",
        },
        {
          title: "Link to repo",
          description: "https://github.com/timmlaxton/sound",
        },
      ],
    },
    {
      title: "City Center Comics",
      mainImg: comics,
      url: "/work/comics",
      secondaryImg: comics2,
      thirdImg: comics3,
      awards: [
        {
          title: "Job Description",
          description:
            "A e-commerce site for a comic shop. Client needed a e-commerce site for his shop that would enable customers to browse and buy stock. Additional requirements for the site included, clear presentation of stock, ability to filter through stock, having stock update after sale of purchase, ability to add, delete and edit stock.",
        },
        {
          title: "Stack Used",
          description:
            "This site was built using the MERN stack and applied a MVC framework. The frontend applied ReactJS and utilized Redux to manage the sites state. Bootstrap was employed to provide styling. For the backend, Express, NodeJS and MongoDB were used.",
        },
        {
          title: "Link to site",
          description: "https://citycentrecomicsapp.herokuapp.com/",
        },
        {
          title: "Link to repo",
          description: "https://github.com/timmlaxton/comic",
        },
      ],
    },
    {
      title: "Bell Images",
      mainImg: bell,
      url: "/work/bell-images",
      secondaryImg: bell1,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Gutties",
      mainImg: gutties,
      url: "/work/gutties",
      secondaryImg: gutties2,
      thirdImg: gutties3,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
