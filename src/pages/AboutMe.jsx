import React from 'react';
import headshot from '../assets/images/nm-headshot.jpg';

export default function AboutMe() {
  return (
      <div className="flex h-full">
        <div className="w-1/3 pr-4">
          <img
            src={headshot}
            alt="Nate Master's Headshot"
            className="rounded-full h-full"
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold">About Me</h1>
          <p>
            Hello and welcome to my portfolio! My name is Nate Master, I'm a Site
            Reliability Engineer at Mastercard, a passionate web developer and a
            former teacher and football coach with a love for creating engaging
            and user-friendly web applications. My journey in web development
            began just this year when I graduated from Washington University's Full
            Stack Coding Boot Camp, and since taking my SRE job at Mastercard, I've
            been learning so much about BizOps and SRE while continuously honing my
            development skills on the side.
          </p>
          <p>
            I specialize in full-stack development, using modern technologies like
            React, JavaScript, and Python, and I'm also proficient in back-end
            technologies such as Node.js and MySQL, NoSQL, and GraphQL database
            structures. My goal is to craft exceptional digital experiences that not
            only look great but also function seamlessly. At my most recent
            position, I've been working heavily on integrating monitoring tools like
            Prometheus and Grafana into existing Enterprise operations while also
            acting as my team's Federated Change Manager overseeing and approving
            the numerous changes that my team made every single day.
          </p>
          <p>
            When I'm not coding, my wife Meagan and I love to travel. We have been
            all over the US as well as to Mexico, Italy, Greece, and France. I'm a
            die-hard sports fan and love going to games for my favorite teams: the
            Eagles, 76ers, Cardinals, Blues, and Battlehawks. I taught for 15 years,
            so I still love mentoring young people and coaching and training
            football players, wrestlers, and rugby players much like I did as a
            coach. I'm also an avid reader and an occasional gamer. Please check out
            my portfolio and resume and reach out if you want to connect or have any
            opportunities to create something, learn something, or grow somehow!
            I'd love to work with you!
          </p>
        </div>
      </div>
  );
}

