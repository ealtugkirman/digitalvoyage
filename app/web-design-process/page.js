"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../public/web-tasarım-süreçi-nasıl-işler.jpg";
import wireframing from "../../public/wireframing-nedir.webp";
import design from "../../public/design.json";
import Lottie from "lottie-react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ContactUs from "../components/ContactUs";

const page = () => {
  return (
    <div className="h-full flex flex-col pt-44 items-center text-dark bg-light">
      <h1 className="text-6xl text-gradient font-bold mb-5">
        Web Design Process
      </h1>
      <h3 className="text-xl opacity-55 mb-5">
        A basic outline of the web design process we would use on a mid sized
        web design project
      </h3>
      <div className="mx-10 md:mx-44">
        <Image src={img1} width={1024} height={500} />
      </div>
      <div id="paragraf" className="mx-10 md:mx-52 text-wrap my-12 ">
        <h3 className=" mb-4">An introduction to the web design process</h3>
        <div className="text-lg space-y-6 ">
          {" "}
          <p>
            On our quotes, we often include a brief outline of what will be
            involved in building a new website. This can help our clients
            understand what they need to prepare for as well as give them an
            idea of how much time is required for each phase.
          </p>
          <p>
            Below we have included an expanded version of this process, albeit,
            a lot more general and simplified.
          </p>
          <p>
            Whilst this example guide will help you better understand the web
            design process, it's worth expecting that the process for your
            project may differ in some ways given its unique nature.
          </p>
          <p>
            Give this, it is always worth asking your web designer how each
            phase of your specific web design project will work.
          </p>
        </div>
        <h4 className=" ">Web design phases</h4>
        <div className="text-lg space-y-3 ">
          <li>The web design brief</li>
          <li>Wireframing</li>
          <li>Design</li>
          <li> Server setup & configuration</li>
          <li> CMS setup & configuration</li>
          <li> Content handling</li>
          <li> Website development</li>
          <li> Content lock down and testing</li>
          <li> Launch</li>
          <li> Support, analysis & promotion</li>
        </div>
        <h4 className=" ">Web Design Brief</h4>
        <div className="text-lg space-y-6 ">
          {" "}
          <p>
            Commonly our clients will have a clear idea of what they require
            before they approach us to quote on building them a new website.
          </p>
          <p>
            To help us understand this, they give us a web design requirement
            specification.
          </p>
          <p>
            A web design requirement specification is simply a written document
            that outlines all the things you want our web designers to know you
            need in your website.
          </p>
          <p>
            Generally, a simple web design requirement specification will
            include:
          </p>
          <li>Time frame for each deliverable</li>
          <li>Budget</li>
          <li>Mission critical requirements</li>
          <li> Ideal inclusions</li>
          <li> Technical requirements</li>
          <li> Reference websites</li>
          <li> Primary points of contactt</li>
          <p>
            Preparing a document like this is a great way to help fast track
            these early stages of your web design project. It allows our web
            design team to quickly understand how long they have to deliver the
            website, what your website needs to do and how much your company can
            afford to invest into the new website.
          </p>
          <p>
            Once we're clear on these details, we'll be able to provide an
            indicative web design quote along with a range of implementation
            strategies, optional inclusion costs and a staged rollout plan.
          </p>
          <h3 className=" pt-12 text-3xl">Common questions</h3>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do we need to a have a meeting prior to quoting on my website?">
              <div className="space-y-4">
                <p>
                  {" "}
                  Having a face to facing briefing about a new website can be
                  useful but it isn't always required.
                </p>
                <p>
                  {" "}
                  For small projects, if you've seen a few other sites which we
                  can reference that are similar to what you want to build, we
                  can use this to give you a ballpark cost and time frame.
                </p>{" "}
                <p>
                  {" "}
                  For complicated projects, we will insist on you meeting with
                  one of our web designers before we quote so that we can be
                  confident we truly understand all the technical requirements
                  that need to be included in your new website.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title=" How do I go about writing a web design specification?">
              <div className="space-y-2">
                {" "}
                <p>
                  If you're not sure where to start with writing your web design
                  specification, just copy our headings from above and write
                  whatever you can below each heading.
                </p>
                <p className="underline underline-offset-5">
                  Below is a brief example of a very basic web design
                  specification:
                </p>
                <p className="font-semibold pt-4">
                  Time frame for each deliverable
                </p>
                <p>Website much be launched by Christmas.</p>
                <p className="font-semibold pt-4">Budget</p>
                <p>
                  We're looking for quotes between 5k - 12k. A business case to
                  spend more on the website would be welcome.
                </p>
                <p className="font-semibold pt-4">
                  Mission critical requirements
                </p>
                <p>
                  The website will include 20 - 30 pages, needs to have a call
                  to action form on each page, an easy way for us to update it
                  ourselves and rank well in Google.
                </p>
                <p className="font-semibold pt-4">Ideal inclusions</p>
                <p>
                  If the contact form can integrate with our CRM software
                  (Salesforce), this would be great.
                </p>
                <p className="font-semibold pt-4">Technical requirements</p>
                <p>
                  Our company has a web portal which we'd like to link to from
                  the website. We're not sure what's involved in this but would
                  like to look at this as an option. Could be a stage 2 option
                  but an upfront price guide would be appreciated.
                </p>{" "}
                <p className="font-semibold pt-4">Reference websites</p>
                <p>Our competitor is: https://www.pwc.com.au/</p>
                <p>
                  We're ten times smaller than PWC but feel a web design that is
                  a little like this would do our job well: https://llh.com.au/
                </p>{" "}
                <p className="font-semibold pt-4">Primary points of contact</p>
                <p>Project lead: Joe Blogs - joe@blogs.com</p>
                <p>IT contact: Steve Blogs - steve@blogs.com</p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-20 justify-center  flex">
          {" "}
          <Image src={wireframing} width={700} />
        </div>{" "}
        <div className="text-lg space-y-6 ">
          <h3 className="pt-20">Wireframing</h3>
          <p>
            Wireframing is a quick and easy way of working out how your website
            will work before we have a signed off web design concept or final
            content.
          </p>
          <p>
            You can find some{" "}
            <a href="https://looka.com/blog/wireframe-examples/">
              examples of web design wireframes here.
            </a>
          </p>
          <p>
            Wireframing tends to be reserved for bigger budget projects which
            allocate more time to planning, feedback cycles and UX innovations.
          </p>
          <p className="quote">
            This gives our web designers an opportunity to explore a few ideas
            with the client without the cost of mocking up each screen as a
            complete web design.
          </p>
          <p>
            Typically smaller budget web design jobs won't include a wireframing
            stage. Whilst there are some exceptions to this, most small budget
            projects will have a restricted design phase and can't afford the
            extra costs associated with UX innovations.
          </p>
          <h3 className="pt-20">Design</h3>
          <p>
            Most websites use one of two approaches when it comes to the design
            phase:
          </p>
          <li>An "off the shelf" template / theme</li>
          <li>A custom web design</li>
          <p>
            √Whilst our web designers will make a recommendation towards one of
            these two approaches based upon your web design requirement
            specification, it can be helpful to know the pros and cons of each
            approach before you proceed.
          </p>
          <h4>Using an "off the shelf" template / theme for your web design</h4>
          <p>
            An "off the shelf" template/theme is a pre-coded web design which
            can be applied to your website.
          </p>
          <p>
            The process of applying a theme to your website is very simple. We
            start by shortlisting a handful of themes from{" "}
            <a href="https://themeforest.net/"> an online theme library. </a> We
            then send these to our client and invite them to browse the theme
            library for any other web design templates they like the look of.
          </p>
          <p>
            Once we have a final list of options, we then work through each
            option with our client to help select the best web design template
            for their needs
          </p>
          <p>
            Once selected, our web designers will then do some basic
            customisations to the theme so that it fits with our client's
            branding and then load it to their CMS.
          </p>
          <h4>
            Advantages of using a template / theme for your website design
          </h4>
          <p>
            There are big cost and time savings associated with using a
            pre-coded theme. As you're working with a finite selection of design
            options, there are fewer decisions to be made and a reduced number
            of design refinement cycles. As a result, using a web design
            template for your new website can be a great way to get a website
            online faster and for less cost.
          </p>
          <h4>
            Disadvantages of using a template / theme for your website design
          </h4>
          <p>
            As the quality of themes can vary, it's easy to select a web design
            template which is a little buggy on older browsers or mobile
            devices. Often these issues can only be detected after installing
            the theme and may require special features like animations to be
            removed so that your website supports a broad cross-section of web
            browsers.
          </p>
          <p>
            As the quality of themes can vary, it's easy to select a web design
            template which is a little buggy on older browsers or mobile
            devices. Often these issues can only be detected after installing
            the theme and may require special features like animations to be
            removed so that your website supports a broad cross-section of web
            browsers.
          </p>
          <p className="quote">
            Another common problem we find is that a lot of themes don't use the
            best coding practices.
          </p>
          <p>
            This means websites which use themes can be slower to load, fail to
            achieve certain accessibility standards and perform poorly in
            Google.
          </p>
          <p>
            Finally, when selecting a theme, it's always worth remembering that
            the best themes can be pretty common. This means you may end up
            seeing other website's which look the same as yours given you've all
            decided to use the same web design.
          </p>
          <h4>Using a custom web design</h4>
          <p>
            If your business needs to compete effectively online, using a custom
            web design is always the best option.
          </p>
          <p>
            Websites which use a custom design can better balance the elements
            your web design requires. This means better Google rankings, faster
            page load speed, broader browser support, lower cost maintenance and
            greater design flexibility.
          </p>{" "}
          <p>
            This is because when our web designers are creating your website,
            they're thinking about critical issues such as:
          </p>
          <li>How to we ensure this key element looks great on mobile</li>
          <li>
            What can we do to make sure the pages load as fast as possible
          </li>
          <li>
            Does this layout provision for all the SEO requirements this website
            will need
          </li>
          <li>
            What else could be done to increase the visual appeal of this layout
          </li>
          <li>
            How do we make this web design as easy as possible for our client to
            manage using their CMS software
          </li>
          <p>
            None of these questions are asked when you implement a theme-based
            design. This is why companies who choose to use a theme-based web
            design are initially happy with the price and delivery time but can
            be later disappointed that they didn't get the results they were
            hoping for.
          </p>{" "}
          <h4>The custom web design process</h4> <p></p>
          <p>
            When we design a new website for a client, we like to start with a
            design briefing session in our studio. This allows us to better
            understand the client's business and the target markets they're
            trying to attract.
          </p>
          <p>
            Once we're clear on what our client needs, we'll then do a selection
            of web design layouts which will cover the critical sections of the
            website.
          </p>
          <p>
            For example, if it's an e-commerce website, we would potentially
            provide the following web design layouts:
          </p>
          <li>Homepage: mobile and desktop designs</li>
          <li>Product listing page: mobile and desktop designs</li>
          <li>Product detail page: mobile and desktop designs</li>
          <li>Kitchen sink layout: mobile and desktop design</li>
          <p>
            To avoid cost blowouts, we will rarely do a web design of every
            screen you come across as this can cost more than actually building
            the website.
          </p>{" "}
          <p>
            Instead, where possible, we'll use examples of other work we've done
            to help fill the gaps. For example, if there is a shopping cart
            process which we think will work fine for a particular site, we will
            identify this with our client and then use this as the basis for
            that section of the website.
          </p>{" "}
          <p>
            Likewise, if the client has a particular shopping cart process they
            want us to use which is nothing like anything we've built before,
            we'd likely wireframe this element instead of designing it in full.
            As our wireframes can be interactive, this will give our client a
            clear idea of how this section will work without requiring a full
            visual mockup before we build it.
          </p>{" "}
          <p>
            Naturally, if we have a client who is happy to spend the time and
            bear the costs of mocking up all the screens before we proceed with
            a web design build, we're happy to do this too but it will add
            considerable costs to things.
          </p>{" "}
          <h4>Advantages of using a custom web design</h4>{" "}
          <p>
            Custom web designs are tailor-made to your needs. This gives you a
            considerable advantage over your competition as your site will be
            able to load faster, including more elements which are optimised for
            search engines (SEO), be easier to manage and promote your message
            more clearly.
          </p>{" "}
          <h4>Disadvantages of using a custom web design</h4>{" "}
          <p>
            The custom web design phase can require anywhere from two weeks to
            three months to complete. It also costs more as our web designers
            will be working on your project for this length of time.
          </p>{" "}
          <p className="">
            This said, if you have a new web design project and you are a little
            cost-conscious but feel that the advantages of having a custom web
            design would be beneficial for you, please contact us. We can always
            send through a web design quote with costs for both options.
          </p>
        </div>
      </div>
      <div className="text-light pt-32">
        {" "}
        <ContactUs />
      </div>
    </div>
  );
};

export default page;
