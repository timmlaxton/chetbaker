import audio from "./img/audioeverything-1.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import audio2 from "./img/audioeverything-2.png";
import audio3 from "./img/audioeverything-3.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

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
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
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
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,

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
